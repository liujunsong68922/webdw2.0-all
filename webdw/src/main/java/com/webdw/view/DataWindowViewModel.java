package com.webdw.view;

import java.util.ArrayList;

import com.webdw.common.Golbal;
import com.webdw.common.MyInt;
import com.webdw.config.WebDWConfigVO;
import com.webdw.controller.DataWindowController;
import com.webdw.model.datamodel.CWebDWData;
import com.webdw.model.syntaxmodel.dwsyntax.WebDWSyntax;
import com.webdw.view.ui.MyUIComponent;
import com.webdw.view.ui.container.MyJPanel;
import com.webdw.view.ui.element.MyJCheckBox;
import com.webdw.view.ui.element.MyJComboBox;
import com.webdw.view.ui.element.MyJLabel;
import com.webdw.view.ui.element.MyJRadioButton;
import com.webdw.view.ui.element.MyJTextField;

/**
 * This is the View part of DataWindow Control, Because now DataWindow
 * Controller is running on Server side, Then the View part of DataWindow
 * Control convert data model and syntax model together to Virtual Element
 * Model. Then sent this objects to front-end,such as JavaScript, Then
 * JavaScript(and other language) can use these elements to draw full UI to
 * user.
 * 
 * This is the View Part of MVC model,so that it does not change any data
 * only convert this data to Visual Format.
 * 
 * All this is done by DrawDW() function.
 * 
 * @author Administrator
 *
 */
public class DataWindowViewModel extends Golbal {
	private DataWindowController parentDW = null;

	private String errString = "";//
	private int controlSeg = 0;//

	//This is input arguments
	//targetControls is also used for output
	private MyJPanel targetPict = null;
	private WebDWSyntax local_webdw = null;//
	private CWebDWData webdwData = null;

	//myControls is used for output
	private ArrayList targetControls = null;//
	private MyUIComponent myControls[] = null;//

	// 构造函数,将控制器对象注入其中
	public DataWindowViewModel(DataWindowController _parentDW) {
		this.parentDW = _parentDW;
		//this.targetControls = _parentDW.targetControls;
//		this.targetPict = _parentDW.targetPict;
		//this.myControls = _parentDW.myControls;
		//this.local_webdw = _parentDW.webdw.webdw_creator.local_webdw;
		//this.webdwData = _parentDW.webdwData;
	}

	private int DrawDW() throws Exception {
		if (targetControls == null || targetPict == null) {
			errString = "Please Call SetDataObject First";
			throw new Exception(errString);
		}

		int rowid = 0;// As Long
		int iret = 0;// As Long
		int i = 0;// As Long

		// 'step2 clean object store.
		for (i = 10000; i >= 1; i--) {
			if (!(myControls[i] == null)) {//
				targetControls.remove(myControls[i]);
				targetPict.remove(myControls[i]);
				myControls[i] = null;
			}
		}
		controlSeg = 0;//

		// 'step3 draw label on header
		iret = _DrawDW_Label(0, 0);

		// 'step4 draw column on body
//		for (rowid = 1; rowid <= parentDW.webdwData.GetRowCount(); rowid++) {
//			iret = _DrawDW_Label(rowid, 0);// '������һ�е�Label
//			iret = _DrawDW_Column(rowid, 0);// '������һ�е�Column
//		}

		return 0;
	}

