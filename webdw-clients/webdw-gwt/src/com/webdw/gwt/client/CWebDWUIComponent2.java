package com.webdw.gwt.client;

import java.awt.Container;
import java.util.ArrayList;

import com.google.gwt.dom.client.Element;

//import javax.swing.BorderFactory;
//import javax.swing.JCheckBox;
//import javax.swing.JComboBox;
//import javax.swing.JLabel;
//import javax.swing.JOptionPane;
//import javax.swing.JPanel;
//import javax.swing.JRadioButton;
//import javax.swing.JTextField;

import com.google.gwt.json.client.JSONArray;
import com.google.gwt.json.client.JSONObject;
import com.google.gwt.json.client.JSONValue;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.Panel;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.Widget;

//import net.sf.json.JSONObject;

/**
 * WebDW锟斤拷锟斤拷姆锟斤拷氐锟経I锟斤拷锟� Version:2.0
 * 
 * @author Administrator
 *
 */
public class CWebDWUIComponent2 {
	//閫氱敤灞炴�э細id,name,text,classname
	public String id = "";
	public String name = "";
	public String text = "";
	public String classname = "";

	//閫氱敤浣嶇疆灞炴�э細left,top,width,height
	public int left = 0;
	public int top = 0;
	public int width = 0;
	public int height = 0;

	//鍏朵粬鎵╁睍灞炴��
	public String value="";
	public String values="";
	public String selectedIndex="";
	//鏄惁閫変腑鐨勫睘鎬э紝瀵瑰崟閫夐挳鍜屽閫夐挳鏈夋晥1閫変腑0鏈�変腑
	public String selected="";
	
	public String colid="";
	public String rowid="";
	
	//缁樺浘杞崲姣斾緥璁惧畾
	public double convertRate = 1.2;

	//瀛愯妭鐐瑰璞�
	public ArrayList<CWebDWUIComponent2> childElement ;
	// constructor
	/**
	 * CWebDWUIComponent2鏄粯璁ょ殑鏋勯�犲嚱鏁�
	 * 
	 * @param parent
	 */
	public CWebDWUIComponent2() {
		//鍒濆鍖栧瓙鑺傜偣瀵硅薄锛屼粎瀵笿Panel绫诲瀷鏈夋晥
		childElement = new ArrayList<CWebDWUIComponent2>();
	}

	/**
	 * 浠巎son瀛楃涓蹭腑鑾峰彇ui鍏冪礌鐨勫睘鎬у畾涔�
	 * 
	 * @param obj
	 */
	public void fromJson(JSONObject obj) {
		//瀹氫箟杞崲姣斾緥鏁版嵁
		double convertRate = 0.3;
		//鑾峰彇閫氱敤鐨勫弬鏁板睘鎬�
		this.id = obj.get("Id").isString().stringValue();
		this.name = obj.get("Name").isString().stringValue();
		this.classname = obj.get("classname").isString().stringValue();
		this.text = obj.get("Text").isString().stringValue();

		//鑾峰彇浣嶇疆淇℃伅left,top,width,height
		this.left = (int) (obj.get("Left").isNumber().doubleValue() * convertRate);
		this.top = (int) ((obj.get("Top").isNumber().doubleValue()) * convertRate);
		this.width = (int) ((obj.get("Width").isNumber().doubleValue()) * convertRate);
		this.height = (int) ((obj.get("Height").isNumber().doubleValue()) * convertRate);
		
		//鍏朵粬閫氱敤灞炴��
		if(obj.containsKey("value")) {
			this.value = obj.get("value").toString();
		}
		if(obj.containsKey("values")) {
			this.values = obj.get("values").toString();
		}
		if(obj.containsKey("selectedIndex")) {
			this.selectedIndex = obj.get("selectedIndex").toString();
		}
		this.rowid = obj.get("rowid").toString();
		this.colid = obj.get("colid").toString();
		
		if(obj.containsKey("selected")) {
			this.selected = obj.get("selected").toString();
		}
		//閽堝JPanel绫诲瀷鐨刯son瀵硅薄锛屽垵濮嬪寲鍏朵笅绾ц妭鐐�
		if (this.classname.equalsIgnoreCase("JPanel")) {
			JSONArray jsonchild = (JSONArray) obj.get("childElements");
			for(int i=0;i<jsonchild.size();i++) {
				CWebDWUIComponent2 childuiobj = new CWebDWUIComponent2();
				childuiobj.fromJson((JSONObject)(jsonchild.get(i)));
				childElement.add(childuiobj);
			}
			//message("child number:"+childElement.size());
		}
	}
	

