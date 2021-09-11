package com.webdw.andorid;

import org.json.JSONObject;

//import java.awt.Container;
import java.util.ArrayList;

import android.content.Context;
import android.view.View;
import android.widget.AbsoluteLayout;
import android.widget.Button;
import android.widget.TextView;

import org.json.JSONObject;
import org.json.JSONArray;

/**
 * WebDW����ķ��ص�UI��� Version:2.0
 *
 * @author Administrator
 *
 */
public class CWebDWUIComponent {
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

    //屏幕最大宽度，超过则不再添加
    private int maxwidth = 1500;
    //子节点对象
    public ArrayList<CWebDWUIComponent> childElement ;
    // constructor
    /**
     * CWebDWUIComponent2是默认的构造函数
     *
     *
     */
    public CWebDWUIComponent() {
        //初始化子节点对象，仅对JPanel类型有效
        childElement = new ArrayList<CWebDWUIComponent>();

    }

    /**
     * 从json字符串中获取ui元素的属性定义
     *
     * @param obj
     */
    public void fromJson(JSONObject obj) throws Exception{
        //定义转换比例数据
        double convertRate = 0.4;
        int topbegin = 200;
        //获取通用的参数属性
        this.id = obj.getString("Id");
        this.name = obj.getString("Name");
        this.classname = obj.getString("classname");
        this.text = obj.getString("Text");

        //获取位置信息left,top,width,height
        this.left = (int) (obj.getInt("Left") * convertRate);
        this.top = (int) (obj.getInt("Top") * convertRate) + topbegin;
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
            JSONArray jsonchild = obj.getJSONArray("childElements");
            for(int i=0;i<jsonchild.length();i++) {
                CWebDWUIComponent childuiobj = new CWebDWUIComponent();
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
    public Object CreateUINode(AbsoluteLayout parent,Context context) {
        //如果返回的classname是JLabel，就创建一个JLabel对象
        if (this.classname.equalsIgnoreCase("JLabel")) {
            TextView label1 = this.createLabel(context);
            if(label1.getX()>this.maxwidth){
                return null;
            }else {
                parent.addView(label1);
            }
            return null;
        }
        //如果返回的classname是JTextField，就创建一个JTextField对象
        if (this.classname.equalsIgnoreCase("JTextField")) {
            TextView label1 = this.createLabel(context);
            if(label1.getX()>this.maxwidth){
                return null;
            }else {
                parent.addView(label1);
            }
            return null;
        }

        //如果返回的classname是JComboBox，就创建一个JComboBox对象
//        if (this.classname.equalsIgnoreCase("JComboBox")) {
//            JComboBox box1 = this.createComboBox();
//            parent.add(box1);
//            return null;
//        }
        //如果返回的classname是JCheckBox，就创建一个JCheckBox对象
//        if (this.classname.equalsIgnoreCase("JCheckBox")) {
//            JCheckBox checkbox1 = this.createCheckBox();
//            parent.add(checkbox1);
//            return null;
//        }
        //如果返回的classname是JPanel，就创建一个JPaneld对象
//        if (this.classname.equalsIgnoreCase("JPanel")) {
//            JPanel panel1 = this.createPanel();
//            parent.add(panel1);
//
//            //针对panel的子节点进行绘制处理
//            for(int i=0;i<childElement.size();i++) {
//                CWebDWUIComponent childobj = childElement.get(i);
//                if(childobj.classname.equalsIgnoreCase("JRadioButton")) {
//                    JRadioButton childbutton = childobj.createRadioButton();
//                    panel1.add(childbutton);
//                }
//
//            }
//            return null;
//        }
        //给出提示信息，这个classname暂时还不支持，无法进行动态渲染
//        message("Unsupported classname:"+ this.classname);

        return null;
    }

    //创建一个Label对象出来
    private  TextView createLabel(Context context) {
        TextView newone = new TextView(context);
        newone.setText(this.text);
        //newone.setLeft(this.left);
        //newone.setTop(this.top);
        newone.setWidth(this.width);
        newone.setHeight(this.height);
        newone.setX(this.left);
        newone.setY(this.top);
        newone.setTextSize(9);

        return newone;
    }
    //创建一个TextField对象出来
//    private JTextField createTextField() {
//        JTextField newone = new JTextField(this.text);
//        newone.setName(this.name);
//        newone.setLayout(null);
//        newone.setBorder(BorderFactory.createEtchedBorder());
//        newone.setBounds(this.left, this.top, this.width, this.height);
//        newone.setVisible(true);
//        return newone;
//    }
    //创建一个Panel对象出来
//    private JPanel createPanel() {
//        JPanel newone = new JPanel();
//        newone.setName(this.name);
//        newone.setLayout(null);
//        newone.setBorder(BorderFactory.createEtchedBorder());
//        newone.setBounds(this.left, this.top, this.width, this.height);
//        newone.setVisible(true);
//        return newone;
//    }
    //创建一个下拉框对象出来
//    private JComboBox createComboBox() {
//        JComboBox newone = new JComboBox();
//        newone.setName(this.name);
//        newone.setLayout(null);
//        newone.setBorder(BorderFactory.createEtchedBorder());
//        newone.setBounds(this.left, this.top, this.width, this.height);
//        newone.setVisible(true);
//
//        //设置下拉框的填充数据
//        String values1[] = this.values.split("/");
//        for(int i=0;i<values1.length;i++) {
//            String data[] = values1[i].split("\t");
//            if(data.length>1) {
//                newone.addItem(data[1]);
//            }
//        }
//        return newone;
//    }
    //创建一个选择框对象出来
//    private JCheckBox createCheckBox() {
//        JCheckBox newone = new JCheckBox();
//        newone.setName(this.name);
//        newone.setLayout(null);
//        newone.setBorder(BorderFactory.createEtchedBorder());
//        newone.setBounds(this.left, this.top, this.width, this.height);
//        newone.setVisible(true);
//
//        newone.setText(this.text);
//        //show selected value
//        //message(this.value);
//        if(this.value !=null && this.value.equalsIgnoreCase("true")) {
//            newone.setSelected(true);
//        };
//        return newone;
//    }

    //创建一个单选按钮
//    private JRadioButton createRadioButton() {
//        JRadioButton newone = new JRadioButton();
//        newone.setName(this.name);
//        newone.setLayout(null);
//        newone.setBorder(BorderFactory.createEtchedBorder());
//        newone.setBounds(this.left, this.top, this.width, this.height);
//        newone.setVisible(true);
//
//        newone.setText(this.text);
//        if(this.selected !=null && this.selected.equalsIgnoreCase("true")) {
//            newone.setSelected(true);
//        };
//        return newone;
//    }

    //显示对话框
    public void message(String strinfo) {
//        JOptionPane.showMessageDialog(null, strinfo,
//                "JWebDW Message",
//                JOptionPane.INFORMATION_MESSAGE);
    }
}
