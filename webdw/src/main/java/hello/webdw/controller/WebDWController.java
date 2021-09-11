package hello.webdw.controller;

import java.util.ArrayList;

import org.slf4j.Logger;
//import org.apache.logging.log4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.webdw.controller.DataWindowController;
import com.webdw.model.syntaxmodel.dwsyntax.WebDWSyntax;
import com.alibaba.fastjson.JSONObject;
import com.webdw.common.MyInt;
import com.webdw.common.exception.WebDWAuthorizedException;
import com.webdw.common.exception.WebDWException;
import com.webdw.controller.CWebDWMemCache;
import com.webdw.view.ui.container.MyJPanel;

import hello.webdw.dbutil.WebDWDBUtil;

/**
 * WebDW Controller
 * 
 * @author Liu JunSong
 * @email liujunsong@aliyun.com
 * @Date:2018/12/8
 * @version:1.0 璁块棶璺緞/webdw/
 * 
 */

@Controller // This means that this class is a Controller
@RequestMapping(path = "/") //
public class WebDWController {
	//Logger logger = Logger.getLogger(WebDWController.class);
	Logger logger = LoggerFactory.getLogger(WebDWController.class);
	
	// 鏄惁鏀寔榛樿鐢ㄦ埛锛屽鏋滀笉鏀寔鍒欎細鎶ラ敊
	private boolean CONST_DEFAULT_USER_ALLOW = true;
	// 鏀寔榛樿鐢ㄦ埛鐨勬儏鍐典笅锛宼oken鏃犳晥浼氬緱鍒伴粯璁ょ敤鎴峰悕锛屼紶閫掔粰鍚庡彴
	private String CONST_DEFAULT_USERNAME = "guest";

	/**
	 * 娴嬭瘯椤甸潰锛屾樉绀烘杩庡瓧绗︿覆
	 * 
	 * @return
	 */
	@GetMapping(path = "/")
	public @ResponseBody String index() {
		String s = "Welcome to webdw's world!";
		logger.info(s);
		return s;
	}

	@GetMapping(path = "/setdataobject")
	public @ResponseBody WebDWControllerRet dw_f1_SetDataObject(@RequestParam String token,
			@RequestParam String dwname) {
		logger.info("enter setdataobject.token="+token+",dwname="+dwname);
		return this._SetDataObject(token, dwname);
	}

