using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Project2
{
    public class Root
    {
       
        public string status { get; set; }
        public string message { get; set; }
       
        public string uuid { get; set; }

        public List<DataItem> uiobjList { get; set; }
        
    }
    public class DataItem
    {
        public string id { get; set; }
        public string name { get; set; }
        public string text { get; set; }     
        public string classname { get; set; }
        public int left { get; set; }
        public int height { get; set; }
        public int top { get; set; }
        public int width { get; set; }
        public string value { get; set; }
        public string values { get; set; }
        public string selectedIndex { get; set; }
        public string selected { get; set; }

        public List<child> childElements { get; set; }
    }
    public class child
    {
        public string id { get; set; }
        public string name { get; set; }
        public string text { get; set; }
        public string classname { get; set; }
        public int left { get; set; }
        public int height { get; set; }
        public int top { get; set; }
        public int width { get; set; }
        public string value { get; set; }
        public string values { get; set; }
        public string selectedIndex { get; set; }
        public string selected { get; set; }


    }
}

