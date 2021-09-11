package com.webdw2;

import java.awt.Container;
import java.util.ArrayList;

import javax.swing.BorderFactory;
import javax.swing.JCheckBox;
import javax.swing.JComboBox;
import javax.swing.JLabel;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.JRadioButton;
import javax.swing.JTextField;

import net.sf.json.JSONObject;

/**
 * WebDW����ķ��ص�UI��� Version:2.0
 * 
 * @author Administrator
 *
 */
public class CWebDWUIComponent2 {
	//通用属性：id,name,text,classname
	public String id = "";
	public String name = "";
	public String text = "";
	public String classname = "";

	//通用位置属性：left,top,width,height
	public int left = 0;
	public int top = 0;
	public int width = 0;
	public int height = 0;

	//其他扩展属性
	public String value="";
	public String values="";
	public String selectedIndex="";
	//是否选中的属性，对单选钮和复选钮有效1选中0未选中
	public String selected="";
	
	public String colid="";
	public String rowid="";
	
	//绘图转换比例设定
	public double convertRate = 1.2;

	//子节点对象
	public ArrayList<CWebDWUIComponent2> childElement ;
	// constructor
	/**
	 * CWebDWUIComponent2是默认的构造函数
	 * 
	 * @param parent
	 */
	public CWebDWUIComponent2() {
		//初始化子节点对象，仅对JPanel类型有效
		childElement = new ArrayList<CWebDWUIComponent2>();
	}

	/**
	 * 从json字符串中获取ui元素的属性定义
	 * 
	 * @param obj
	 */
	public void fromJson(JSONObject obj) {
		//定义转换比例数据
		double convertRate = 0.3;
		//获取通用的参数属性
		this.id = obj.getString("Id");
		this.name = obj.getString("Name");
		this.classname = obj.getString("classname");
		this.text = obj.getString("Text");

		//获取位置信息left,top,width,height
		this.left = (int) (obj.getInt("Left") * convertRate);
		this.top = (int) (obj.getInt("Top") * convertRate);
		this.width = (int) (obj.getInt("Width") * convertRate);
		this.height = (int) (obj.getInt("Height") * convertRate);
		
		//其他通用属性
		if(obj.has("value")) {
			this.value = obj.getString("value");
		}
		if(obj.has("values")) {
			this.values = obj.getString("values");
		}
		if(obj.has("selectedIndex")) {
			this.selectedIndex = obj.getString("selectedIndex");
		}
		this.rowid = obj.getString("rowid");
		this.colid = obj.getString("colid");
		
		if(obj.has("selected")) {
			this.selected = obj.getString("selected");
		}
		//针对JPanel类型的json对象，初始化其下级节点
		if (this.classname.equalsIgnoreCase("JPanel")) {
			net.sf.json.JSONArray jsonchild = obj.getJSONArray("childElements");
			for(int i=0;i<jsonchild.size();i++) {
				CWebDWUIComponent2 childuiobj = new CWebDWUIComponent2();
				childuiobj.fromJson((JSONObject)(jsonchild.get(i)));
				childElement.add(childuiobj);
			}
			message("child number:"+childElement.size());
		}
	}
	
	
	
