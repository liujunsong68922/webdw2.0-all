package com.webdw.model.dwstore;

import com.webdw.common.Golbal;
import com.webdw.common.MyInt;

/*
 Rem -------------------------------------------------
 Rem WebDW锟截硷拷锟斤拷应锟斤拷锟斤拷锟捷存储锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷使锟矫碉拷锟斤拷锟捷存储锟斤拷锟斤拷锟斤拷
 Rem 锟斤拷锟斤拷锟斤拷锟阶拷锟斤拷锟斤拷锟斤拷锟斤拷宀煌拷锟斤拷锟斤拷莼锟斤拷锟斤拷锟�
 Rem 一锟斤拷DataWindow锟斤拷锟斤拷锟铰伙拷锟斤拷锟斤拷:
 Rem Primary! = 1 锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷墙锟斤拷锟斤拷锟绞撅拷玫幕锟斤拷锟斤拷锟�
 Rem Filter! = 2  锟斤拷锟剿伙拷锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷锟脚癸拷锟剿筹拷去锟斤拷锟斤拷锟斤拷
 Rem Delete! = 3  删锟斤拷锟斤拷锟捷伙拷锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷删锟斤拷锟斤拷锟斤拷锟斤拷锟饺放碉拷锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷锟�
 Rem 锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷确锟斤拷锟斤拷墓锟斤拷芑锟斤拷郑锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷锟�
 Rem @CopyRight Mr.Liu Junsong 2008-2009
 Rem @锟斤拷权锟斤拷锟斤拷 锟斤拷锟斤拷锟斤拷 2008-2009
 Rem E_mail : liujunsong@yahoo.com.cn
 Rem -------------------------------------------------
 */


public class CWebDWData_DataBuffer extends Golbal {
	public void ReadMe(){
		System.out.println("WebDW锟截硷拷锟斤拷应锟斤拷锟斤拷锟捷存储锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷使锟矫碉拷锟斤拷锟捷存储锟斤拷锟斤拷锟斤拷");
		System.out.println(JWebDWInfo);
	}
	public CWebDWData_DataBuffer() {
		Init();
	}

	public int BufferType; // '锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷锟酵ｏ拷1. Primary 2. Filter 3.Delete

	public String Columns[]; // '锟斤拷锟斤拷锟侥硷拷锟较ｏ拷锟斤拷锟皆凤拷锟斤拷锟斤拷锟捷ｏ拷锟斤拷锟斤拷锟斤拷DW锟斤拷锟斤拷

	String DataArray[]; // '锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷锟街凤拷锟斤拷锟斤拷锟斤拷锟斤拷锟芥储

	public String errString; // '锟斤拷锟斤拷锟斤拷锟绞э拷埽锟斤拷锟斤拷锟侥达拷锟斤拷锟斤拷息锟斤拷

	public int RowNumber; // '锟斤拷锟捷碉拷锟斤拷锟斤拷锟斤拷

	public int ColNumber; // '锟叫碉拷锟斤拷锟斤拷

	public int ColLength; // '每一锟叫的存储锟斤拷锟斤拷

	// '锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷锟接碉拷前锟斤拷锟斤拷锟捷硷拷锟斤拷锟斤拷删锟斤拷一锟叫硷拷录
	// '锟斤拷锟斤拷锟斤拷录锟斤拷前锟狡讹拷一锟斤拷锟斤拷录
	// '锟斤拷锟斤拷0 删锟斤拷锟缴癸拷
	// '锟斤拷锟斤拷-1 删锟斤拷失锟斤拷
	public int DeleteRow(int delRowId) {
		// '锟叫讹拷delrowid锟侥合凤拷锟斤拷
		if (delRowId <= 0 || delRowId > RowNumber) {
			errString = "invalid delete row:" + delRowId;
			return -1;
		}

		int colid = 0; // '锟叫猴拷
		int rowid = 0; // '锟叫猴拷

		for (rowid = delRowId; rowid <= RowNumber - 1; rowid++) {
			for (colid = 1; colid <= ColLength; colid++)
				// '锟斤拷锟斤拷锟斤拷一锟叫碉拷锟斤拷锟斤拷,锟斤拷锟斤拷锟狡讹拷状态
				DataArray[(rowid - 1) * ColLength + colid] = DataArray[rowid
						* ColLength + colid];
		}

		rowid = RowNumber;
		for (colid = 1; colid <= ColLength; colid++) {// '锟斤拷锟揭伙拷械锟斤拷锟斤拷锟斤拷锟斤拷,锟斤拷锟斤拷锟斤拷状态
			DataArray[(rowid - 1) * ColLength + colid] = "";
		}

		RowNumber = RowNumber - 1; // '锟斤拷锟斤拷锟斤拷锟斤拷1
		return 0;
	}

