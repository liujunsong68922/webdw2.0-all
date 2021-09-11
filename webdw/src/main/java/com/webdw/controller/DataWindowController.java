package com.webdw.controller;

import java.util.*;

import com.webdw.common.Golbal;
import com.webdw.common.MyInt;
import com.webdw.common.exception.WebDWAuthorizedException;
import com.webdw.common.exception.WebDWException;
import com.webdw.common.util.SQLStringReplaceUtil;
import com.webdw.config.WebDWConfigVO;
import com.webdw.model.WebDWModel;
import com.webdw.model.datamodel.CWebDWData;
import com.webdw.model.dboper.DBModifyOper;
import com.webdw.model.dboper.DBSelectOper;
import com.webdw.model.dboper.DWConfig;
import com.webdw.model.syntaxmodel.CWebDW;
import com.webdw.model.syntaxmodel.CWebDW_SyntaxFromSQL;
import com.webdw.model.syntaxmodel.dwsyntax.WebDWSyntax;
import com.webdw.view.DataWindowViewModel;
import com.webdw.view.ui.MyUIComponent;
import com.webdw.view.ui.container.MyJPanel;

import hello.webdw.controller.WebDWControllerRet;
import hello.webdw.dbutil.WebDWDBUtil;

public class DataWindowController extends Golbal {
	private String _ReadMe = "Datawindow Controller,simulate PB Datawindow Controller";

	public String dwname = "";
	public String uuid = "";
	public String errString = "";//

	// 使用新定义的数据模型对象
	public WebDWModel model = new WebDWModel();

	private MyInt iret = new MyInt(0);//

	// 返回对象
	public WebDWControllerRet retObject = new WebDWControllerRet();

	public DataWindowController() {
	}

	private String _DW_GetSQLPreview(MyInt iret) {
		WebDWSyntax local_webdw = this.model.webdw.webdw_creator.local_webdw;

		String stable = "";//

		if (!local_webdw.table.retrieve.pbselect.table[2].equals("")) {// 'Ŀǰ��֧�ֵ�������Ƕ���˳�
			iret.intvalue = 0;
			return "";
		}

		if (local_webdw.table.retrieve.pbselect.table[1].equals("")) {// '�����һ������Ϊ�գ��˳�
			iret.intvalue = -1;
			// DW_GetSQLPreview = ""
			errString = "ERROR: no table define";
			return "";
		}
		stable = local_webdw.table.retrieve.pbselect.table[1];
		stable = Replace(stable, "~" + "\"", ""); //

		return model.webdwData.GetUpdateSql(stable, iret);

	}

	public int DW_Retrieve(String username,String args) throws WebDWAuthorizedException  {
		//add Retrieve privileges check
		System.out.println("dwname:"+this.dwname);
		boolean isAuthorized = false;
		isAuthorized = new WebDWDBUtil().checkUserDwOper(username, this.dwname, "Retrieve");
		
		System.out.println("Authorized:"+isAuthorized);
		if(! isAuthorized) {
			throw new WebDWAuthorizedException("Unauthorized call."+this.dwname+".Retrieve");
		}
		
		String strsql = "";// As String
		String sdata = "";// As String
		String argArray[] = new String[1];// As Variant
		String arg = "";// As Variant
		String sarg = "";// As String
		int argid = 0;// As Long
		// int iret=0;// As Long

		// 获取Select SQL定义
		// 从数据窗口配置表中进行读取
		DWConfig config = new DWConfig();
		strsql = config.getDWSelectSQLByDWName(dwname);
		String strargs = config.getDWSelectArgsByDWName(dwname);
		String selectargs[] = strargs.split(",");

		// 查询参数替换及SQL检查
		SQLStringReplaceUtil strUtil = new SQLStringReplaceUtil();
		// 参数替换
		strsql = strUtil.Replace(strsql, selectargs, args);

		try {
			// 执行Select SQL,返回结果
			DBSelectOper dboper = new DBSelectOper();
			sdata = dboper.executeSelect(strsql);

			_SetData(sdata, "normal");
			model.GenerateViewModel();
			this.retObject.status = 200;
			this.retObject.message = "DW.Retrieve OK.";
			//将结果集合以字符串形式返回
			this.retObject.strDWData = sdata;
			//将结果集合转换为ArrayList<LinkedHashMap>形式返回
			this.retObject.jsonList = this.getDataArrayList(sdata);
			
		} catch (WebDWException e) {
			this.retObject.status = 500;
			this.retObject.message = "DW.Retrieve Error:" + e.getErrString();
		}

		// generate output object
		this.generateReturnObject();
		return 0;
	}

