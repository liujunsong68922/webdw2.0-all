package com.webdw.gwt.server;

import javax.swing.JComponent;
import javax.swing.JTextField;
import java.util.List;
import java.awt.Color;
import java.io.File;

/**
 * ȫ�ֱ�������
 * 
 * @author admin
 * 
 */
public class Golbal2 extends VBFunction2 {
	public static final String JWebDWInfo = "    Author: Liujunsong  \r\n"
			+ "    E_Mail: liujunsong@aliyun.com  \r\n"
			+ "    http://webdw.vicp.net  \r\n"
			+ "    Info:If You Can See SourceCode and find bug in it  \r\n"
			+ "    Please contract me.  \r\n";

	public void ReadMe() {
		System.out.println("ȫ�ֱ�������");
		System.out.println(JWebDWInfo);
	}

//	public static WebDWSyntax GG_webdw = new WebDWSyntax();
//
//	public static WebDWSyntax GG_empty_webdw = new WebDWSyntax();

	public static String G_ServerURL = "http://localhost/webdw";

	public static String G_Lang = "";

	public static LangDef G_LangDef = new LangDef();

	public static Transaction_Const G_Transaction_Const = new Transaction_Const();

	private static String WebDWSite1 = "http://localhost:8001/myproj/Table";

	private static String WebDWSite2 = "http://localhost/myproj/Table";
	
	public static boolean True = true;
	public static boolean False = false;

	/**
	 * ��ʼ��ȫ�ֱ���
	 * 
	 */
	public static void InitGlobalVariable() {
		// G_ServerURL = WebDWSite;// '����Ĭ������,���ӵ�webdw.vicp.net

		// '��ȫ�����Գ�����ֵ
		G_LangDef.Lang_English = "english";
		G_LangDef.Lang_French = "french";
		G_LangDef.Lang_Japanese = "japanese";
		G_LangDef.Lang_SimpleChinese = "simplechinese";

		G_Lang = G_LangDef.Lang_SimpleChinese; // 'Ĭ��Ϊ����������ʾ

		// '��ȫ�������������õ�������������ֵ
		// '����������ʱ����֧��
		// 'G_EditMaskDataType.EditMask_Date = 1
		// 'G_EditMaskDataType.EditMask_Time = 2
		// 'G_EditMaskDataType.EditMask_DateTime = 3
		// 'G_EditMaskDataType.EditMask_Decimal = 4
		// 'G_EditMaskDataType.EditMask_Numeric = 5
		// 'G_EditMaskDataType.EditMask_String = 6

		// '��ʼ��ȫ���Գ�����������?
		G_Transaction_Const.Trans_Oper_Query = "1";
		G_Transaction_Const.Trans_Oper_Exec = "2";
		G_Transaction_Const.Trans_Oper_TableList = "3";
		G_Transaction_Const.Trans_Oper_ColumnList = "4";

		G_Transaction_Const.Trans_BeginTrans = "begintrans";
		G_Transaction_Const.Trans_AddCommand = "addcommand";
		G_Transaction_Const.Trans_Commit = "commit";
		G_Transaction_Const.Trans_Rollback = "rollback";

		G_Transaction_Const.Trans_GetDWDefine = "getdwdefine";// '�õ����ݴ��ڵĶ���

	}

	public Golbal2() {
		// ʵ����ʱ��ȫ�ֱ�������ֵ
		InitGlobalVariable();
	}

	// '��һ��targetControls�����У����ݸ����ؼ������������ؼ�
	// '����ؼ������ڣ��򷵻�Nothing
	public static JComponent GF_GetObjectByName(List targetControls,
			String objName) {
		JComponent vobj = null;
		for (int i = 0; i < targetControls.size(); i++) {
			vobj = (JComponent) targetControls.get(i);
			if (vobj == null) {
				continue;
			}
			if (vobj.getName() == null) {
				continue;
			}
			if (UCase(vobj.getName()).equals(UCase(objName))) {
				return vobj;
			}
		}
		return null;
	}

	public long GF_GetVBColor(long pbColor, long defColor) {
		long iret = 0;
		long SYSCOLOR = 16777215;// '�����ɫ�?,256 * 256 * 256 - 1

		if (pbColor <= SYSCOLOR) {
			return pbColor;
		}

		iret = defColor;// '����Ĭ����ɫ
		if (pbColor == 1090519039)
			iret = RGB(255, 255, 255); // '�����windowsĬ�ϱ���ɫ
		if (pbColor == 276856960)
			iret = RGB(125, 125, 125);// ' �����Ӧ�ù�����Ĭ�ϱ����?
		if (pbColor == 81324524)
			iret = RGB(125, 125, 125); // ' ����ǰ�ť���?
		if (pbColor == 33554592)
			iret = RGB(0, 0, 0); // 'window�ı�Ĭ����ɫ

		// '�����Ǽ��̶ֹ��������ɫת��?
		if (pbColor == 536870912)
			iret = RGB(255, 255, 255); // '��ɫ

		return iret;

	}