	@ResponseBody
	@RequestMapping(value = "/SetDataObject", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
	//@CrossOrigin(origins = "*", maxAge = 3600)
	public WebDWControllerRet dw_f11_SetDataObject(@RequestBody JSONObject jsonParam) {
		String token = jsonParam.getString("token");
		String dwname = jsonParam.getString("dwname");
		if (token == null || dwname == null) {
			return new WebDWControllerErrorRet(500, "璋冪敤鍙傛暟缂哄け");
		}
		return this._SetDataObject(token, dwname);
	}

	@GetMapping(path = "/retrieve")
	public @ResponseBody WebDWControllerRet dw_f2_Retrieve( @RequestParam String dwname,
			@RequestParam String args) {
		String token="";
		logger.info("enter retrieve.token="+token+",dwname="+dwname+",args="+args);
		return this._Retrieve(token, dwname, args);
	}

	@GetMapping(path = "/retrievebysql")
	public @ResponseBody WebDWControllerRet dw_f22_RetrieveBysql
		(@RequestParam String token, @RequestParam String strsql,
			@RequestParam String stype) {
		return this._RetrieveBySQL(token, strsql, stype);
	}

	
	@GetMapping(path = "/retrieve2" ,produces = "application/json;charset=iso-8859-1")
	public @ResponseBody WebDWControllerRet dw_f2_Retrieve2(@RequestParam String token, @RequestParam String dwname,
			@RequestParam String args) {
		
		return this._Retrieve(token, dwname, args);
	}	

	@ResponseBody
	@RequestMapping(value = "/Retrieve", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
	//@CrossOrigin(origins = "*", maxAge = 3600)
	public WebDWControllerRet dw_f21_Retrieve(@RequestBody JSONObject jsonParam) {
		String token = jsonParam.getString("token");
		String dwname = jsonParam.getString("dwname");
		String args = jsonParam.getString("args");
		if (token == null || dwname == null) {
			return new WebDWControllerErrorRet(500, "璋冪敤鍙傛暟缂哄け");
		}
		return this._Retrieve(token, dwname, args);
	}

	@GetMapping(path = "/insertrow")
	public @ResponseBody WebDWControllerRet dw_f3_InsertRow(@RequestParam String token, @RequestParam String uuid) {
		return this._InsertRow(token, uuid);
	}

	@ResponseBody
	@RequestMapping(value = "/InsertRow", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
	//@CrossOrigin(origins = "*", maxAge = 3600)
	public WebDWControllerRet dw_f31_InsertRow(@RequestBody JSONObject jsonParam) {
		String token = jsonParam.getString("token");
		String uuid = jsonParam.getString("uuid");
		if (token == null || uuid == null) {
			return new WebDWControllerErrorRet(500, "璋冪敤鍙傛暟缂哄け");
		}
		return this._InsertRow(token, uuid);
	}

	@GetMapping(path = "/deleterow")
	public @ResponseBody WebDWControllerRet dw_f4_DeleteRow(@RequestParam String token, @RequestParam String uuid,
			@RequestParam int rowid) {
		logger.info("enter deleterow.token="+token+",uuid="+uuid+",rowid="+rowid);
		return this._DeleteRow(token, uuid, rowid);
	}

	@ResponseBody
	@RequestMapping(value = "/DeleteRow", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
	//@CrossOrigin(origins = "*", maxAge = 3600)
	public WebDWControllerRet dw_f41_DeleteRow(@RequestBody JSONObject jsonParam) {
		String token = jsonParam.getString("token");
		String uuid = jsonParam.getString("uuid");
		int rowid = jsonParam.getIntValue("rowid");
		if (token == null || uuid == null) {
			return new WebDWControllerErrorRet(500, "璋冪敤鍙傛暟缂哄け");
		}
		return this._DeleteRow(token, uuid, rowid);
	}

	@GetMapping(path = "/update")
	public @ResponseBody WebDWControllerRet dw_f5_Update(@RequestParam String token, @RequestParam String uuid) {
		logger.info("enter update.token="+token+",uuid="+uuid);
		return this._Update(token, uuid);
	}

	@ResponseBody
	@RequestMapping(value = "/Update", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
	//@CrossOrigin(origins = "*", maxAge = 3600)
	public WebDWControllerRet dw_f52_Update(@RequestBody JSONObject jsonParam) {
		String token = jsonParam.getString("token");
		String uuid = jsonParam.getString("uuid");
		if (token == null || uuid == null) {
			return new WebDWControllerErrorRet(500, "璋冪敤鍙傛暟缂哄け");
		}
		return this._Update(token, uuid);
	}

	@GetMapping(path = "/setitem")
	public @ResponseBody WebDWControllerRet dw_f6_SetItem(@RequestParam String uuid, @RequestParam int rowid,
			@RequestParam int colid, @RequestParam String data) throws Exception {
		logger.info("enter setitem");
		return this._SetItem(uuid, rowid, colid, data);
	}
	
	@ResponseBody
	@RequestMapping(value = "/SetItem", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
	//@CrossOrigin(origins = "*", maxAge = 3600)
	public WebDWControllerRet dw_f62_SetItem(@RequestBody JSONObject jsonParam) throws Exception {
		String uuid = jsonParam.getString("uuid");
		int rowid = jsonParam.getIntValue("rowid");
		int colid = jsonParam.getIntValue("colid");
		String data = jsonParam.getString("data");
		if ( uuid == null || data == null) {
			return new WebDWControllerErrorRet(500, "璋冪敤鍙傛暟缂哄け");
		}
		return this._SetItem(uuid, rowid, colid, data);
	}

	// 鏈湴鏂规硶锛屼緵Controller灏佽璋冪敤
	private WebDWControllerRet _SetDataObject(String token, String dwname) {
		// step1:get username
		String username = new WebDWDBUtil().getUserNameByToken(token);
		// 璁剧疆榛樿鐢ㄦ埛鍚嶏紝鏂逛究绯荤粺鍔熻兘娴嬭瘯锛岄粯璁ょ敤鎴峰悕涓篻uest
		if (username == "") {
			if (this.CONST_DEFAULT_USER_ALLOW) {
				username = this.CONST_DEFAULT_USERNAME;
			} else {
				return new WebDWControllerErrorRet(500, "Token 鏃犳晥");
			}
		}

		DataWindowController webdwui = new DataWindowController();
		try {
			webdwui.DW_SetDataObjectByName(username, dwname);
		} catch (WebDWAuthorizedException e) {
			WebDWControllerErrorRet ret = new WebDWControllerErrorRet(500, e.getErrString());
			return ret;
		}

		CWebDWMemCache.saveDataWindowController(webdwui);
		return webdwui.retObject;
	}

	private WebDWControllerRet _Retrieve(String token, String dwname, String args) {
		// step1:get username
		String username = new WebDWDBUtil().getUserNameByToken(token);

		// 璁剧疆榛樿鐢ㄦ埛鍚嶏紝鏂逛究绯荤粺鍔熻兘娴嬭瘯锛岄粯璁ょ敤鎴峰悕涓篻uest
		if (username == "") {
			if (this.CONST_DEFAULT_USER_ALLOW) {
				username = this.CONST_DEFAULT_USERNAME;
			} else {
				// token 澶辨晥锛岃繑鍥為敊璇俊鎭�
				WebDWControllerErrorRet ret = new WebDWControllerErrorRet(500, "Token 澶辨晥");
				return ret;
			}
		}

		DataWindowController webdwui = new DataWindowController();

		// step2. call SetDataObject
		try {
			webdwui.DW_SetDataObjectByName(username, dwname);
		} catch (WebDWAuthorizedException e) {
			e.printStackTrace();
			// token 澶辨晥锛岃繑鍥為敊璇俊鎭�
			WebDWControllerErrorRet ret = new WebDWControllerErrorRet(500, e.getErrString());
			return ret;
		}
		System.out.println(webdwui.errString);

		System.out.println("begin to call retrieve function");
		// set DataBuffer
		try {
			webdwui.DW_Retrieve(username, args);
		} catch (WebDWAuthorizedException e) {
			e.printStackTrace();
			WebDWControllerErrorRet ret = new WebDWControllerErrorRet(500, e.getErrString());
			return ret;
		}
		// save datawindow object to cache
		CWebDWMemCache.saveDataWindowController(webdwui);
		return webdwui.retObject;
	}

	private WebDWControllerRet _InsertRow(String token, String uuid) {
		// step1:get username
		String username = new WebDWDBUtil().getUserNameByToken(token);
		// 璁剧疆榛樿鐢ㄦ埛鍚嶏紝鏂逛究绯荤粺鍔熻兘娴嬭瘯锛岄粯璁ょ敤鎴峰悕涓篻uest
		if (username == "") {
			if (this.CONST_DEFAULT_USER_ALLOW) {
				username = this.CONST_DEFAULT_USERNAME;
			} else {
				// token 澶辨晥锛岃繑鍥為敊璇俊鎭�
				return new WebDWControllerErrorRet(500, "Token 澶辨晥");
			}
		}

		DataWindowController webdwui = new DataWindowController();
		webdwui = CWebDWMemCache.readParentDW(uuid);

		try {
			webdwui.DW_InsertRow(username, 0);
		} catch (WebDWException e) {
			e.printStackTrace();
			// token 澶辨晥锛岃繑鍥為敊璇俊鎭�
			WebDWControllerErrorRet ret = new WebDWControllerErrorRet(500, e.getErrString());
			return ret;
		} catch (Exception e) {
			e.printStackTrace();
			WebDWControllerErrorRet ret = new WebDWControllerErrorRet(500, e.getMessage());
			return ret;
		}
		return webdwui.retObject;
	}

	private WebDWControllerRet _DeleteRow(String token, String uuid, int rowid) {
		// step1:get username
		String username = new WebDWDBUtil().getUserNameByToken(token);

		// 璁剧疆榛樿鐢ㄦ埛鍚嶏紝鏂逛究绯荤粺鍔熻兘娴嬭瘯锛岄粯璁ょ敤鎴峰悕涓篻uest
		if (username == "") {
			if (this.CONST_DEFAULT_USER_ALLOW) {
				username = this.CONST_DEFAULT_USERNAME;
			} else {
				// token 澶辨晥锛岃繑鍥為敊璇俊鎭�
				return new WebDWControllerErrorRet(500, "Token 鏃犳晥");
			}
		}

		DataWindowController webdwui = new DataWindowController();
		webdwui = CWebDWMemCache.readParentDW(uuid);

		try {
			webdwui.DW_DeleteRow(username, rowid);
		} catch (WebDWAuthorizedException e) {
			e.printStackTrace();
			return new WebDWControllerErrorRet(500, e.getErrString());
		}
		return webdwui.retObject;
	}

	private WebDWControllerRet _Update(String token, String uuid) {
		System.out.println("enter update...");

		// step1:get username
		String username = new WebDWDBUtil().getUserNameByToken(token);

		// 璁剧疆榛樿鐢ㄦ埛鍚嶏紝鏂逛究绯荤粺鍔熻兘娴嬭瘯锛岄粯璁ょ敤鎴峰悕涓篻uest
		if (username == "") {
			if (this.CONST_DEFAULT_USER_ALLOW) {
				username = this.CONST_DEFAULT_USERNAME;
			} else {
				return new WebDWControllerErrorRet(500, "Token 鏃犳晥");
			}
		}

		DataWindowController webdwui = new DataWindowController();
		webdwui = CWebDWMemCache.readParentDW(uuid);

		try {
			webdwui.DW_Update(username);
		} catch (WebDWAuthorizedException e) {
			e.printStackTrace();
			// token 澶辨晥锛岃繑鍥為敊璇俊鎭�
			return new WebDWControllerErrorRet(500, e.getErrString());
		}
		return webdwui.retObject;
	}

	private WebDWControllerRet _SetItem(String uuid, int rowid,
			 int colid, String data) throws Exception {
		System.out.println("enter SetItem rowid:" + rowid);
		DataWindowController webdwui = new DataWindowController();
		webdwui = CWebDWMemCache.readParentDW(uuid);

		webdwui.DW_SetItem(rowid, colid, data);
		return webdwui.retObject;
	}
	
	
	private WebDWControllerRet _RetrieveBySQL(String token, String strsql, String stype) {
		// step1:get username
		String username = new WebDWDBUtil().getUserNameByToken(token);

		// 璁剧疆榛樿鐢ㄦ埛鍚嶏紝鏂逛究绯荤粺鍔熻兘娴嬭瘯锛岄粯璁ょ敤鎴峰悕涓篻uest
		if (username == "") {
			if (this.CONST_DEFAULT_USER_ALLOW) {
				username = this.CONST_DEFAULT_USERNAME;
			} else {
				// token 澶辨晥锛岃繑鍥為敊璇俊鎭�
				WebDWControllerErrorRet ret = new WebDWControllerErrorRet(500, "Token 澶辨晥");
				return ret;
			}
		}

		DataWindowController webdwui = new DataWindowController();

		// step2. 璋冪敤webdwui,璋冪敤鎸夌収SQL璇彞鏉ヨ繘琛屾绱㈢殑鏂规硶
		// Warning:杩欎竴鏂规硶搴斿綋閬垮厤鍦ㄧ敓浜х幆澧冧笂鐩存帴浣跨敤锛屾湁涓�瀹氶闄�
		try {
			webdwui.DW_RetrieveBySql(strsql, stype);
		} catch (WebDWAuthorizedException e) {
			e.printStackTrace();
			// token 澶辨晥锛岃繑鍥為敊璇俊鎭�
			WebDWControllerErrorRet ret = new WebDWControllerErrorRet(500, e.getErrString());
			return ret;
		} catch (WebDWException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			WebDWControllerErrorRet ret = new WebDWControllerErrorRet(500, e.getErrString());
			return ret;
		}
		System.out.println(webdwui.errString);

		// save datawindow object to cache
		CWebDWMemCache.saveDataWindowController(webdwui);
		return webdwui.retObject;
	}
	
}