	// '锟斤拷锟斤拷Insert锟斤拷锟斤拷姆锟斤拷锟�
	// '锟斤拷时只锟斤拷锟角碉拷锟斤拷锟轿拷锟斤拷锟斤拷锟�
	// '锟斤拷锟侥诧拷锟斤拷锟斤拷式锟斤拷锟斤拷
	private String GenerateInsertSQL(String stablename, int rowid, MyInt iret) {
		if (BufferType != 1) {
			iret.intvalue = -1;
			errString = "Wrong Buffer Type for Insert:" + BufferType;
			return "";
		}

		if (stablename.equals("")) {
			iret.intvalue = -1;
			errString = "Empty tableName";
			return "";

		}

		String state;
		state = GetRowState(rowid, iret);

		String scollist = "";
		String strsql = "";
		int colid = 0;

		if (iret.intvalue == -1) { // '锟斤拷取锟斤拷状态锟斤拷锟斤拷锟斤拷锟斤拷
			return "";
		}

		if (! state.equals("new")) { // '锟斤拷锟斤拷锟铰斤拷状态
			iret.intvalue = -1;
			errString = "Wrong Row State for Insert:" + state;
			return "";
		} else { // '锟斤拷锟铰斤拷状态
			scollist = GetColumnList();
			if (scollist.equals("")) {
				iret.intvalue = -1;
				errString = "Empty Column List";
				return "";
			}
			strsql = "Insert Into " + stablename + "(" + scollist + ") Values(";

			for (colid = 1; colid <= ColNumber; colid++) {
				if (colid < ColNumber) {
					strsql = strsql + "'" + GetItemString(rowid, colid, iret)
							+ "',";
				} else {
					strsql = strsql + "'" + GetItemString(rowid, colid, iret)
							+ "')";
				}

				if (iret.intvalue == -1) { // '锟斤拷锟斤拷锟叫讹拷
					return "";
				}
			}
		}
		return strsql;

	}

	// '锟矫碉拷指锟斤拷锟叫碉拷状态锟斤拷锟斤拷
	// '锟斤拷DataArray锟叫讹拷取锟斤拷锟斤拷应锟叫碉拷colnumber + 1锟侥憋拷锟斤拷锟酵达拷锟斤拷锟斤拷状态
	public String GetRowState(int row, MyInt iret) {
		// '锟叫讹拷锟叫碉拷准确锟斤拷
		if (row < 1 || row > RowNumber) {
			iret.intvalue = -1;
			errString = "Invalid row:" + row;
			return "";
		}

		iret.intvalue = 0;
		return DataArray[row * ColLength];// '锟斤拷锟矫匡拷锟�5锟叫ｏ拷锟斤拷11锟斤拷锟斤拷锟捷就达拷锟斤拷锟斤拷状态
	}

	// '锟矫碉拷锟叫碉拷锟叫憋拷,锟斤拷锟斤拷id锟斤拷锟斤拷,锟斤拷锟街讹拷之锟斤拷锟矫讹拷锟脚分革拷
	private String GetColumnList() {
		int colid = 0;
		String slist = "";
		slist = "";
		for (colid = 0; colid <= ColNumber - 1; colid++) {
			if (colid < ColNumber - 1) {
				slist = slist + Columns[colid] + " , ";
			} else {
				slist = slist + Columns[colid];
			}
		}

		return slist;
	}

	// '锟矫碉拷指锟斤拷锟斤拷锟叫碉拷锟斤拷锟斤拷
	// 'row 锟叫猴拷
	// 'col 锟叫猴拷
	// 'iret 锟斤拷锟斤拷值
	public String GetItemString(int row, int col, MyInt iret) {
		// '锟叫讹拷锟叫碉拷准确锟斤拷
		if (row < 1 || row > RowNumber) {
			iret.intvalue = -1;
			errString = "Invalid row:" + row;
			return "";
		}
		// '锟叫讹拷锟叫碉拷准确锟斤拷
		if (col < 1 || col > ColNumber) {
			iret.intvalue = -1;
			errString = "Invalid col:" + col;
			return "";
		}

		// '锟斤拷锟截斤拷锟斤拷锟斤拷锟�,GetItemString只锟杰凤拷锟截碉拷前值锟斤拷要锟矫碉拷原始值锟斤拷要锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷
		iret.intvalue = 0;
		return DataArray[(row - 1) * ColLength + col];

	}

	// '锟斤拷某一锟叫憋拷示锟斤拷一锟斤拷锟斤拷准锟斤拷锟街凤拷锟斤拷锟斤拷锟斤拷锟斤拷之锟斤拷锟斤拷chr(9)锟街革拷
	// '锟斤拷锟斤拷泻欧欠锟斤拷锟斤拷锟斤拷乜锟斤拷址锟斤拷锟�
	public String GetRowString(int rowid) {
		if (rowid <= 0 || rowid > RowNumber) {
			errString = "Invalid row:" + rowid;
			return "";
		}

		int colid = 0;// '锟叫猴拷
		String sret;// '锟斤拷锟斤拷锟街凤拷锟斤拷
		sret = "";
		for (colid = 1; colid <= ColNumber; colid++) {
			if (colid < ColNumber) {
				sret = sret + DataArray[(rowid - 1) * ColLength + colid]
						+ Chr(9);
			} else {
				sret = sret + DataArray[(rowid - 1) * ColLength + colid];
			}
		}

		// '锟斤拷锟斤拷锟街凤拷锟斤拷
		return sret;
	}

	// '锟斤拷锟斤拷锟叫碉拷锟斤拷锟捷讹拷锟斤拷铣锟揭伙拷锟斤拷址锟斤拷锟斤拷锟斤拷锟�
	public String GetAllData() {
		String sret = "";
		int rowid = 0;

		sret = "";
		for (rowid = 1; rowid <= RowNumber; rowid++) {
			if (sret.equals("")) {
				sret = GetRowString(rowid);
			} else {
				sret = sret + Chr(13) + Chr(10) + GetRowString(rowid);
			}
		}
		return sret;

	}

