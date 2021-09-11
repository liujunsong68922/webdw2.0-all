using System;
using System.Collections;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using Newtonsoft.Json;

namespace Project2
{
    class CWebDWUIComponent2
    {

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
        public String value = "";
        public String values = "";
        public String selectedIndex = "";
        //是否选中的属性，对单选钮和复选钮有效1选中0未选中
        public String selected = "";

        public String colid = "";
        public String rowid = "";

        //绘图转换比例设定
        public double convertRate = 1.2;
        public int x = 0;
        public int y = 0;
        public int z = 0;
        public int cc = 0;
        
        //子节点对象

        public List<Object> childElement;
        // constructor
        /**
         * CWebDWUIComponent2是默认的构造函数
         * 
         * @param parent
         */
        public CWebDWUIComponent2()
        {
            //初始化子节点对象，仅对JPanel类型有效
            childElement = new List<Object>();
        }

       
        public void fromJson(Root rt)
        {
           
            double convertRate = 0.3;
            //获取通用的参数属性
            this.id = rt.uiobjList[x].id;
            this.name = rt.uiobjList[x].name;
            this.classname = rt.uiobjList[x].classname;
            this.text = rt.uiobjList[x].text;
            //获取位置信息left,top,width,height
            this.left = (int)(rt.uiobjList[x].left * convertRate);
            this.top = (int)(rt.uiobjList[x].top * convertRate);
            this.width = (int)(rt.uiobjList[x].width * convertRate);
            this.height = (int)(rt.uiobjList[x].height * convertRate);           
            this.value = rt.uiobjList[x].value;
            this.values = rt.uiobjList[x].values;
            this.selectedIndex = rt.uiobjList[x].selectedIndex;
            this.selected = rt.uiobjList[x].selected;
            
            if (this.classname.Equals("JPanel"))
            {                    
                
                for (int i = 0; i < 2; i++){ 
                CWebDWUIComponent2 childuiobj = new CWebDWUIComponent2();
                    
                childuiobj.id = rt.uiobjList[x].childElements[i].id;
                childuiobj.name = rt.uiobjList[x].childElements[i].name;
                childuiobj.classname = rt.uiobjList[x].childElements[i].classname;
                childuiobj.text = rt.uiobjList[x].childElements[i].text;
                childuiobj.left = rt.uiobjList[x].childElements[i].left;
                childuiobj.top = rt.uiobjList[x].childElements[i].top;
                childuiobj.width = rt.uiobjList[x].childElements[i].width;
                childuiobj.height = rt.uiobjList[x].childElements[i].height;
                childuiobj.value = rt.uiobjList[x].childElements[i].value;
                childuiobj.values = rt.uiobjList[x].childElements[i].values;
                childuiobj.selected = rt.uiobjList[x].childElements[i].selected;
                childuiobj.selectedIndex = rt.uiobjList[x].childElements[i].selectedIndex;
                    
                childElement.Add(childuiobj);
              }
               
            }
           
        }

        public void zero()
        {
            this.x = 0;
        }