	/**
	 * 需要根据设置的classname不同，动态变换为各个不同的UI对象
	 * 输入：本地参数变量
	 * 输出：动态UI元素，需要根据classname来走不同的分支
	 * @return
	 */
	public Object CreateUINode(Container parent) {
		//如果返回的classname是JLabel，就创建一个JLabel对象
		if (this.classname.equalsIgnoreCase("JLabel")) {
			JLabel label1 = this.createLabel();
			parent.add(label1);
			return null;
		}
		//如果返回的classname是JTextField，就创建一个JTextField对象
		if (this.classname.equalsIgnoreCase("JTextField")) {
			JTextField text1 = this.createTextField();
			parent.add(text1);
			return null;
		}

		//如果返回的classname是JComboBox，就创建一个JComboBox对象
		if (this.classname.equalsIgnoreCase("JComboBox")) {
			JComboBox box1 = this.createComboBox();
			parent.add(box1);
			return null;
		}
		//如果返回的classname是JCheckBox，就创建一个JCheckBox对象
		if (this.classname.equalsIgnoreCase("JCheckBox")) {
			JCheckBox checkbox1 = this.createCheckBox();
			parent.add(checkbox1);
			return null;
		}
		//如果返回的classname是JPanel，就创建一个JPaneld对象
		if (this.classname.equalsIgnoreCase("JPanel")) {
			JPanel panel1 = this.createPanel();
			parent.add(panel1);
			
			//针对panel的子节点进行绘制处理
			for(int i=0;i<childElement.size();i++) {
				CWebDWUIComponent2 childobj = childElement.get(i);
				if(childobj.classname.equalsIgnoreCase("JRadioButton")) {
					JRadioButton childbutton = childobj.createRadioButton();
					panel1.add(childbutton);
				}
				
			}
			return null;
		}
		//给出提示信息，这个classname暂时还不支持，无法进行动态渲染
		message("Unsupported classname:"+ this.classname);
		
		return null;
	}

	//创建一个Label对象出来
	private JLabel createLabel() {
		JLabel newone = new JLabel(this.text);
		newone.setName(this.name);
		newone.setLayout(null);
		newone.setBorder(BorderFactory.createEtchedBorder());
		newone.setBounds(this.left, this.top, this.width, this.height);
		newone.setVisible(true);
		return newone;
	}
	//创建一个TextField对象出来
	private JTextField createTextField() {
		JTextField newone = new JTextField(this.text);
		newone.setName(this.name);
		newone.setLayout(null);
		newone.setBorder(BorderFactory.createEtchedBorder());
		newone.setBounds(this.left, this.top, this.width, this.height);
		newone.setVisible(true);
		return newone;
	}
	//创建一个Panel对象出来
	private JPanel createPanel() {
		JPanel newone = new JPanel();
		newone.setName(this.name);
		newone.setLayout(null);
		newone.setBorder(BorderFactory.createEtchedBorder());
		newone.setBounds(this.left, this.top, this.width, this.height);
		newone.setVisible(true);
		return newone;
	}
	//创建一个下拉框对象出来
	private JComboBox createComboBox() {
		JComboBox newone = new JComboBox();
		newone.setName(this.name);
		newone.setLayout(null);
		newone.setBorder(BorderFactory.createEtchedBorder());
		newone.setBounds(this.left, this.top, this.width, this.height);
		newone.setVisible(true);
		
		//设置下拉框的填充数据
		String values1[] = this.values.split("/");
		for(int i=0;i<values1.length;i++) {
			String data[] = values1[i].split("\t");
			if(data.length>1) {
				newone.addItem(data[1]);
			}
		}
		return newone;
	}
	//创建一个选择框对象出来
	private JCheckBox createCheckBox() {
		JCheckBox newone = new JCheckBox();
		newone.setName(this.name);
		newone.setLayout(null);
		newone.setBorder(BorderFactory.createEtchedBorder());
		newone.setBounds(this.left, this.top, this.width, this.height);
		newone.setVisible(true);
		
		newone.setText(this.text);
		//show selected value
		//message(this.value);
		if(this.value !=null && this.value.equalsIgnoreCase("true")) {
			newone.setSelected(true);
		};
		return newone;
	}
	
	//创建一个单选按钮
	private JRadioButton createRadioButton() {
		JRadioButton newone = new JRadioButton();
		newone.setName(this.name);
		newone.setLayout(null);
		newone.setBorder(BorderFactory.createEtchedBorder());
		newone.setBounds(this.left, this.top, this.width, this.height);
		newone.setVisible(true);
		
		newone.setText(this.text);
		if(this.selected !=null && this.selected.equalsIgnoreCase("true")) {
			newone.setSelected(true);
		};
		return newone;
	}
	
	//显示对话框
	public void message(String strinfo) {
		JOptionPane.showMessageDialog(null, strinfo,
				"JWebDW Message", 
				JOptionPane.INFORMATION_MESSAGE);
	}
}