	// '锟矫碉拷锟斤拷锟斤拷锟叫的革拷锟斤拷SQL锟斤拷锟斤拷锟斤拷
	public String GetAllUpdateSQL(String stablename, MyInt iret) {
		int rowid = 0;
		String strsql = "";
		String sql1 = "";

		strsql = "";
		for (rowid = 1; rowid <= RowNumber; rowid++) {
			sql1 = GetUpdateSql(stablename, rowid, iret);
			if (iret.intvalue == -1) {
				return "";
			}

			if (!sql1.equals("")) {
				if (strsql.equals("")) {
					strsql = sql1;
				} else {
					strsql = strsql + Chr(13) + Chr(10) + sql1;
				}
			}
		}

		return strsql;
	}

	// '锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷-1锟斤拷锟斤拷没锟揭碉拷
	// '锟斤拷锟截碉拷锟斤拷锟斤拷糯锟�1锟斤拷始锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷藕锟斤拷锟斤拷锟脚碉拷锟斤拷锟解，锟斤拷要锟斤拷锟铰规划锟斤拷统一锟斤拷锟斤拷
	// '锟斤拷锟节达拷锟斤拷锟叫碉拷锟斤拷锟�
	public int GetColIdByName(String colname) {
		int colid = 0;
		for (colid = 0; colid <= ColNumber - 1; colid++) {
			if (UCase(Columns[colid]).equals(UCase(colname))) {
				return colid + 1;
			}
		}
		return -1;
	}

	// '锟斤拷锟斤拷锟叫碉拷锟斤拷牛锟斤拷玫锟斤拷械锟斤拷锟斤拷锟�
	public String GetColumnName(int colid) {
		if (colid <= ColNumber && colid >= 0) {
			return Columns[colid - 1];
		} else {
			return "";
		}
	}

	// '锟矫碉拷column()锟斤拷锟街凤拷锟斤拷锟斤拷示,锟斤拷一锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷锟绞硷拷锟斤拷锟斤拷锟絛w
	public String GetColumnString() {
		String sret = "";
		int colid = 0;
		for (colid = 1; colid <= ColNumber; colid++) {
			if (colid < ColNumber) {
				sret = sret + Columns[colid - 1] + Chr(9);
			} else {
				sret = sret + Columns[colid - 1];
			}
		}
		return sret;

	}

	// '锟矫碉拷锟斤拷锟斤拷锟街革拷锟斤拷锟斤拷械锟斤拷锟斤拷锟�
	// 'row 锟叫猴拷
	// 'col 锟叫猴拷
	// 'iret 锟斤拷锟斤拷值
	public String GetOriginalItemString(int row, int col, MyInt iret) {
		// '锟叫讹拷锟叫碉拷准确锟斤拷
		if (row < 1 || row > RowNumber) {
			iret.intvalue = -1;
			errString = "Invalid row:" + row;
			return "";
		}

		// '锟叫讹拷锟叫碉拷准确锟斤拷
		if (col < 1 || col > ColNumber) {
			iret.intvalue = -1;
			errString = "Invalid col:" + col;
			return "";
		}

		// '锟斤拷锟截斤拷锟斤拷锟斤拷锟�,GetOriginalItemString只锟杰凤拷锟斤拷原始值
		iret.intvalue = 0;
		return DataArray[(row - 1) * ColLength + ColNumber + col];

	}

	// '锟斤拷某一锟叫碉拷原始锟斤拷锟捷憋拷示锟斤拷一锟斤拷锟斤拷准锟斤拷锟街凤拷锟斤拷锟斤拷锟斤拷锟斤拷之锟斤拷锟斤拷chr(9)锟街革拷
	// '锟斤拷锟斤拷泻欧欠锟斤拷锟斤拷锟斤拷乜锟斤拷址锟斤拷锟�
	public String GetOriginalRowString(int rowid) {
		if (rowid < 1 || rowid > RowNumber) {
			errString = "Invalid row:" + rowid;
			return "";
		}

		int colid = 0;// '锟叫猴拷
		String sret = "";// '锟斤拷锟斤拷锟街凤拷锟斤拷
		sret = "";
		for (colid = 1; colid <= ColNumber; colid++) {
			if (colid < ColNumber) {
				sret = sret
						+ DataArray[(rowid - 1) * ColLength + ColNumber + colid]
						+ Chr(9);
			} else {
				sret = sret
						+ DataArray[(rowid - 1) * ColLength + ColNumber + colid];
			}
		}

		// '锟斤拷锟斤拷锟街凤拷锟斤拷
		return sret;
	}

	// '锟斤拷锟斤拷rowid,锟斤拷锟缴革拷锟铰猴拷删锟斤拷时锟斤拷锟斤拷要锟斤拷Where锟街撅拷
	private String GetSetClause(int rowid, MyInt iret) {
		String strSet = "";
		int colid = 0;
		String sData = "";

		strSet = " Set ";
		for (colid = 0; colid <= ColNumber - 1; colid++) {
			sData = GetItemString(rowid, colid + 1, iret);
			if (iret.intvalue == -1) {
				return "";
			}

			if (colid == 0) {
				strSet = strSet + Columns[colid] + " = " + "'" + sData + "' ";
			} else {
				strSet = strSet + " , " + Columns[colid] + " = " + "'" + sData
						+ "' ";
			}
		}

		return strSet;
	}

