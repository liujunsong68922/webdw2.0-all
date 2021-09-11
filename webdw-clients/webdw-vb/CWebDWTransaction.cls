VERSION 1.0 CLASS
BEGIN
  MultiUse = -1  'True
  Persistable = 0  'NotPersistable
  DataBindingBehavior = 0  'vbNone
  DataSourceBehavior  = 0  'vbNone
  MTSTransactionMode  = 0  'NotAnMTSObject
END
Attribute VB_Name = "CWebDWTransaction"
Attribute VB_GlobalNameSpace = False
Attribute VB_Creatable = True
Attribute VB_PredeclaredId = False
Attribute VB_Exposed = False
Rem -------------------------------------------------
Rem WebDW的事务处理连接
Rem 目的是对客户端的访问提供一个在后台的事务支持特性
Rem 初期先采用一个数据库的连接
Rem @CopyRight Mr.Liu Junsong 2008-2009
Rem @版权所有 刘峻松 2008-2009
Rem E_mail : liujunsong@yahoo.com.cn
Rem -------------------------------------------------
Option Explicit
Option Base 1

'访问调用参数,需要外部先设置
Private serverURL As String         '后台访问的URL,不再提供公共访问权限，通过g_serverurl来设置

Public ErrString As String          '错误信息存储字符串
Dim resultString As String          '执行后的返回字符串


Dim myxmlhttp

'功能描述：执行一个SQL语句，返回一个标准的结果字符串
'要执行的sql语句以及相关参数是这个类的public变量
'执行之前，先设置各个变量，再调用此方法
'如此设计的目的是因为一个方法多个变量令人迷惑不解
'iret   返回状态，0正常 -1 失败
Public Function ExecuteSelect(ByRef iret As Long) As String
     On Error GoTo errorHandle
     Dim sURL As String
     
     ErrString = ""
     serverURL = "http://localhost/webdw/retrieve"    '读取G_ServerURL
     
     '构建要执行的sql命令，加一个rand参数是为了解决缓存的问题
     sURL = serverURL & _
            "?dwname=d_products&args=" & _
            "&rand=" & Now()
      
     myxmlhttp.open "GET", sURL, False    '用同步模式进行调用
     myxmlhttp.send ""
     
     myxmlhttp.onreadystatechange = Recv
     
     If ErrString > "" Then
        iret = -1
        ExecuteSelect = ""
     Else
        iret = 0
        ExecuteSelect = resultString
     End If
     
     Exit Function
     
errorHandle:
    iret = -1
    ErrString = "数据库访问发生异常：" & Err.Description
     
End Function
'select的回调方法
Public Function Recv() As Object
    If myxmlhttp.readyState = 4 Then
        resultString = myxmlhttp.responseText
        Rem 判断返回的字符串中有无Exception字符,如果有就认为发生了异常
        Rem 这一判断方法未必是准确的，暂时如此
        If InStr(1, resultString, "Exception") > 0 Then
            ErrString = resultString
        End If
    Else
        resultString = ""
        ErrString = myxmlhttp.statusText
    End If
End Function



'sqlca的初始化方法
Private Sub Class_Initialize()
    Set myxmlhttp = CreateObject("Microsoft.XMLHTTP")
End Sub


