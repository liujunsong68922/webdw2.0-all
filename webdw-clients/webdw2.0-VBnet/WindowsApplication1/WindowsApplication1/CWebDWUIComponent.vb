
Public Class CWebDWUIComponent
    '元素的变量定义，输入使用
    Public id As String
    Public name As String
    Public text As String
    Public classname As String

    Public left1 As Long
    Public top1 As Long
    Public width1 As Long
    Public height1 As Long

    Public value As String
    Public values As String
    Public selectedIndex As Integer

    '是否选用，单选钮，复选钮使用
    Public selected As Integer

    '行号
    Public rowid As Long
    '列号
    Public colid As Long

    '如果是JPanel定义，那么就会存在子对象定义
    Private childElement(100) As CWebDWUIComponent

    '定义监听容器
    Private myListener As New CWebDWUIListener

    Public Function draw(sUI As String) As Integer


        draw = 0
    End Function

    Public Function initchild(index As Long) As CWebDWUIComponent
        'Dim i As Integer
        childElement(index) = New CWebDWUIComponent
        childElement(index + 1) = Nothing
        initchild = childElement(index)
    End Function


    '在pict里面绘制一个控件出来
    Public Function show(ByRef pict As PictureBox, ByRef formain As Form) As Long

        Dim iret As Long
        If classname = "JLabel" Then
            iret = drawLabel(pict, formain)
            show = iret
            GoTo endpoint
        End If
        If classname = "JTextField" Then
            iret = drawTextbox(pict, formain)
            show = iret
            GoTo endpoint
        End If
        If classname = "JComboBox" Then
            iret = drawCombo(pict, formain)
            show = iret
            GoTo endpoint
        End If
        If classname = "JPanel" Then
            iret = drawPanel(pict, formain)
            show = iret
            GoTo endpoint
        End If
        If classname = "JCheckBox" Then
            iret = drawCheckbox(pict, formain)
            show = iret
            GoTo endpoint
        End If
        MsgBox(classname)
        'drawLabel pict, formain

endpoint:
        Return 0

    End Function

    '在Picturebox容器里面里面绘制一个控件出来
    Public Function showOnPanel(ByRef pict As PictureBox, ByRef formain As Form) As Long

        Dim iret As Long
        If classname = "JLabel" Then
            iret = drawLabel2(pict, formain)
            showOnPanel = iret
            GoTo endpoint
        End If
        If classname = "JTextField" Then
            iret = drawTextbox2(pict, formain)
            showOnPanel = iret
            GoTo endpoint
        End If
        If classname = "JComboBox" Then
            iret = drawCombo2(pict, formain)
            showOnPanel = iret
            GoTo endpoint
        End If

        'MsgBox classname
        '绘制单选按钮
        If classname = "JRadioButton" Then
            iret = drawRadio2(pict, formain)
            GoTo endpoint
        End If
        'drawLabel pict, formain