	// '锟矫碉拷指锟斤拷一锟叫碉拷Update SQL锟斤拷锟�
	// '锟斤拷锟斤拷锟� new,锟斤拷锟斤拷一锟斤拷Insert锟斤拷锟�(锟斤拷锟斤拷primarybuffer锟斤拷)
	// '锟斤拷锟斤拷锟� modify,锟斤拷锟斤拷一锟斤拷Update锟斤拷锟�(锟斤拷锟斤拷primarybuffer锟斤拷)
	// '锟斤拷锟斤拷锟� modify,normal ,锟斤拷锟斤拷一锟斤拷Delete锟斤拷锟�(锟斤拷锟斤拷deleteBuffer锟斤拷)
	// 'sTableName 要锟斤拷锟铰碉拷锟斤拷锟捷憋拷锟斤拷锟斤拷
	// 'rowid 要锟斤拷锟铰碉拷锟叫猴拷
	// 'iret 锟斤拷锟截憋拷志位 0 锟斤拷锟斤拷 -1 锟斤拷锟斤拷锟斤拷锟斤拷
	public String GetUpdateSql(String stablename, int rowid, MyInt iret) {
		String state = "";
		String strSet = "";
		String strWhere = "";

		// 'part1 primarybuffer锟侥达拷锟斤拷,锟斤拷锟斤拷状态锟斤拷锟斤拷Update锟斤拷Insert
		if (BufferType == 1) {
			state = GetRowState(rowid, iret);
			if (iret.intvalue == -1) {
				return "";
			}

			// '锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷
			if (state.equals("new")) {
				String Sql = GenerateInsertSQL(stablename, rowid, iret);
				if (iret.intvalue == -1) {
					return "";
				}
				return Sql;
			}

			// '锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷
			if (state.equals("modify")) {
				strSet = GetSetClause(rowid, iret);
				if (iret.intvalue == -1) {
					return "";
				}

				strWhere = GetWhereClause(rowid, iret);
				if (iret.intvalue == -1) {
					return "";
				}

				return "Update " + stablename + strSet + strWhere;
			}

			return ""; // '锟斤拷锟斤拷状态锟铰诧拷锟斤拷锟斤拷SQL锟斤拷锟�,直锟接凤拷锟斤拷

		}

		// 'part2 filterBuffer锟侥达拷锟斤拷 //'目前锟捷诧拷锟斤拷锟斤拷
		if (BufferType == 2) {
			iret.intvalue = 0;
			return ""; // '目前锟捷诧拷锟斤拷锟斤拷
		}

		// 'part3 deleteBuffer锟侥达拷锟斤拷
		if (BufferType == 3) {
			state = GetRowState(rowid, iret);// '锟斤拷锟斤拷锟角白刺拷锟絥ew,锟斤拷锟斤拷锟斤拷
			if (!state.equals("new")) {

				strWhere = GetWhereClause(rowid, iret);
				if (iret.intvalue == -1) {
					return "";
				}

				return " Delete from " + stablename + strWhere;
			}
		}

		return "";

	}

	// '锟斤拷锟斤拷rowid,锟斤拷锟缴革拷锟铰猴拷删锟斤拷时锟斤拷锟斤拷要锟斤拷Where锟街撅拷
	private String GetWhereClause(int rowid, MyInt iret) {
		String strWhere = "";
		int colid = 0;
		String sData = "";
		String colwhere = "";

		strWhere = "";
		for (colid = 0; colid <= ColNumber - 1; colid++) {
			sData = GetOriginalItemString(rowid, colid + 1, iret);
			if (iret.intvalue == -1) {
				return "";
			}

			if (sData.equals("")) {// '锟斤拷锟街凤拷锟斤拷锟斤拷锟斤拷值锟斤拷锟斤拷
				colwhere = Columns[colid] + " is null ";
			} else {
				colwhere = Columns[colid] + " = '" + sData + "'";
			}

			if (strWhere.equals("")) {
				strWhere = colwhere;
			} else {
				strWhere = strWhere + " AND " + colwhere;
			}

		}
		if (!strWhere.equals("")) {
			return "Where " + strWhere;
		} else {
			return "";
		}
	}

	// '锟斤拷锟皆憋拷锟绞硷拷锟�
	public int Init() {
		Columns = new String[1];
		DataArray = new String[1001];
		errString = "";
		RowNumber = 0;
		ColNumber = 0;
		ColLength = 0;
		return 0;
	}

	public int InitData(String sindata) {
		return InitData(sindata, "normal");
	}