        /**
         * 需要根据设置的classname不同，动态变换为各个不同的UI对象
         * 输入：本地参数变量
         * 输出：动态UI元素，需要根据classname来走不同的分支
         * @return
         */
        public Object CreateUINode_L(Panel parent)
        {
            //如果返回的classname是JLabel，就创建一个JLabel对象
            if (this.classname.Equals("JLabel"))
            {
                Label label1 = this.createLabel();
                parent.Controls.Add(label1);
                return null;
            }            
            return null;
        }
        public Object CreateUINode_T(Panel parent)
        {

            if (this.classname.Equals("JTextField"))
            {
                TextBox textBox1 = new TextBox();
                textBox1.Location = new System.Drawing.Point(this.left, this.top);
                textBox1.Text=this.text;
                textBox1.Size = new System.Drawing.Size(this.width, this.height);
                parent.Controls.Add(textBox1);                
                return null;
            }
            if (this.classname.Equals("JComboBox"))
            {
                ComboBox cbx = new ComboBox();
                cbx.BackColor = Color.Gray;
                cbx.Location = new System.Drawing.Point(this.left, this.top);
                cbx.Name = this.text;
                cbx.Size = new System.Drawing.Size(100, 25);
                cbx.TabIndex = 9;
                char[] c1 = { '/' }; char[] c2 = { '\t' };
                if (this.values != null)
                {
                    String[] values1 = this.values.Split(c1);
                    for (int i = 0; i < values1.Length; i++)
                    {
                        String[] data = values1[i].Split(c2);
                        if (data.Length > 1)
                        {
                            cbx.Items.AddRange(new object[] { data[1] });
                        }
                        parent.Controls.Add(cbx);
                    }
                }
                return null;
            }            
            //如果返回的classname是JCheckBox，就创建一个JCheckBox对象
            if (this.classname.Equals("JCheckBox"))
            {
                CheckBox checkbox1 = this.createCheckBox();
                parent.Controls.Add(checkbox1);
                return null;
            }
            //如果返回的classname是JPanel，就创建一个JPaneld对象
            if (this.classname.Equals("JPanel"))
            {
                Panel panel2 = this.createPanel();
                parent.Controls.Add(panel2);

                //针对panel的子节点进行绘制处理
               
                for (;z<childElement.Count ;z++)
                {
                    CWebDWUIComponent2 childobj = (CWebDWUIComponent2)childElement.ElementAt(z);
                    if (childobj.classname.Equals("JRadioButton"))
                    {
                        RadioButton newone = new RadioButton();
                        newone.Name = childobj.name;
                         if (z %2 == 0) { 
                          newone.Location = new System.Drawing.Point(childobj.left, childobj.top-30);
                          }

                          else
                          {
                              newone.Location = new System.Drawing.Point(childobj.left, childobj.top - 70);
                          }
                        
                        newone.Text = childobj.text;
                       // newone.Size = new System.Drawing.Size(childobj.width, childobj.height);
                        if (childobj.selected != null && childobj.selected.Equals("true"))
                        {
                            newone.Select();
                        }
                        panel2.Controls.Add(newone);
                    }
                    else
                    {
                        z--;
                    }
                }
                cc--;
                return null;
                
            }
            return null;
        }
        //创建一个Label对象出来
        private Label createLabel()
        {
            Label lbl = new Label();
            lbl.Text = this.text;
            lbl.Top = this.top;
            lbl.Left = this.left;
            lbl.BackColor = Color.Pink;
           lbl.Size= new System.Drawing.Size(this.width, this.height);
            return lbl;
        }
       
       /* private RadioButton createRadioButton()
        {
            
            RadioButton newone = new RadioButton();
            newone.Name=this.name;          
            newone.Location=new System.Drawing.Point(this.left, this.top);           
            newone.Text=this.text;
            newone.Size = new System.Drawing.Size(this.width, this.height);
            if (this.selected != null && this.selected.Equals("true"))
            {
                newone.Select();
            };
            return newone;
        }*/
        private Panel createPanel()
        {
            Panel newone = new Panel();
            newone.Name=this.name;            
            newone.Location=new System.Drawing.Point(this.left, this.top);
            newone.Size = new System.Drawing.Size(this.width, this.height);
            newone.BackColor = Color.LightGray;
            newone.Dock = System.Windows.Forms.DockStyle.None;
            newone.Anchor = System.Windows.Forms.AnchorStyles.Top;
            //newone.AutoScroll = true;
            return newone;
        }
        private CheckBox createCheckBox()
        {
            CheckBox newone = new CheckBox();
            newone.Name = this.name;
            newone.Location = new System.Drawing.Point(this.left, this.top);
            newone.Text = this.text;
            newone.Size = new System.Drawing.Size(this.width, this.height);
            if (this.selected != null && this.selected.Equals("true"))
            {
                newone.Select();
            };
            return newone;
        }
       
    }  
    }
