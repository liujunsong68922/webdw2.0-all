Imports System.IO
Imports System.Net

Public Class CWebDWTransaction
    '执行后台检索任务
    Public Function retrieve(dwname As String) As String
        '定义一个HttpWebRequest类实体
        Dim webRequest As Net.HttpWebRequest

        'url
        Dim surl As String
        surl = "http://localhost/webdw/retrieve?token=0&dwname=" + dwname + "&args=&rand=0.01"

        webRequest = CType(Net.WebRequest.Create(surl), HttpWebRequest)


        Dim responseReader As StreamReader
        responseReader = New StreamReader(webRequest.GetResponse().GetResponseStream())
        Dim responseData As String
        responseData = responseReader.ReadToEnd()
        responseReader.Close()
        'MessageBox.Show(responseData)
        '定义返回值
        retrieve = responseData
    End Function
End Class