	// '锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷址锟斤拷锟斤拷卸锟饺★拷锟斤拷荩锟斤拷锟斤拷columnArray锟斤拷lineArray
	// '锟斤拷一锟斤拷锟斤拷锟叫碉拷锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷锟角讹拷应锟斤拷锟斤拷锟斤拷
	// '锟斤拷锟斤不锟斤拷锟斤拷Null值锟斤拷锟斤拷锟捷匡拷锟较碉拷null值锟斤拷转锟斤拷为锟斤拷锟街凤拷锟斤拷
	//
	// '锟斤拷锟斤拷0 锟缴癸拷
	// '锟斤拷锟斤拷-1 失锟杰ｏ拷锟斤拷锟斤拷锟斤拷息锟斤拷锟斤拷锟斤拷errString锟斤拷
	// 'sindata 锟斤拷锟斤拷锟斤拷锟捷ｏ拷锟街凤拷锟斤拷锟斤拷示
	// 'state 锟斤拷锟斤拷状态锟斤拷默锟斤拷为"normal"
	public int InitData(String sindata, String state) {
		Init(); // '锟斤拷锟斤拷锟斤拷锟绞硷拷锟斤拷姆锟斤拷锟�

		String sDataArray[]; // '原始锟斤拷锟捷帮拷锟叫分斤拷玫锟斤拷锟斤拷锟斤拷锟�
		String vline; // '原始锟斤拷锟斤拷每一锟斤拷
		String sline = ""; // '转锟斤拷锟斤拷锟街凤拷锟斤拷锟斤拷原始锟斤拷锟斤拷每一锟斤拷

		String sdarray[];// '锟叫硷拷锟斤拷锟斤拷锟矫恳伙拷蟹纸锟斤拷锟斤拷锟斤拷锟叫碉拷锟斤拷锟斤拷

		int lineId;// '原始锟斤拷锟捷碉拷锟叫号ｏ拷0锟斤拷锟斤拷锟斤拷猓拷锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷
		int colid; // '锟叫碉拷锟斤拷锟�

		DataArray = new String[1]; // '锟斤拷锟斤拷锟皆硷拷锟斤拷锟�

		sDataArray = Split(sindata, "" + Chr(13) + Chr(10));// '锟斤拷锟矫回筹拷锟斤拷锟脚斤拷锟叫分斤拷
		lineId = 0; // '原始锟斤拷锟捷碉拷锟叫猴拷
		for (int i = 0; i < sDataArray.length; i++) {
			sline = sDataArray[i];// '锟斤拷锟斤拷一锟斤拷,转锟斤拷锟街凤拷锟斤拷
			if (sline.equals("")) {// '锟斤拷锟斤拷锟斤拷锟叫ｏ拷锟剿筹拷
				break;
			}

			if (lineId == 0) {
				Columns = Split(sline, Chr(9)); // '锟斤拷chr(9)锟斤拷锟街斤拷锟斤拷锟�,锟芥到columns锟斤拷锟斤拷
				ColNumber = UBound(Columns) + 1; // '锟叫碉拷锟斤拷锟斤拷,split锟斤拷锟截碉拷锟斤拷锟斤拷锟斤拷zero-based.
				ColLength = ColNumber * 2 + 1; // '每一锟叫的筹拷锟饺ｏ拷锟斤拷锟斤拷colnumber*2锟斤拷1
			} else {
				if (Trim(sline).equals("")) { // '锟斤拷锟斤拷锟斤拷锟叫ｏ拷锟剿筹拷循锟斤拷
					break;
				}

				sdarray = Split(sline, Chr(9)); // '锟斤拷chr(9)锟斤拷锟街斤拷锟斤拷,锟街斤拷啥锟斤拷锟斤拷锟斤拷锟斤拷

				if (UBound(sdarray) != UBound(Columns)) { // '锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷欠锟斤拷愎伙拷锟斤拷锟斤拷莶锟斤拷锟斤拷虮ù锟斤拷锟�
					errString = "CWebDWData.ReadDataq锟斤拷锟捷革拷式锟斤拷锟斤拷:锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷!锟斤拷:"
							+ lineId;
					return -1;
				}

				RowNumber = lineId; // '锟芥储锟斤拷前锟斤拷锟斤拷

				if (UBound(DataArray) < RowNumber * ColLength) {
					// ReDim Preserve DataArray(UBound(DataArray) + 1000) //
					// '一锟轿凤拷锟斤拷1000锟斤拷锟秸间，锟斤拷锟斤拷锟轿凤拷锟斤拷
					String temp[] = new String[DataArray.length + 1000];
					for (int j = 1; j < DataArray.length; j++) {
						temp[j] = DataArray[j];
					}
					for (int j = DataArray.length; j < DataArray.length + 1000; j++) {
						temp[j] = "";
					}
					DataArray = temp;
				}

				for (colid = 1; colid <= ColNumber; colid++) {
					// '锟斤拷null值锟斤拷锟斤拷锟解处锟斤拷:锟斤拷锟斤拷台锟斤拷锟截碉拷NULL锟斤拷锟揭伙拷锟斤拷锟斤拷址锟斤拷锟�
					if (UCase(sdarray[colid - 1]).equals("NULL")) {
						sdarray[colid - 1] = "";
					}
					DataArray[(lineId - 1) * ColLength + colid] = sdarray[colid - 1]; // '锟叫碉拷锟斤拷锟捷存储
					DataArray[(lineId - 1) * ColLength + ColNumber + colid] = sdarray[colid - 1]; // '锟劫存储一锟斤拷锟斤拷为锟斤拷锟斤拷
				}
				DataArray[lineId * ColLength] = state; // 'initData锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷状态
			}
			lineId = lineId + 1;
		}
		return 0;
	}

