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
Rem WebDW������������
Rem Ŀ���ǶԿͻ��˵ķ����ṩһ���ں�̨������֧������
Rem �����Ȳ���һ�����ݿ������
Rem @CopyRight Mr.Liu Junsong 2008-2009
Rem @��Ȩ���� ������ 2008-2009
Rem E_mail : liujunsong@yahoo.com.cn
Rem -------------------------------------------------
Option Explicit
Option Base 1

'���ʵ��ò���,��Ҫ�ⲿ������
Private serverURL As String         '��̨���ʵ�URL,�����ṩ��������Ȩ�ޣ�ͨ��g_serverurl������

Public ErrString As String          '������Ϣ�洢�ַ���
Dim resultString As String          'ִ�к�ķ����ַ���


Dim myxmlhttp

'����������ִ��һ��SQL��䣬����һ����׼�Ľ���ַ���
'Ҫִ�е�sql����Լ���ز�����������public����
'ִ��֮ǰ�������ø����������ٵ��ô˷���
'�����Ƶ�Ŀ������Ϊһ������������������Ի󲻽�
'iret   ����״̬��0���� -1 ʧ��
Public Function ExecuteSelect(ByRef iret As Long) As String
     On Error GoTo errorHandle
     Dim sURL As String
     
     ErrString = ""
     serverURL = "http://localhost/webdw/retrieve"    '��ȡG_ServerURL
     
     '����Ҫִ�е�sql�����һ��rand������Ϊ�˽�����������
     sURL = serverURL & _
            "?dwname=d_products&args=" & _
            "&rand=" & Now()
      
     myxmlhttp.open "GET", sURL, False    '��ͬ��ģʽ���е���
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
    ErrString = "���ݿ���ʷ����쳣��" & Err.Description
     
End Function
'select�Ļص�����
Public Function Recv() As Object
    If myxmlhttp.readyState = 4 Then
        resultString = myxmlhttp.responseText
        Rem �жϷ��ص��ַ���������Exception�ַ�,����о���Ϊ�������쳣
        Rem ��һ�жϷ���δ����׼ȷ�ģ���ʱ���
        If InStr(1, resultString, "Exception") > 0 Then
            ErrString = resultString
        End If
    Else
        resultString = ""
        ErrString = myxmlhttp.statusText
    End If
End Function



'sqlca�ĳ�ʼ������
Private Sub Class_Initialize()
    Set myxmlhttp = CreateObject("Microsoft.XMLHTTP")
End Sub

