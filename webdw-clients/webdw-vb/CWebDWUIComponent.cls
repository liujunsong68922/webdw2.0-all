VERSION 1.0 CLASS
BEGIN
  MultiUse = -1  'True
  Persistable = 0  'NotPersistable
  DataBindingBehavior = 0  'vbNone
  DataSourceBehavior  = 0  'vbNone
  MTSTransactionMode  = 0  'NotAnMTSObject
END
Attribute VB_Name = "CWebDWUIComponent"
Attribute VB_GlobalNameSpace = False
Attribute VB_Creatable = True
Attribute VB_PredeclaredId = False
Attribute VB_Exposed = False
Public id As String
Public name As String
Public text As String
Public classname As String

Public left1 As Long
Public top1 As Long
Public width1 As Long
Public height1 As Long

'在pict里面绘制一个控件出来
Public Function show(ByRef pict As PictureBox, ByRef formin As Form) As Long

    Dim aa As Variant
    
    Set aa = formin.Controls.Add("VB.Label", name, pict)
    
    aa.left = left1
    aa.top = top1
    aa.width = width1
    aa.height = height1
    
    aa.Caption = text
    aa.Visible = True
    
    If aa.top > pict.height Then
      pict.height = top1 + height1 + 100
    End If
    
End Function