	public double GF_GetConvertRate(List targetControls) {
		double convertRate;
		JComponent TextConvertRate;

		TextConvertRate = GF_GetObjectByName(targetControls, "TextConvertRate");

		if (TextConvertRate == null) {
			return 0.5;
		}
		JTextField jt = (JTextField) TextConvertRate;
		convertRate = Double.parseDouble(jt.getText()); // '��ȡ����ֵ
		if (convertRate <= 0.1 || convertRate >= 10) {
			convertRate = 0.5;
		}

		return convertRate;
	}

//	public String GF_RetrieveBySyntax(String dwSyntax) {
//		MyInt iret = new MyInt(0);
//		CWebDW temp_webdw = new CWebDW();
//		CWebDWTransaction temp_sqlca = new CWebDWTransaction();
//		String str_retrieve = "";
//		String sdata = "";
//
//		if (temp_webdw.Create(dwSyntax) == -1) {// Then '����ʧ�ܣ����ؿ��ַ���
//			return "";
//		}
//		log(dwSyntax);
//		log("" + GG_webdw.getColumnNumber());
//		str_retrieve = temp_webdw.GetRetrieveSQL();// '�õ������õ�SQL���?
//		log(str_retrieve);
//		if (str_retrieve.length() == 0) {
//			return "";
//		}
//
//		//    
//		// 'temp_sqlca.opertype = 1
//		// 'temp_sqlca.beginPos = 0
//		// 'temp_sqlca.readNum = 1000
//		temp_sqlca.Eval("Setcommand(" + str_retrieve + ")", iret);
//
//		sdata = temp_sqlca.ExecuteSelect(iret);// 'ִ��sql,�õ����ݽ��?
//
//		if (iret.intvalue == -1) {// Then
//			return "";
//		}
//
//		return sdata;// '��������
//	}

	public long GF_GetDBlength(String sdata) {
		int i = 0;
		long ilen = 0;
		String stemp = "";
		ilen = 0;
		for (i = 1; i <= Len(sdata); i++) {
			stemp = Mid(sdata, i, 1);
			if (Asc(stemp) < 128 && Asc(stemp) > 0) {
				ilen = ilen + 1;
			} else {
				ilen = ilen + 2;
			}

		}
		return ilen;
	}

	public String GF_IF(boolean ifClause, String YesValue, String NoValue) {
		if (ifClause) {
			return YesValue;
		} else {
			return NoValue;
		}
	}

	public int GF_IF_Long(boolean ifClause, int YesValue, int NoValue) {
		if (ifClause) {
			return YesValue;
		} else {
			return NoValue;
		}
	}

	public int GF_GetAlignType(int intype) {
		if (intype == 0) {
			return JTextField.LEFT;
		}
		if (intype == 1) {
			return JTextField.RIGHT;
		}
		if (intype == 2) {
			return JTextField.CENTER;
		}
		return JTextField.CENTER;
	}

	/**
	 * ��VB����ɫת����Java����ɫ
	 * 
	 * @param vbcolor
	 * @return
	 */
	public Color GF_GetJavaColor(int vbcolor) {
		if (vbcolor == 255) {
			return Color.RED;
		}
		return new Color(0, 0, 0);
	}

	public void log(String s) {
		System.out.println(s);
	}
}

/**
 * �������Ͷ���,���ڽ��ж�����֧��
 * 
 * @author liujunsong
 * 
 */
class LangDef {
	public String Lang_SimpleChinese = "";// '�������Ķ���

	public String Lang_English = ""; // 'Ӣ�Ķ���

	public String Lang_French = ""; // '���Ķ���

	public String Lang_Japanese = ""; // '���Ķ���

}

class Transaction_Const {
	public String Trans_Oper_Query = ""; // '��ѯ���� //1

	public String Trans_Oper_Exec = ""; // 'ִ�в��� //2

	public String Trans_Oper_TableList = ""; // '���ݱ��б����? //3

	public String Trans_Oper_ColumnList = ""; // '�������б����? //4

	// '������������ط���?
	public String Trans_BeginTrans = ""; // '����һ������

	public String Trans_AddCommand = ""; // '��������

	public String Trans_Commit = ""; // '�ύ����

	public String Trans_Rollback = ""; // '�ع���ȡ��������

	// '�����ǻ�����ݴ��ڶ���ķ���
	public String Trans_GetDWDefine = ""; // '�Ӻ�̨�������ݴ��ڶ����ļ�

}