	// '锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷DataArray锟叫诧拷锟斤拷一锟叫硷拷录锟斤拷锟斤拷锟叫硷拷录锟斤拷锟街凤拷锟斤拷锟斤拷锟斤拷示
	// 'rowid:要锟斤拷锟斤拷牡锟角帮拷泻牛锟斤拷锟斤拷锟斤拷院锟斤拷锟揭伙拷锟斤拷锟斤拷萁锟斤拷锟斤拷锟角帮拷校锟斤拷锟斤拷rowid=0锟斤拷锟斤拷锟斤拷锟阶凤拷锟�
	// 'sline:锟斤拷锟街凤拷锟斤拷锟斤拷示锟斤拷一锟叫硷拷录
	// '锟斤拷锟斤拷值锟斤拷>0 锟斤拷锟斤拷锟斤拷锟斤拷院锟斤拷锟叫号ｏ拷-1锟斤拷锟斤拷失锟杰ｏ拷锟斤拷锟斤拷锟斤拷息锟斤拷errString锟斤拷
	public int InsertRow(int insertid, String sline) {
		String data[];
		int colid = 0;
		int rowid = 0;

		if (insertid < 0 || insertid > RowNumber) {
			errString = "Invalid rowid:" + insertid;
			return -1;
		}

		data = Split(sline, Chr(9));

		if (UBound(data) != ColNumber - 1) {
			errString = "锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷锟叫猴拷要锟襟不凤拷锟斤拷:" + sline;
			return -1;
		}

		// '锟叫讹拷锟角凤拷锟斤拷要锟斤拷展锟芥储锟斤拷锟斤拷
		if (UBound(DataArray) < (RowNumber + 1) * ColLength) {
			// ReDim Preserve DataArray(UBound(DataArray) + 1000) //
			// '一锟轿凤拷锟斤拷1000锟斤拷锟秸间，锟斤拷锟斤拷锟轿凤拷锟斤拷
			String temp[] = new String[DataArray.length + 1000];
			for (int j = 1; j < DataArray.length; j++) {
				temp[j] = DataArray[j];
			}
			for (int j = DataArray.length; j < DataArray.length + 1000; j++) {
				temp[j] = "";
			}
			DataArray = temp;
		}

		RowNumber = RowNumber + 1;

		if (insertid > 0) {
			// '锟斤拷锟狡讹拷锟斤拷锟斤拷锟斤拷锟斤拷,锟斤拷锟斤拷贫锟揭伙拷锟�,锟斤拷锟斤拷锟斤拷状态
			for (rowid = RowNumber - 1; rowid >= insertid + 1; rowid = rowid - 1) {
				for (colid = 1; colid <= ColLength; colid++) {
					DataArray[rowid * ColLength + colid] = DataArray[(rowid - 1)
							* ColLength + colid];
				}
			}
			rowid = insertid;
		} else {
			rowid = RowNumber;
		}

		for (colid = 1; colid <= ColNumber; colid++) {
			DataArray[(rowid - 1) * ColLength + colid] = "";// '锟斤拷始锟斤拷
		}

		// '锟斤拷锟狡诧拷锟斤拷锟斤拷一锟叫碉拷锟斤拷锟斤拷
		for (colid = 1; colid <= ColNumber; colid++) {
			DataArray[(rowid - 1) * ColLength + colid] = data[colid - 1];
		}
		DataArray[rowid * ColLength] = "new";// '默锟斤拷锟斤拷锟斤拷拢锟斤拷锟斤拷锟轿猲ew,锟斤拷锟斤拷锟斤拷锟斤拷芑锟斤拷薷锟斤拷锟斤拷值
		return rowid;

	}

	// '锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷械锟斤拷锟斤拷荩锟斤拷锟斤拷锟斤拷锟斤拷锟较�
	public int ResetData() {
		DataArray = new String[1000];
		RowNumber = 0;
		return 0;
	}

	// '锟斤拷锟斤拷指锟斤拷锟斤拷锟叫碉拷锟斤拷锟斤拷,锟斤拷锟斤拷值锟斤拷锟斤拷
	public String SetItemString(int row, int col, String sData, MyInt iret) {
		// '锟叫讹拷锟叫碉拷准确锟斤拷
		if (row < 1 || row > RowNumber) {
			iret.intvalue = -1;
			errString = "Invalid row:" + row;
			return "";
		}

		// '锟叫讹拷锟叫碉拷准确锟斤拷
		if (col < 1 || col > ColNumber) {
			iret.intvalue = -1;
			errString = "Invalid col:" + col;
			return "";
		}

		iret.intvalue = 0;
		DataArray[(row - 1) * ColLength + col] = sData;// '只锟斤拷锟斤拷锟矫碉拷前值锟斤拷锟斤拷史锟斤拷锟斤拷锟睫凤拷锟斤拷锟斤拷

		if (DataArray[row * ColLength].equals("normal")) {// '只锟叫碉拷锟斤拷前状态为normal时锟斤拷锟睫革拷为锟斤拷锟斤拷
			DataArray[row * ColLength] = "modify";// '锟斤拷一锟斤拷状态为锟斤拷锟斤拷
		}

		return "";
	}

