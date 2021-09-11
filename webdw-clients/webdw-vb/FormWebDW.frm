VERSION 5.00
Object = "{0E59F1D2-1FBE-11D0-8FF2-00A0D10038BC}#1.0#0"; "msscript.ocx"
Begin VB.Form Form1 
   Caption         =   "WebDW2.0 Demo http://webdw.vicp.net"
   ClientHeight    =   7185
   ClientLeft      =   3285
   ClientTop       =   2370
   ClientWidth     =   14220
   LinkTopic       =   "Form1"
   ScaleHeight     =   7185
   ScaleWidth      =   14220
   Begin MSScriptControlCtl.ScriptControl ScriptControl1 
      Left            =   11520
      Top             =   120
      _ExtentX        =   1005
      _ExtentY        =   1005
   End
   Begin VB.CommandButton Command1 
      Caption         =   "检索测试"
      Height          =   375
      Left            =   12360
      TabIndex        =   2
      Top             =   120
      Width           =   1575
   End
   Begin VB.PictureBox Picture1 
      AutoRedraw      =   -1  'True
      BackColor       =   &H8000000D&
      Height          =   6375
      Left            =   360
      ScaleHeight     =   6315
      ScaleWidth      =   13635
      TabIndex        =   0
      Top             =   720
      Width           =   13695
      Begin VB.PictureBox Picture2 
         AutoRedraw      =   -1  'True
         AutoSize        =   -1  'True
         BackColor       =   &H8000000B&
         Height          =   6015
         Left            =   120
         ScaleHeight     =   5955
         ScaleWidth      =   13275
         TabIndex        =   1
         Top             =   120
         Width           =   13335
      End
   End
   Begin VB.Label Label2 
      Caption         =   "访问后台地址为：http://localhost/webdw/retrieve?dwname=d_products&&args="
      BeginProperty Font 
         Name            =   "宋体"
         Size            =   10.5
         Charset         =   134
         Weight          =   700
         Underline       =   0   'False
         Italic          =   -1  'True
         Strikethrough   =   0   'False
      EndProperty
      Height          =   255
      Left            =   360
      TabIndex        =   4
      Top             =   480
      Width           =   9975
   End
   Begin VB.Label Label1 
      Caption         =   "这个窗口演示了VB如何和后台服务器通讯获取界面描述，并动态绘制成所需要的数据数据窗口"
      BeginProperty Font 
         Name            =   "宋体"
         Size            =   10.5
         Charset         =   134
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   255
      Left            =   360
      TabIndex        =   3
      Top             =   120
      Width           =   9975
   End
End
Attribute VB_Name = "Form1"
Attribute VB_GlobalNameSpace = False
Attribute VB_Creatable = False
Attribute VB_PredeclaredId = True
Attribute VB_Exposed = False
Option Base 0
Dim sqlca As New CWebDWTransaction
Dim icount As Long


Private Sub Command1_Click()
    Dim sret As String
    Dim i As Long
    
    icount = icount + 1
    sret = sqlca.ExecuteSelect(i)
    
    MsgBox sret
    
    Dim uiArray(10000) As CWebDWUIComponent
   
   
    Dim rowid As Integer
    Dim cmd As String
    Dim rate As Double
    rate = 4
    
     With ScriptControl1
        .Reset
        .Language = "javascript"
        .AddCode "var json = " & sret & ".uiobjList;"
        For rowid = 0 To .Eval("json.length") - 1
            'MsgBox ("rowid:" & rowid)
            
            Set uiArray(rowid) = New CWebDWUIComponent
            cmd = "json[" & rowid & "].id"
            uiArray(rowid).id = .Eval(cmd)
            
            cmd = "json[" & rowid & "].name"
            uiArray(rowid).name = .Eval(cmd)
            
            cmd = "json[" & rowid & "].text"
            uiArray(rowid).text = .Eval(cmd)
            'MsgBox uiArray(rowid).text
            
             cmd = "json[" & rowid & "].left"
            uiArray(rowid).left1 = .Eval(cmd) * rate
           
            cmd = "json[" & rowid & "].top"
            uiArray(rowid).top1 = .Eval(cmd) * rate
           
            cmd = "json[" & rowid & "].width"
            uiArray(rowid).width1 = .Eval(cmd) * rate
            'MsgBox uiArray(rowid).width1
           
            cmd = "json[" & rowid & "].height"
            uiArray(rowid).height1 = .Eval(cmd) * rate
           
            i = uiArray(rowid).show(Picture2, Form1)
            
        Next
    End With
    
End Sub