	public Object CreateUINode(Panel parent) {
		
		if (this.classname.equalsIgnoreCase("JLabel")) {
			Label label1 = this.createLabel();
			label1.addStyleName("webdw-label");
			
			Element ele = label1.getElement();
			ele.getStyle().setProperty("position","absolute");
			ele.getStyle().setProperty("top",this.top+"px");
			ele.getStyle().setProperty("left",this.left+"px");
			parent.add(label1);
			return null;
		}
		//濡傛灉杩斿洖鐨刢lassname鏄疛TextField锛屽氨鍒涘缓涓�涓狫TextField瀵硅薄
		if (this.classname.equalsIgnoreCase("JTextField")) {
			TextBox text1 = this.createTextField();
			Element ele = text1.getElement();
			ele.getStyle().setProperty("position","absolute");
			ele.getStyle().setProperty("top",this.top+"px");
			ele.getStyle().setProperty("left",this.left+"px");			
			parent.add(text1);
			return null;
		}

		//濡傛灉杩斿洖鐨刢lassname鏄疛ComboBox锛屽氨鍒涘缓涓�涓狫ComboBox瀵硅薄
//		if (this.classname.equalsIgnoreCase("JComboBox")) {
//			JComboBox box1 = this.createComboBox();
//			parent.add(box1);
//			return null;
//		}
		//濡傛灉杩斿洖鐨刢lassname鏄疛CheckBox锛屽氨鍒涘缓涓�涓狫CheckBox瀵硅薄
//		if (this.classname.equalsIgnoreCase("JCheckBox")) {
//			JCheckBox checkbox1 = this.createCheckBox();
//			parent.add(checkbox1);
//			return null;
//		}
		//濡傛灉杩斿洖鐨刢lassname鏄疛Panel锛屽氨鍒涘缓涓�涓狫Paneld瀵硅薄
//		if (this.classname.equalsIgnoreCase("JPanel")) {
//			JPanel panel1 = this.createPanel();
//			parent.add(panel1);
//			
//			//閽堝panel鐨勫瓙鑺傜偣杩涜缁樺埗澶勭悊
//			for(int i=0;i<childElement.size();i++) {
//				CWebDWUIComponent2 childobj = childElement.get(i);
//				if(childobj.classname.equalsIgnoreCase("JRadioButton")) {
//					JRadioButton childbutton = childobj.createRadioButton();
//					panel1.add(childbutton);
//				}
//				
//			}
//			return null;
//		}
//		缁欏嚭鎻愮ず淇℃伅锛岃繖涓猚lassname鏆傛椂杩樹笉鏀寔锛屾棤娉曡繘琛屽姩鎬佹覆鏌�
//		message("Unsupported classname:"+ this.classname);
		
		return null;
	}

	//鍒涘缓涓�涓狶abel瀵硅薄鍑烘潵
	private Label  createLabel() {
		Label  newone = new Label (this.text);
		newone.setText(this.text);

		//newone.addStyleName("sendButton");
		//newone.setName(this.name);
		//newone.setLayout(null);
		//newone.setBorder(BorderFactory.createEtchedBorder());
		//newone.setBounds(this.left, this.top, this.width, this.height);
		//newone.setVisible(true);
		return newone;
	}
	//鍒涘缓涓�涓猅extField瀵硅薄鍑烘潵
	private TextBox createTextField() {
		TextBox newone = new TextBox();
		newone.setText(this.text);
		newone.setName(this.name);
//		newone.setLayout(null);
//		newone.setBorder(BorderFactory.createEtchedBorder());
//		newone.setBounds(this.left, this.top, this.width, this.height);
		newone.setVisible(true);
		return newone;
	}
	//鍒涘缓涓�涓狿anel瀵硅薄鍑烘潵
//	private JPanel createPanel() {
//		JPanel newone = new JPanel();
//		newone.setName(this.name);
//		newone.setLayout(null);
//		newone.setBorder(BorderFactory.createEtchedBorder());
//		newone.setBounds(this.left, this.top, this.width, this.height);
//		newone.setVisible(true);
//		return newone;
//	}
	//鍒涘缓涓�涓笅鎷夋瀵硅薄鍑烘潵
//	private JComboBox createComboBox() {
//		JComboBox newone = new JComboBox();
//		newone.setName(this.name);
//		newone.setLayout(null);
//		newone.setBorder(BorderFactory.createEtchedBorder());
//		newone.setBounds(this.left, this.top, this.width, this.height);
//		newone.setVisible(true);
//		
//		//璁剧疆涓嬫媺妗嗙殑濉厖鏁版嵁
//		String values1[] = this.values.split("/");
//		for(int i=0;i<values1.length;i++) {
//			String data[] = values1[i].split("\t");
//			if(data.length>1) {
//				newone.addItem(data[1]);
//			}
//		}
//		return newone;
//	}
	//鍒涘缓涓�涓�夋嫨妗嗗璞″嚭鏉�
//	private JCheckBox createCheckBox() {
//		JCheckBox newone = new JCheckBox();
//		newone.setName(this.name);
//		newone.setLayout(null);
//		newone.setBorder(BorderFactory.createEtchedBorder());
//		newone.setBounds(this.left, this.top, this.width, this.height);
//		newone.setVisible(true);
//		
//		newone.setText(this.text);
//		//show selected value
//		//message(this.value);
//		if(this.value !=null && this.value.equalsIgnoreCase("true")) {
//			newone.setSelected(true);
//		};
//		return newone;
//	}
	
	//鍒涘缓涓�涓崟閫夋寜閽�
//	private JRadioButton createRadioButton() {
//		JRadioButton newone = new JRadioButton();
//		newone.setName(this.name);
//		newone.setLayout(null);
//		newone.setBorder(BorderFactory.createEtchedBorder());
//		newone.setBounds(this.left, this.top, this.width, this.height);
//		newone.setVisible(true);
//		
//		newone.setText(this.text);
//		if(this.selected !=null && this.selected.equalsIgnoreCase("true")) {
//			newone.setSelected(true);
//		};
//		return newone;
//	}
	
	//鏄剧ず瀵硅瘽妗�
//	public void message(String strinfo) {
//		JOptionPane.showMessageDialog(null, strinfo,
//				"JWebDW Message", 
//				JOptionPane.INFORMATION_MESSAGE);
//	}
}