	private int _SetDataObject(String sdwName) throws WebDWException {
		this.dwname = sdwName;

		int iret = 0;
		String columnString = "";// As String
		iret = this.model.webdw.CreateByDwName(sdwName);

		// check whether datawindow create success.
		if (iret == -1) {
			errString = this.model.webdw.errString;
			throw new WebDWException("error when create datawindow");
		}

		columnString = this.model.webdw.GetColumnDefineString();
		iret = model.webdwData.InitData(columnString);

		if (iret == -1) {
			errString = model.webdwData.errString;
			throw new WebDWException("error when init WebDWData object");
		}

		int maxwidth = 0;// As Long
		maxwidth = (int) (this.model.webdw.getMaxWidth());

		// 'step 5
		System.out.println("begin drawDW");
		
		model.GenerateViewModel();//

		// step6 generate output object
		this.generateReturnObject();

		return 0;

	}

	public int DW_SetDataObjectByName(String username, String sdwName) throws  WebDWAuthorizedException {
		boolean isAuthorized = false;
		isAuthorized = new WebDWDBUtil().checkUserDwOper(username, sdwName, "SetDataObject");
		
		if(! isAuthorized) {
			throw new WebDWAuthorizedException("Unauthorized call. "+sdwName+"."+"SetDataObject");
		}
		
		this.dwname = sdwName;
		this.uuid = UUID.randomUUID().toString();
		try {
			this.retObject.status = 200;
			this.retObject.message = "DW.SetDataObject OK.";
			return _SetDataObject(sdwName);
		} catch (WebDWException e) {
			this.retObject.status = 500;
			this.retObject.message = "DW.SetDataObject Error:" + e.getErrString();
			return 0;
		}
	}

	private int _SetData(String indata, String datastate) {
		int iret = 0;// As Long

		if (datastate == null || datastate == "") {
			errString = "datastate argument error.";
			return -1;
		}

		iret = model.webdwData.InitData(indata, datastate);

		if (iret == -1) {
			errString = model.webdwData.errString;
			return -1;
		}

		return 0;
	}

	public int DW_InsertRow(String username,int rowid) throws Exception {
		//step1.check authorized
		boolean isAuthorized = false;
		isAuthorized = new WebDWDBUtil().checkUserDwOper(username, this.dwname, "InsertRow");
		
		if(! isAuthorized) {
			throw new WebDWException("Unauthorized call. "+this.dwname+"."+"InsertRow");
		}
		
		String emptystring = "";// As String
		int colid = 0;// As Long
		int colNum = 0;// As Long
		colNum = model.webdwData.GetColumnNumber();
		emptystring = "";
		for (colid = 1; colid <= colNum; colid++) {
			if (emptystring.equals("")) {
				emptystring = " ";
			} else {
				emptystring = emptystring + Chr(9) + "";
			}
		}

		int iret = 0;// As Long
		iret = model.webdwData.InsertRow(rowid, emptystring);

		if (iret == -1) {
			errString = model.webdwData.errString;
		} else {
		}
		model.GenerateViewModel();

		this.retObject.status = 200;
		this.retObject.message = "DW.Insert OK.";
		this.generateReturnObject();
		return iret;
	}

	public int DW_DeleteRow(String username,int rowid) throws WebDWAuthorizedException {
		boolean isAuthorized = false;
		isAuthorized = new WebDWDBUtil().checkUserDwOper(username, this.dwname, "DeleteRow");
		
		if(! isAuthorized) {
			throw new WebDWAuthorizedException("Unauthorized call. "+this.dwname+"."+"DeleteRow");
		}
		
		if (rowid <= 0) {
			return 0;
		}
		int iret = 0;// As Long
		iret = model.webdwData.DeleteRow(rowid);

		if (iret == -1) {
			// DW_DeleteRow = -1
			errString = model.webdwData.errString;
			return -1;
		}

		this.DW_Update(username);

		// 生成返回对象
		this.retObject.status = 200;
		this.retObject.message = "DW.Delete OK.";
		this.generateReturnObject();

		return 0;
	}

	public int DW_SetItem(int rowid, int colid, String sdata) throws Exception {

		int iret = 0;// As Long
		iret = toInt(model.webdwData.SetItemString(rowid, colid, sdata));
		if (iret == -1) {
			errString = model.webdwData.errString;
		}
		this.model.GenerateViewModel();
		return iret;
	}