	private int _DrawDW_Label(int lineNum, int leftPos) {
		System.out.println("begin DrawLabel");
		int id = 0;
		String sname = "";
		MyJLabel obj = null;
		int top = 0;
		int beginRowid = 1;

		for (id = 1; id <= 100; id++) {
			if (local_webdw.text[id].Name.equals("")) {
				return 0;
			}

			if (lineNum == 0 && (!local_webdw.text[id].band.equals("header"))) {// '����ͷ����band��Ϊheader,�˳�
				continue;
			}

			if (lineNum > 0 && (!local_webdw.text[id].band.equals("detail"))) {// '����ϸ�ڣ�band��Ϊdetail,�˳�
				continue;
			}

			if (local_webdw.text[id].band.equals("header")) {
				top = (int) (local_webdw.text[id].y);
			}
			if (local_webdw.text[id].band.equals("detail")) {
				top = (int) (local_webdw.text[id].y) + (int) (local_webdw.header.height)
						+ (int) (local_webdw.detail.height) * (lineNum - beginRowid);
			}

			sname = targetPict.getName() + "_" + lineNum + "_" + local_webdw.text[id].Name;

			System.out.println("create MyJLabel");
			obj = new MyJLabel("", sname, targetControls, targetPict);
			controlSeg = controlSeg + 1;
			myControls[controlSeg] = obj;// '�洢���ڿؼ�������
			obj.setBounds((int) ((local_webdw.text[id].x) + leftPos), (int) (top), (int) (local_webdw.text[id].width),
					(int) (local_webdw.text[id].height));

			obj.setText(Replace(local_webdw.text[id].text, WebDWConfigVO.Webdw_DataFormat_Line_Seperator, "<BR>"));
		}
		return 0;
	}

