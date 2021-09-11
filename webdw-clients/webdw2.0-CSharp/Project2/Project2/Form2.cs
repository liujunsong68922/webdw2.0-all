using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using Newtonsoft.Json;

namespace Project2
{
    public partial class Form2 : Form
    {
        private System.Windows.Forms.Panel panel1;
        public Root rt;
        CWebDWUIComponent2 ui = new CWebDWUIComponent2();

        public Form2()
        {
            InitializeComponent();
        }

        private void panel1_Paint(object sender, PaintEventArgs e)
        {
           ui.zero();
            for (int i = 0; i < rt.uiobjList.Count; i++)
            {
                ui.fromJson(rt);
                ui.CreateUINode_L(panel1);
                ui.x = i;
            }
             
        }

        private void button1_Click(object sender, EventArgs e)
        {
            this.Controls.Remove(panel1);
            rt = GetRoot();
            this.panel1 = new System.Windows.Forms.Panel();
            this.panel1.BackColor = Color.White;
            this.panel1.Location = new System.Drawing.Point(17, 53);
            this.panel1.Name = "panel1";
            this.panel1.Size = new System.Drawing.Size(905, 351);
            this.panel1.TabIndex = 0;
            this.panel1.Paint += new System.Windows.Forms.PaintEventHandler(this.panel1_Paint);
            panel1.AutoScroll = true;
            this.Controls.Add(this.panel1);
        }
        public static Root GetRoot()
        {
            //d_products_grid d_employee_list d_employee
            string url = "http://localhost/webdw/retrieve?token=0&dwname=d_products&args=0&rand=0.8060839496401552";
            String s = Class2.GetFunction(url);
            Root rt = JsonConvert.DeserializeObject<Root>(s);
            return rt;
        }
        public static Root GetRoot_2()
        {
            //d_products_grid d_employee_list d_employee
            string url = "http://localhost/webdw/retrieve?token=0&dwname=d_products_grid&args=0&rand=0.8060839496401552";
            String s = Class2.GetFunction(url);
            Root rt = JsonConvert.DeserializeObject<Root>(s);
            return rt;
        }
        public static Root GetRoot_3()
        {
            //d_products_grid d_employee_list d_employee
            string url = "http://localhost/webdw/retrieve?token=0&dwname=d_employee_list&args=0&rand=0.8060839496401552";
            String s = Class2.GetFunction(url);
            Root rt = JsonConvert.DeserializeObject<Root>(s);
            return rt;
        }
        public static Root GetRoot_4()
        {
            //d_products_grid d_employee_list d_employee
            string url = "http://localhost/webdw/retrieve?token=0&dwname=d_employee&args=0&rand=0.8060839496401552";
            String s = Class2.GetFunction(url);
            Root rt = JsonConvert.DeserializeObject<Root>(s);
            return rt;
        }
        private void Form2_Load(object sender, EventArgs e)
        {
            
        }

        private void button2_Click(object sender, EventArgs e)
        {
            ui.zero();
            for (int i = 0; i < rt.uiobjList.Count; i++)
            {
                ui.x = i;
                ui.fromJson(rt);
                ui.CreateUINode_T(panel1);
                
            }
        }

        private void button3_Click(object sender, EventArgs e)
        {
            this.Controls.Remove(panel1);
            rt = GetRoot_2();
            this.panel1 = new System.Windows.Forms.Panel();
            this.panel1.BackColor = Color.White;
            this.panel1.Location = new System.Drawing.Point(17, 53);
            this.panel1.Name = "panel1";
            this.panel1.Size = new System.Drawing.Size(905, 400);
            this.panel1.TabIndex = 0;
            this.panel1.Paint += new System.Windows.Forms.PaintEventHandler(this.panel1_Paint);
            panel1.AutoScroll = true;
            this.Controls.Add(this.panel1);

        }

        private void button5_Click(object sender, EventArgs e)
        {
            this.Controls.Remove(panel1);
            rt = GetRoot_3();
            this.panel1 = new System.Windows.Forms.Panel();
            this.panel1.BackColor = Color.White;
            this.panel1.Location = new System.Drawing.Point(17, 53);
            this.panel1.Name = "panel1";
            this.panel1.Size = new System.Drawing.Size(905, 351);
            this.panel1.TabIndex = 0;
            this.panel1.Paint += new System.Windows.Forms.PaintEventHandler(this.panel1_Paint);
            panel1.AutoScroll = true;
            this.Controls.Add(this.panel1);
        }

        private void button6_Click(object sender, EventArgs e)
        {
            this.Controls.Remove(panel1);
            rt = GetRoot_4();
            this.panel1 = new System.Windows.Forms.Panel();
            this.panel1.BackColor = Color.White;
            this.panel1.Location = new System.Drawing.Point(17, 53);
            this.panel1.Name = "panel1";
            this.panel1.Size = new System.Drawing.Size(905, 451);
            this.panel1.TabIndex = 0;
            this.panel1.Paint += new System.Windows.Forms.PaintEventHandler(this.panel1_Paint);
            panel1.AutoScroll = true;
            this.Controls.Add(this.panel1);
        }
    }
}