endpoint:
        Return 0

    End Function
    '绘制文本标签对象
    Private Function drawLabel(ByRef pict As PictureBox, ByRef formin As Form) As Long
        Dim aa As Object
        aa = New Label()

        pict.Controls.Add(aa)

        aa.Left = left1
        aa.Top = top1
        aa.Width = width1
        aa.Height = height1

        aa.text = text
        aa.Visible = True

        If aa.Top > pict.Height Then
            pict.Height = top1 + height1 + 100
        End If

        Return 0
    End Function

    '绘制文本标签对象
    Private Function drawLabel2(ByRef pict As PictureBox, ByRef formin As Form) As Long
        Dim aa As Object
        aa = New Label

        pict.Controls.Add(aa)

        aa.Left = left1
        aa.Top = top1
        aa.Width = width1
        aa.Height = height1

        aa.Caption = text
        aa.Visible = True

        If aa.Top > pict.Height Then
            pict.Height = top1 + height1 + 100
        End If

        Return 0
    End Function

    '绘制文本标签对象
    Private Function drawTextbox(ByRef pict As PictureBox, ByRef formin As Form) As Long
        Dim aa As Object
        aa = New TextBox

        pict.Controls.Add(aa)

        aa.Left = left1
        aa.Top = top1
        aa.Width = width1
        aa.Height = height1

        aa.text = text
        aa.Visible = True

        If aa.Top > pict.Height Then
            pict.Height = top1 + height1 + 100
        End If

        '设置Tag标签，把rowId,colId都放到里面去
        aa.Tag = "rowid=" & rowid & "|colid=" & colid
        '挂载事件监听
        'myListener.setTextBox(aa, form1)

        Return 0

    End Function

    '绘制文本标签对象
    Private Function drawTextbox2(ByRef pict As PictureBox, ByRef formin As Form) As Long
        Dim aa As Object
        aa = New TextBox

        pict.Controls.Add(aa)

        aa.Left = left1
        aa.Top = top1
        aa.Width = width1
        aa.Height = height1

        aa.text = text
        aa.Visible = True

        If aa.Top > pict.Height Then
            pict.Height = top1 + height1 + 100
        End If

        Return 0
    End Function



    '绘制下拉框
    Private Function drawCombo(ByRef pict As PictureBox, ByRef formin As Form) As Long
        Dim aa As Object
        aa = New ComboBox
        pict.Controls.Add(aa)

        aa.Left = left1
        aa.Top = top1
        aa.Width = width1
        'aa.Height = height1 'Height是只读属性,针对ComboBox对象来说

        Dim value() As String
        value = Split(values, "/")
        Dim i As Integer
        For i = 0 To UBound(value)
            Dim sline() As String
            sline = Split(value(i), Chr(9))
            If UBound(sline) > 0 Then
                'aa.AddItem(sline(1))
            End If
        Next

        If selectedIndex >= 0 And selectedIndex <= UBound(value) Then
            Dim sdata() As String
            sdata = Split(value(selectedIndex), Chr(9))
            If UBound(sdata) > 0 Then
                text = sdata(1)
                aa.text = text
            End If

        End If
        'aa.Caption = text
        aa.Visible = True

        If aa.Top > pict.Height Then
            pict.Height = top1 + height1 + 100
        End If

        '挂载事件监听
        'myListener.setCombobox aa, form1

        Return 0
    End Function

    '绘制下拉框
    Private Function drawCombo2(ByRef pict As PictureBox, ByRef formin As Form) As Long
        Dim aa As Object
        aa = New ComboBox

        pict.Controls.Add(aa)

        aa.Left = left1
        aa.Top = top1
        aa.Width = width1
        'aa.Height = height1 'Height是只读属性,针对ComboBox对象来说

        Dim value() As String
        value = Split(values, "/")
        Dim i As Integer
        For i = 0 To UBound(value)
            Dim sline() As String
            sline = Split(value(i), Chr(9))
            If UBound(sline) > 0 Then
                aa.AddItem(sline(1))
            End If
        Next

        If selectedIndex >= 0 And selectedIndex <= UBound(value) Then
            Dim sdata() As String
            sdata = Split(value(selectedIndex), Chr(9))
            If UBound(sdata) > 0 Then
                text = sdata(1)
                aa.text = text
            End If

        End If
        'aa.Caption = text
        aa.Visible = True

        If aa.Top > pict.Height Then
            pict.Height = top1 + height1 + 100
        End If

        Return 0
    End Function
    '绘制Panel对象
    Private Function drawPanel(ByRef pict As PictureBox, ByRef formin As Form) As Long
        Dim aa As PictureBox
        aa = New PictureBox

        pict.Controls.Add(aa)

        aa.Left = left1
        aa.Top = top1
        aa.Width = width1
        aa.Height = height1

        ' = text
        aa.Visible = True

        Dim childId As Long
        Dim i As Long
        For childId = 0 To UBound(childElement) - 1
            If childElement(childId) Is Nothing Then
                'DO NOTHING
            Else

                i = childElement(childId).showOnPanel(aa, formin)
            End If
        Next
        If aa.Top > pict.Height Then
            pict.Height = top1 + height1 + 100
        End If

        Return 0
    End Function


    '绘制Radio对象
    Private Function drawRadio(ByRef pict As PictureBox, ByRef formin As Form) As Long
        Dim aa As Object
        aa = New TextBox

        pict.Controls.Add(aa)

        aa.Left = left1
        aa.Top = top1
        aa.Width = width1
        aa.Height = height1

        aa.Caption = text
        aa.Visible = True

        If aa.Top > pict.Height Then
            pict.Height = top1 + height1 + 100
        End If

        Return 0
    End Function

    '绘制Radio对象
    Private Function drawRadio2(ByRef pict As PictureBox, ByRef formin As Form) As Long
        Dim aa As Object
        aa = New RadioButton
        pict.Controls.Add(aa)

        aa.Left = left1
        aa.Top = top1
        aa.Width = width1
        aa.Height = height1

        aa.text = text
        aa.Visible = True

        '判断相关的返回值，决定这个radio button是否是选中状态
        If selected > 0 Then
            aa.checked = True
        End If

        '挂载事件监听
        'myListener.setRadiobutton aa, formin

        Return 0
    End Function

    '绘制checkbox对象
    Private Function drawCheckbox(ByRef pict As PictureBox, ByRef formin As Form) As Long
        Dim aa As Object
        aa = New CheckBox
        pict.Controls.Add(aa)

        aa.Left = left1
        aa.Top = top1
        aa.Width = width1
        aa.Height = height1

        aa.text = text
        aa.Visible = True

        If value = "true" Or value = "True" Then
            aa.checked = True
        Else
            aa.checked = 0
        End If
        If aa.Top > pict.Height Then
            pict.Height = top1 + height1 + 100
        End If

        '挂载事件监听
        'myListener.setCheckbox aa, formin

        Return 0
    End Function

    Private Sub Class_Initialize()
        '设置初始值为-1
        selectedIndex = -1

        '设置选中状态为0
        selected = 0
    End Sub
End Class