	// '锟斤拷锟斤拷指锟斤拷锟斤拷锟叫碉拷原始锟斤拷锟斤拷,锟斤拷锟斤拷值锟斤拷锟斤拷
	public String SetOriginalItemString(int row, int col, String sData, MyInt iret) {
		// '锟叫讹拷锟叫碉拷准确锟斤拷
		if (row < 1 || row > RowNumber) {
			iret.intvalue = -1;
			errString = "Invalid row:" + row;
			return "";
		}

		// '锟叫讹拷锟叫碉拷准确锟斤拷
		if (col < 1 || col > ColNumber) {
			iret.intvalue = -1;
			errString = "Invalid col:" + col;
			return "";
		}

		iret.intvalue = 0;
		DataArray[(row - 1) * ColLength + ColNumber + col] = sData;// '锟斤拷锟斤拷锟斤拷史锟斤拷锟斤拷

		iret.intvalue = 0;
		return "";
	}

	// '锟斤拷锟斤拷指锟斤拷锟叫碉拷状态锟斤拷锟斤拷
	public String SetRowState(int row, String state, MyInt iret) {
		// '锟叫讹拷锟叫碉拷准确锟斤拷
		// '锟叫讹拷锟叫碉拷准确锟斤拷
		if (row < 1 || row > RowNumber) {
			iret.intvalue = -1;
			errString = "Invalid row:" + row;
			return "";
		}

		iret.intvalue = 0;
		DataArray[row * ColLength] = state;
		return "";

	}

	private long Sort_SwapLine(int row1, int row2) {
		// '锟斤拷锟斤拷锟叫讹拷锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷锟饺凤拷锟�
		// '锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷么锟酵诧拷锟斤拷锟叫诧拷锟斤拷锟斤拷
		if (!(row1 > 0 && row1 <= RowNumber && row2 > 0 && row2 <= RowNumber)) {
			return -1;
		}

		int colid = 0;// As Long
		String stemp = "";// As String
		for (colid = 1; colid <= ColLength; colid++) {
			int id = (int) ((row1 - 1) * ColLength) + colid;
			stemp = DataArray[id];
			DataArray[(int) ((row1 - 1) * ColLength) + colid] = DataArray[(row2 - 1)
					* ColLength + colid];
			DataArray[(int) ((row2 - 1) * ColLength) + colid] = stemp;
		}
		return 0;
	}

