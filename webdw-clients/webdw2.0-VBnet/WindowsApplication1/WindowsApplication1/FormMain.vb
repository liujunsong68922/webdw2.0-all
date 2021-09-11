Imports Newtonsoft.Json.Linq

Public Class FormMain
    Dim ui(10000) As CWebDWUIComponent
    Public Sub New()

        ' 此调用是设计器所必需的。
        InitializeComponent()

        ' 在 InitializeComponent() 调用之后添加任何初始化。

    End Sub

    '根据输入的字符串来初始化构建uicomponent对象的集合
    '输入：retStr 这是一个json字符串，表示这是一个UI对象的组合
    '输出：ui()变量数组
    '注意：这一方法不进行绘图显示
    Private Sub readUIfromReturnString(retstr As String)

        Dim uiArray(10000) As CWebDWUIComponent


        Dim rowid As Integer
        Dim cmd As String
        Dim rate As Double
        Dim i As Long

        rate = 0.3

        Dim jsonRet As JObject
        jsonRet = JObject.Parse(retstr)

        Dim json As Object
        json = jsonRet("uiobjList")


        For rowid = 0 To json.Count - 1
            'MsgBox ("rowid:" & rowid)

            uiArray(rowid) = New CWebDWUIComponent
            ui(rowid) = uiArray(rowid)

            uiArray(rowid).id = json(rowid)("id")
            uiArray(rowid).classname = json(rowid)("classname")
            uiArray(rowid).name = json(rowid)("name")
            uiArray(rowid).text = json(rowid)("text")


            uiArray(rowid).left1 = CType(json(rowid)("left"), Integer) * rate
            uiArray(rowid).top1 = CType(json(rowid)("top"), Integer) * rate
            uiArray(rowid).width1 = CType(json(rowid)("width"), Integer) * rate
            uiArray(rowid).height1 = CType(json(rowid)("height"), Integer) * rate

            uiArray(rowid).values = json(rowid)("values")


            cmd = "json[" & rowid & "].selectedIndex"
            Dim svalue1 As String
            svalue1 = json(rowid)("selectedIndex")

            '测试使用，显示下拉框返回的选择索引原始值
            If uiArray(rowid).classname = "JComboBox" Then
                '    MsgBox svalue1, vbOKOnly, "selectedIndex"
            End If

            If (svalue1 > "") Then
                uiArray(rowid).selectedIndex = svalue1
            Else
                uiArray(rowid).selectedIndex = -1
            End If

            uiArray(rowid).value = json(rowid)("value")
            uiArray(rowid).rowid = json(rowid)("rowid")
            uiArray(rowid).colid = json(rowid)("colid")


            '如果是JPanel，则需要读取它下面带的子对象进行填充
            If uiArray(rowid).classname = "JPanel" Then
                cmd = "json[" & rowid & "].childElements"
                '.AddCode(" var json2 = " & cmd)
                Dim json2 As Object
                json2 = json(rowid)("childElements")
                Dim childId As Integer

                For childId = 0 To json2.Count - 1

                    'Set uiArray(rowid).childelement(childid) = New CWebDWUIComponent
                    Dim newobj As CWebDWUIComponent
                    newobj = uiArray(rowid).initchild(childId)

                    newobj.id = json2(childId)("id")
                    newobj.classname = json2(childId)("classname")
                    newobj.name = json2(childId)("name")
                    newobj.text = json2(childId)("text")


                    newobj.left1 = CType(json2(childId)("left"), Integer) * rate
                    newobj.top1 = CType(json2(childId)("top"), Integer) * rate
                    newobj.width1 = CType(json2(childId)("width"), Integer) * rate
                    newobj.height1 = CType(json2(childId)("height"), Integer) * rate


                    newobj.values = json2(childId)("values")
                    newobj.selectedIndex = json2(childId)("selectedIndex")
                    newobj.value = json2(childId)("value")
                    newobj.rowid = json2(childId)("rowid")
                    newobj.colid = json2(childId)("colid")

                    '获取单选钮的选中状态参数
                    Dim selectedflag As Boolean
                    selectedflag = json2(childId)("selected")

                    If selectedflag Then
                        newobj.selected = 1
                    End If
                Next


            End If

            i = uiArray(rowid).show(PictureBox1, Me)

        Next



    End Sub


    Public Sub drawUI(sUI As String)

        ' 此调用是设计器所必需的。
        InitializeComponent()

        ' 在 InitializeComponent() 调用之后添加任何初始化。
        Dim jsonRet As JObject

        jsonRet = JObject.Parse(sUI)
        Dim jsonUI As JObject

        '获取UI对象列表
        jsonUI = jsonRet.Item("uiObjList")


    End Sub

    Private Sub Button1_Click(sender As Object, e As EventArgs) Handles Button1.Click
        Dim sqlca As New CWebDWTransaction
        Dim scallresult As String
        scallresult = sqlca.retrieve("d_products")

        MessageBox.Show(scallresult)
        PictureBox1.Controls.Clear()

        readUIfromReturnString(scallresult)

    End Sub

    Private Sub PictureBox1_Click(sender As Object, e As EventArgs) Handles PictureBox1.Click

    End Sub

    Private Sub Button2_Click(sender As Object, e As EventArgs) Handles Button2.Click
        Dim sqlca As New CWebDWTransaction
        Dim scallresult As String
        scallresult = sqlca.retrieve("d_products_grid")

        MessageBox.Show(scallresult)
        PictureBox1.Controls.Clear()

        readUIfromReturnString(scallresult)
    End Sub

    Private Sub Button3_Click(sender As Object, e As EventArgs) Handles Button3.Click
        Dim sqlca As New CWebDWTransaction
        Dim scallresult As String
        scallresult = sqlca.retrieve("d_employee_list")

        MessageBox.Show(scallresult)
        PictureBox1.Controls.Clear()

        readUIfromReturnString(scallresult)
    End Sub

    Private Sub Button4_Click(sender As Object, e As EventArgs) Handles Button4.Click
        Dim sqlca As New CWebDWTransaction
        Dim scallresult As String
        scallresult = sqlca.retrieve("d_employee")

        MessageBox.Show(scallresult)
        PictureBox1.Controls.Clear()

        readUIfromReturnString(scallresult)
    End Sub
End Class
