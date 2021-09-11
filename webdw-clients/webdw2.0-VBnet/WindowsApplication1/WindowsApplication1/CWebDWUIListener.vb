Public Class CWebDWUIListener
    '动态UI组件的时间监听定义入口类
    '定义动态文本框
    Dim WithEvents myTextBox As TextBox

    '定义下拉框
    Dim WithEvents myComboBox As ComboBox

    '定义单选按钮
    Dim WithEvents myRadioButton As RadioButton

    '定义复选按钮
    Dim WithEvents myCheckbox As CheckBox


    Dim parentForm As FormMain


    '设置文本框对象的连接
    Public Function setTextBox(ByRef textbox As TextBox, ByRef form1 As FormMain) As Long
        myTextBox = textbox
        parentForm = form1
        Return 0
    End Function

    '设置下拉框的连接
    Public Function setCombobox(ByRef combobox As ComboBox, ByRef form1 As FormMain) As Long
        myComboBox = combobox
        parentForm = form1
        Return 0
    End Function

    '设置单选按钮的连接
    Public Function setRadiobutton(ByRef radiobutton As RadioButton, ByRef form1 As FormMain) As Long
        myRadioButton = radiobutton
        parentForm = form1
        Return 0
    End Function

    '设置复选框的连接
    Public Function setCheckbox(ByRef checkbox As CheckBox, ByRef form1 As FormMain) As Long
        myCheckbox = checkbox
        parentForm = form1
        Return 0
    End Function





    '复选框
    Private Sub myCheckbox_Click()
        MsgBox("Event: checkbox clicked" & myCheckbox.Text)

        'TODO:调用后台服务更新数据

    End Sub



    Private Sub myComboBox_Change()
        MsgBox("Event: ComboBox changed." & myComboBox.Text)

        'TODO:调用后台服务更新数据
    End Sub

    Private Sub myComboBox_Click()
        MsgBox("Event: ComboBox clicked." & myComboBox.Text)

        'TODO:调用后台服务更新数据
    End Sub

    '单选按钮
    Private Sub myRadioButton_Click()
        MsgBox("Event: radiobutton clicked." & myRadioButton.Text)

        'TODO:调用后台服务更新数据
    End Sub

    Private Sub myTextBox_GotFocus()
        'MsgBox myTextBox.Tag
        Dim rowid As String
        Dim colid As String

        rowid = getProperty(myTextBox.Tag, "rowid")
        colid = getProperty(myTextBox.Tag, "colid")

        'parentForm.currentRowId = rowid
        'parentForm.currentColId = colid

    End Sub

    Private Sub myTextBox_LostFocus()

        '功能描述：当文本框失去焦点时，调用form的方法向后台发送请求，修改后台数据窗口对象在内存中的数据值
        Dim rowid As Long
        Dim colid As Long

        rowid = getProperty(myTextBox.Tag, "rowid")
        colid = getProperty(myTextBox.Tag, "colid")

        MsgBox(myTextBox.Text)

        'parentForm.DW_SetItem rowid, colid, myTextBox.text


    End Sub

    '控件的Tag字段被设计用来存储多个信息项数值
    '各个值之间使用|进行风格
    '形如：left=100|top=20|width=100|heigth=20 类似这个样子
    Private Function getProperty(taginfo As String, key As String) As String
        Dim map() As String
        map = Split(taginfo, "|")

        Dim i As Integer
        '判断并提取其中的属性值
        For i = 0 To UBound(map)
            Dim line() As String
            line = Split(map(i), "=")
            If UBound(line) = 1 And UCase(line(0)) = UCase(key) Then
                getProperty = line(1)
                Exit Function
            End If
        Next

        Return ""
    End Function
End Class