	// '锟斤拷锟捷革拷锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷锟藉，锟饺斤拷rowid1,rowid2锟斤拷锟斤拷锟捷ｏ拷
	// '锟斤拷锟斤拷rowid1,rowid2锟斤拷锟斤拷锟捷斤拷小锟斤拷锟角革拷锟斤拷锟斤拷
	// '锟斤拷一锟斤拷锟斤拷锟斤拷锟斤拷rowid1,rowid2锟斤拷锟角合凤拷锟斤拷锟斤拷锟斤拷
	// '锟斤拷锟斤拷-1锟斤拷锟斤拷冉锟绞э拷埽锟斤拷锟斤拷锟斤拷锟斤拷锟�
	private long Sort_Compare(String sorter, int row1, int row2) {
		if (sorter.equals("")) {
			errString = "Compare argument is empty";
			return -1;
		}

		String sorts[] = new String[1];
		int sortid = 0; // As Long
		int sortcolid = 0;// As Long '锟斤拷锟斤拷锟街讹拷锟斤拷锟�
		String sortcoltype = "";// As String '锟斤拷锟斤拷锟街讹拷锟斤拷锟斤拷A 锟斤拷锟斤拷 D 锟斤拷锟斤拷,锟斤拷锟斤拷锟街凤拷一锟缴帮拷锟斤拷锟斤拷锟斤拷
		String coldatatype = "";// As String '锟叫碉拷锟斤拷锟斤拷锟斤拷锟酵讹拷锟斤拷
		int pos1 = 0;// As Long '#锟斤拷位锟斤拷
		int pos2 = 0;// As Long '锟秸革拷锟轿伙拷锟�
		String sdata1 = "";// As String
		String sdata2 = "";// As String

		sorts = Split(sorter, ",");// '一锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷锟叫分成讹拷锟斤拷锟斤拷锟斤拷锟斤拷锟�
		for (sortid = 0; sortid <= UBound(sorts); sortid++) {
			pos1 = InStr(sorts[sortid], "#");
			if (pos1 <= 0) {
				// Sort_Compare = -1
				errString = "Compare argument error";
				return -1;
			}

			pos2 = InStr(pos1, sorts[sortid], " ");// '锟揭碉拷锟斤拷一锟斤拷锟秸革拷锟轿伙拷锟�
			if (pos2 <= 0) {
				// Sort_Compare = -1
				errString = "Compare argument error";
				return -1;
			}

			if (pos2 == pos1 + 1) {
				// Sort_Compare = -1
				errString = "Compare argument error";
			}

			sortcolid = toInt(Mid(sorts[sortid], pos1 + 1, pos2 - (pos1 + 1)));
			sortcoltype = UCase(Trim(Mid(sorts[sortid], pos2 + 1)));

			if (sortcolid < 1 || sortcolid > ColNumber) {
				// Sort_Compare = -1
				errString = "Compare argument error";
				return -1;
			}

			if (sortcoltype.equals("")) {
				sortcoltype = "A";
			} else if ((!(sortcoltype.equals("A")) && (!(sortcoltype
					.equals("D"))))) {
				// Sort_Compare = -1
				errString = "Comapre argument error";
				return -1;
			}

			// '锟叫讹拷sortcolid锟斤拷锟斤拷锟斤拷锟斤拷锟酵ｏ拷锟斤拷锟斤拷锟斤拷址锟斤拷锟斤拷锟街憋拷颖冉锟�
			// '锟斤拷锟斤拷锟斤拷锟街碉拷停锟阶拷锟斤拷锟斤拷锟街碉拷锟斤拷斜冉锟�
			// '锟斤拷锟斤拷锟酵拷锟斤拷锟矫达拷涂锟斤拷锟街憋拷臃锟斤拷锟斤拷顺锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷一锟斤拷循锟斤拷锟斤拷锟饺斤拷锟斤拷一锟斤拷锟叫的达拷小
			sdata1 = DataArray[(row1 - 1) * ColLength + sortcolid];
			sdata2 = DataArray[(row2 - 1) * ColLength + sortcolid];

			double v1;// As Double
			double v2;// As Double
			if (IsNumeric(sdata1) && IsNumeric(sdata2)) {// Then
				// '锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷锟街碉拷偷锟斤拷锟斤拷荩锟斤拷锟饺斤拷
				v1 = toDouble(sdata1);
				v2 = toDouble(sdata2);
				if (v1 > v2) {
					if (sortcoltype.equals("A")) {// Then
						// Sort_Compare = row2
						// Exit Function
						return row2;
					} else {
						// Sort_Compare = row1
						// Exit Function
						return row1;
					}
				} else if (v1 < v2) {// Then
					if (sortcoltype.equals("A")) {// = "A" Then
						// Sort_Compare = row1
						// Exit Function
						return row1;
					} else {
						// Sort_Compare = row2
						// Exit Function
						return row2;
					}// End If
				}
				// '锟斤拷锟斤拷锟斤拷龋锟斤拷锟斤拷锟窖拷锟�
			} else
			// '锟斤拷锟斤拷锟斤拷值锟斤拷直锟接比斤拷
			if (IsGreat(sdata1, sdata2)) {// Then
				if (sortcoltype.equals("A")) {// = "A" Then
					// Sort_Compare = row2
					// Exit Function
					return row2;
				} else {
					// Sort_Compare = row1
					// Exit Function
					return row1;
				}
			} else if (IsGreat(sdata2, sdata1)) {// Then
				if (sortcoltype.equals("A")) {// = "A" Then
					// Sort_Compare = row1
					// Exit Function
					return row1;
				} else {
					// Sort_Compare = row2
					// Exit Function
					return row2;
				}// End If
			}// End If
			// '锟斤拷锟斤拷锟斤拷龋锟斤拷锟斤拷锟窖拷锟�
		}// End If

		return row1;// '锟斤拷锟斤拷锟斤拷龋锟斤拷锟斤拷氐锟揭伙拷锟�
	}

	// '锟斤拷锟捷革拷锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷锟藉，锟斤拷beginrow锟斤拷endrow锟斤拷锟叫诧拷锟揭ｏ拷锟揭碉拷锟斤拷小锟斤拷一锟斤拷锟斤拷录锟脚筹拷锟斤拷
	// '锟斤拷锟斤拷0锟斤拷锟斤拷锟斤拷锟捷达拷锟斤拷,锟斤拷锟节碉拷锟斤拷锟斤拷锟斤拷
	private long Sort_GetMinLine(String sorter, int beginrow, int endrow) {
		if (!(beginrow > 0 && beginrow <= RowNumber && endrow > 0
				&& endrow <= RowNumber && beginrow <= endrow)) {
			// Sort_GetMinLine = -1
			// Exit Function
			return -1;
		}// End If

		int rowid = 0;// As Long
		int irow = 0;// As Long

		irow = beginrow;
		for (rowid = beginrow + 1; rowid <= endrow; rowid++) {
			irow = (int) Sort_Compare(sorter, irow, rowid);
			if (irow == -1) {// Then
				// Sort_GetMinLine = -1
				// Exit Function
				return -1;
			}// End If
		}

		return irow;
	}

	public long Sort(String sorter) {
		if (sorter.equals("")) {
			// Sort = 0
			// Exit Function
			return 0;
		}// End If

		int rowid = 0;// As Long
		int minrowid = 0;// As Long
		for (rowid = 1; rowid <= RowNumber; rowid++) {
			minrowid = (int) Sort_GetMinLine(sorter, rowid, RowNumber);// '锟矫碉拷锟接碉拷前锟叫匡拷始锟斤拷小锟斤拷锟叫猴拷

			if (minrowid == -1) {// Then '锟斤拷锟斤拷锟斤拷小锟斤拷失锟斤拷
				// Sort = -1 '锟斤拷锟斤拷失锟斤拷
				// Exit Function
				return -1;
			}// End If

			if (minrowid > rowid) {// Then '锟角碉拷前锟斤拷
				Sort_SwapLine(rowid, minrowid);// '锟斤拷锟斤拷锟斤拷锟斤拷
			}// End If
		}// Next

		return 0;
	}

}