	public int DW_Update(String username) throws WebDWAuthorizedException {

		//step1.check authorized
		boolean isAuthorized = false;
		isAuthorized = new WebDWDBUtil().checkUserDwOper(username, this.dwname, "Update");
		
		if(! isAuthorized) {
			throw new WebDWAuthorizedException("Unauthorized call. "+this.dwname+"."+"Update");
		}		
		
		String strsql = "";// As String
		strsql = this._DW_GetSQLPreview(iret);
		System.out.println("strsql:" + strsql);

		if (iret.intvalue == -1) {
			return -1;
		}

		String cmds[] = new String[1];// ) As String
		cmds = Split(strsql, "" + Chr(13) + Chr(10));

		System.out.println("length:" + cmds.length);

		try {
			DBModifyOper dboper = new DBModifyOper();
			for (String sql : cmds) {
				dboper.executeModify(sql);
			}

			this.model.webdwData.AfterUpdate();
			this.model.GenerateViewModel();
			this.retObject.status = 200;
			this.retObject.message = "DW.Update OK.";
			this.generateReturnObject();
			return 0;
		} catch (WebDWException e) {
			this.retObject.status = 500;
			this.retObject.message = "DW.Update Error:" + e.getErrString();
			this.generateReturnObject();
			e.printStackTrace();
			return 0;
		}

	}

	/**
	 * 生成返回的视图模型对象
	 * 
	 * @return
	 */
	private void generateReturnObject() {
		this.retObject.uuid = this.uuid;
		this.retObject.uiobjList = this.model.webdwviewmodel.targetControls;
	}
	
	private ArrayList getDataArrayList(String sdata) {
		ArrayList retList = new ArrayList();
		
		if(sdata==null || sdata.length()==0) {
			return retList;
		}
		//切换的分割符号改为使用配置类里面定义的行分割符，默认为回车符
		String data[] = sdata.split(WebDWConfigVO.Webdw_DataFormat_Line_Seperator);
		if(data.length==0) {
			return retList;
		}
		//第一行代表列名
		String columns = data[0];
		//按照WebDW配置对象中定义的列分割符号进行分割切分
		String column[] = columns.split(WebDWConfigVO.WebDW_DataFormat_Column_Seperator);
		
		for(int i=1;i<data.length;i++) {
			LinkedHashMap map = new LinkedHashMap();
			//按照WebDW配置对象中定义的列分割符号进行分割切分
			String row[] = data[i].split(WebDWConfigVO.WebDW_DataFormat_Column_Seperator);
			for(int j=0;j<column.length;j++) {
				if(j<row.length) {
					map.put(column[j],row[j]);
				}else {
					map.put(column[j],"");
				}
			}
			retList.add(map);
		}
		return retList;
	}
	
	/**
	 * 按照SQL语句来进行检索处理
	 * [WARNING:]这一方法仅为开发过程提供，不建议在生产环境使用，因为无法判断控制权限
	 * @param username
	 * @param args
	 * @return
	 * @throws WebDWAuthorizedException
	 * @throws WebDWException 
	 */
	public int DW_RetrieveBySql(String strsql,String stype) throws WebDWAuthorizedException, WebDWException  {
		//add Retrieve privileges check
		System.out.println("strsql:"+strsql);
		System.out.println("stype:"+stype);

		//第一步先利用SQL语句来动态生成数据窗口
		this.dwname = "dynamic";
		this.uuid = UUID.randomUUID().toString();
		
		//创建webdw内存对象
		int iret = this.model.webdw.CreateBySQL(strsql,stype);
		
		String sdata = "";// As String
		try {
			// 执行Select SQL,返回结果
			DBSelectOper dboper = new DBSelectOper();
			sdata = dboper.executeSelect(strsql);

			_SetData(sdata, "normal");
			model.GenerateViewModel();
			this.retObject.status = 200;
			this.retObject.message = "DW.Retrieve OK.";
			//将结果集合以字符串形式返回
			this.retObject.strDWData = sdata;
			//将结果集合转换为ArrayList<LinkedHashMap>形式返回
			this.retObject.jsonList = this.getDataArrayList(sdata);
			
		} catch (WebDWException e) {
			this.retObject.status = 500;
			this.retObject.message = "DW.Retrieve Error:" + e.getErrString();
		}

		// generate output object
		this.generateReturnObject();
		return 0;
	
	}

}