	private int _DrawDW_Column(int lineNum, int leftPos) {
		System.out.println("begin drawColumn");
		int id = 0;
		String sname = "";
		MyUIComponent obj = null;
		int top = 0;
		String svalue = "";
		int beginRowid = 1;
		String rowstate = "";
		MyInt iret = new MyInt(0);
		rowstate = webdwData.GetRowState(lineNum, iret);

		System.out.println("linenum:" + lineNum);
		for (id = 1; id <= 100; id++) {
			if (local_webdw.column[id].Name.equals("")) {// '����Ϊ�գ��˳����е�ִ�У�����ѭ��
				continue;
			} else {
				System.out.println("column name:" + local_webdw.column[id].Name);
			}

			if (lineNum == 0) {// '�ؼ�������ͷ�����ƣ�����ѭ��
				continue;
			}

			// '�ȼ����ǩ��topֵ���Դ����ж��Ƿ���Ҫ�����������󲢻���֮
			top = (int) (local_webdw.column[id].y) + (int) (local_webdw.header.height)
					+ (int) (local_webdw.detail.height) * (lineNum - beginRowid);

			sname = targetPict.getName() + "__" + lineNum + "__" + local_webdw.column[id].Name;
			svalue = webdwData.GetItemString(lineNum, id);// '�õ�ԭʼ��Ϣ����

			// Column Ĭ��ΪMyJTextField
			// ���ݲ�ͬ�༭������ǿ�������滻
			obj = new MyJTextField("", sname, targetControls, targetPict);
			obj.setRowid(lineNum);
			obj.setColid(id);
			controlSeg = controlSeg + 1;
			myControls[controlSeg] = obj;

			// ����Column�����λ������
			obj.setBounds((int) ((local_webdw.column[id].x + leftPos)), (int) (top),
					(int) (local_webdw.column[id].width), (int) (local_webdw.column[id].height));

			// ����Column�����Text����
			obj.setText(svalue);

			// '���ӵ�ѡ��ť��֧��20090123
			String valuestring = "";
			valuestring = local_webdw.table.Columns[id].values;// '�õ�values��ʾ

			// '--------------------------��ѡ��༭���֧�ֿ�ʼ-----------------------------
			MyJRadioButton radioobj;
			MyJPanel frameObj;
			String value[];
			int radioid = 0;
			String radioValue = "";
			String radioDisplay = "";
			int tabpos;
			// '����ǵ�ѡť�����Ҫ�ȴ���һ������������������
			if (valuestring.length() > 0 && local_webdw.column[id].radiobuttons.Columns > 0) {
				sname = targetPict.getName() + "__" + lineNum + "__" + local_webdw.column[id].Name + "__" + "Frame";
				frameObj = new MyJPanel(sname, targetControls, targetPict);
				frameObj.setRowid(lineNum);
				frameObj.setColid(id);

				// ��targetControls����ɾ��obj,�����ظ�����
				targetControls.remove(obj);

				controlSeg = controlSeg + 1;
				myControls[controlSeg] = frameObj;
				frameObj.setBounds(obj.getLeft(), obj.getTop(), obj.getWidth() - (int) (10), obj.getHeight());

				value = Split(valuestring, "/");
				for (radioid = 0; radioid <= UBound(value); radioid++) {
					if (value[radioid].length() == 0) {
						break;
					}

					tabpos = InStr(1, value[radioid], Chr(9));// 'value��Tab����λ��
					if (tabpos > 0) {
						radioDisplay = Left(value[radioid], tabpos - 1);
						radioValue = Mid(value[radioid], tabpos + 1, Len(value[radioid]) - tabpos);
					} else {
						radioDisplay = "";
						radioValue = "";
						break;// '���ݸ�ʽ������������е���ʾ
					}
					// ���radiobutton��name����
					sname = targetPict.Name + "__" + lineNum + "__" + local_webdw.column[id].Name + "__" + radioValue;
					// ����radiobutton����
					radioobj = new MyJRadioButton(radioDisplay, sname, targetControls, frameObj);
					radioobj.setRowid(lineNum);
					radioobj.setColid(id);
					radioobj.Tag = radioValue;// '�Ѷ�Ӧֵ����tag��������
					radioobj.setBounds((int) (10), (int) ((30 + 60 * radioid)), (int) (obj.getWidth() - 40),
							(int) (50));
					// '���ݵ�ǰ�ֶε����ݣ���radioobj��������ݱȽϣ������ͬ��������ѡ��״̬
					radioobj.Value(radioValue.equals(svalue));
				}
			}
			// '------------------------��ѡ��༭������----------------------------------------
			//
			// '------------------------ѡ���༭���ʼ----------------------------------------
			MyJCheckBox myCheckBox;
			if (valuestring.length() > 0 && local_webdw.column[id].checkbox.text.length() > 0) {
				sname = targetPict.Name + "__" + lineNum + "__" + local_webdw.column[id].Name + "__CheckBox";

				// '������֮�������¶���һ��������Ϊ��obj������
				myCheckBox = new MyJCheckBox(local_webdw.column[id].checkbox.text, sname, targetControls, targetPict);
				myCheckBox.setRowid(lineNum);
				myCheckBox.setColid(id);

				controlSeg = controlSeg + 1;
				myControls[controlSeg] = myCheckBox;// '�洢���ڿؼ���ָ��

				// ���ü����λ������
				myCheckBox.Top(obj.Top);
				myCheckBox.Left(obj.Left);
				myCheckBox.Width(obj.Width);
				myCheckBox.Height(obj.Height);

				// remove obj
				targetControls.remove(obj);

				myCheckBox.Value(GF_IF_Long(local_webdw.column[id].checkbox.on.equals(svalue), 1, 0) == 1);
			}
			// '------------------------ѡ���༭������----------------------------------------
			//
			// '------------------------�����б��༭������----------------------------------------

			MyJComboBox myComboBox;
			String combovalues[] = new String[1];
			int combotabpos;
			String combo_value;
			int combo_id;

			if ((valuestring.length() > 0 && (local_webdw.column[id].combobox.allowedit.length() > 0))) {
				sname = targetPict.Name + "__" + lineNum + "__" + local_webdw.column[id].Name + "__ComboBox";
				myComboBox = new MyJComboBox(sname, targetControls, targetPict);
				myComboBox.setRowid(lineNum);
				myComboBox.setColid(id);
				controlSeg = controlSeg + 1;
				myControls[controlSeg] = myComboBox;
				myComboBox.Left(obj.Left);
				myComboBox.Top(obj.Top);
				myComboBox.Width(obj.Width);
				myComboBox.Height(obj.Height);
				myComboBox.setValues(valuestring);

				// remove obj
				targetControls.remove(obj);

				combovalues = Split(valuestring, "/");
				for (combo_id = 0; combo_id <= UBound(combovalues); combo_id++) {
					if (combovalues[combo_id].equals("")) {
						break;// Exit For
					}

					combotabpos = InStr(1, combovalues[combo_id], Chr(9));
					if (combotabpos > 0) {
						combo_value = Mid(combovalues[combo_id], combotabpos + 1);
						if (combo_value.equals(svalue)) {// = svalue Then
							myComboBox.setSelectedIndex(combo_id);
						}
					}

				}
			}

		}
		return 0;
	}

}
