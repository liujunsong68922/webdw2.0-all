using System;
using System.Collections;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Net;
using System.Text;
using System.Web.Script.Serialization;
using System.Windows.Forms;
using Newtonsoft.Json;

namespace Project2
{
    class Class2
    {
        //Get请求
        public static String GetFunction(String url)
        {
            string serviceAddress = url;
            HttpWebRequest request = (HttpWebRequest)WebRequest.Create(serviceAddress);
            request.Method = "GET";
            request.ContentType = "text/html;charset=UTF-8";
            HttpWebResponse response = (HttpWebResponse)request.GetResponse();
            Stream myResponseStream = response.GetResponseStream();
            StreamReader myStreamReader = new StreamReader(myResponseStream, Encoding.UTF8);
            string retString = myStreamReader.ReadToEnd();
            myStreamReader.Close();
            myResponseStream.Close();
            return retString;
        }
        [STAThread]
        public static void Main(string[] args)
        {
            /* 我的第一个 C# 程序 */
            
            Application.EnableVisualStyles();
            Application.SetCompatibleTextRenderingDefault(false);
            Application.Run(new Form2());
            string url = "http://localhost/webdw/retrieve?token=0&dwname=d_employee&args=0&rand=0.8060839496401552";
            String s = GetFunction(url);
            Console.WriteLine(s);
            Console.ReadKey();
            //Console.WriteLine(CWebDWUIComponent2.childElement.Count);
            
        }
    }
}
