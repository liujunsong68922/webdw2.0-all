// project1.cpp : Defines the class behaviors for the application.
//

#include "stdafx.h"
#include "project1.h"

#include "MainFrm.h"
#include "ChildFrm.h"
#include "project1Doc.h"
#include "project1View.h"
#include <comdef.h>
#include "comutil.h"

#include <string>
#include <iostream>
#import <msxml6.dll>

#include "value.h"
#include "writer.h"
#include "reader.h"

#include "WebDWUIComponent.h"

#ifdef _DEBUG
#define new DEBUG_NEW
#undef THIS_FILE
static char THIS_FILE[] = __FILE__;
#endif


/////////////////////////////////////////////////////////////////////////////
// CProject1App

BEGIN_MESSAGE_MAP(CProject1App, CWinApp)
	//{{AFX_MSG_MAP(CProject1App)
	ON_COMMAND(ID_APP_ABOUT, OnAppAbout)
		// NOTE - the ClassWizard will add and remove mapping macros here.
		//    DO NOT EDIT what you see in these blocks of generated code!
	//}}AFX_MSG_MAP
	// Standard file based document commands
	ON_COMMAND(ID_FILE_NEW, CWinApp::OnFileNew)
	ON_COMMAND(ID_FILE_OPEN, CWinApp::OnFileOpen)
	// Standard print setup command
	ON_COMMAND(ID_FILE_PRINT_SETUP, CWinApp::OnFilePrintSetup)
END_MESSAGE_MAP()


/////////////////////////////////////////////////////////////////////////////
// CProject1App construction

CProject1App::CProject1App()
{
	// TODO: add construction code here,
	// Place all significant initialization in InitInstance
}

/////////////////////////////////////////////////////////////////////////////
// The one and only CProject1App object

CProject1App theApp;

/////////////////////////////////////////////////////////////////////////////
// CProject1App initialization

BOOL CProject1App::InitInstance()
{
	AfxEnableControlContainer();

	// Standard initialization
	// If you are not using these features and wish to reduce the size
	//  of your final executable, you should remove from the following
	//  the specific initialization routines you do not need.

#ifdef _AFXDLL
	Enable3dControls();			// Call this when using MFC in a shared DLL
#else
	Enable3dControlsStatic();	// Call this when linking to MFC statically
#endif

	// Change the registry key under which our settings are stored.
	// TODO: You should modify this string to be something appropriate
	// such as the name of your company or organization.
	SetRegistryKey(_T("Local AppWizard-Generated Applications"));

	LoadStdProfileSettings();  // Load standard INI file options (including MRU)

	// Register the application's document templates.  Document templates
	//  serve as the connection between documents, frame windows and views.

	CMultiDocTemplate* pDocTemplate;
	pDocTemplate = new CMultiDocTemplate(
		IDR_PROJECTYPE,
		RUNTIME_CLASS(CProject1Doc),
		RUNTIME_CLASS(CChildFrame), // custom MDI child frame
		RUNTIME_CLASS(CProject1View));
	AddDocTemplate(pDocTemplate);

	// create main MDI Frame window
	CMainFrame* pMainFrame = new CMainFrame;
	if (!pMainFrame->LoadFrame(IDR_MAINFRAME))
		return FALSE;
	m_pMainWnd = pMainFrame;

	// Parse command line for standard shell commands, DDE, file open
	CCommandLineInfo cmdInfo;
	ParseCommandLine(cmdInfo);

	// Dispatch commands specified on the command line
	if (!ProcessShellCommand(cmdInfo))
		return FALSE;

	// The main window has been initialized, so show and update it.
	pMainFrame->ShowWindow(m_nCmdShow);
	pMainFrame->UpdateWindow();

	return TRUE;
}


/////////////////////////////////////////////////////////////////////////////
// CAboutDlg dialog used for App About

class CAboutDlg : public CDialog
{
public:
	CFont myFont;
	int m_static_maxid;
	int m_static_id;
	void CreateUINode(CWebDWUIComponent ui);
	int STATIC_BEGIN;
	CStatic m_static[100];
//	CButton btn1;
	CAboutDlg();

// Dialog Data
	//{{AFX_DATA(CAboutDlg)
	enum { IDD = IDD_ABOUTBOX };
	//}}AFX_DATA

	// ClassWizard generated virtual function overrides
	//{{AFX_VIRTUAL(CAboutDlg)
	protected:
	virtual void DoDataExchange(CDataExchange* pDX);    // DDX/DDV support
	//}}AFX_VIRTUAL

// Implementation
protected:
	//{{AFX_MSG(CAboutDlg)
	virtual void OnOK();
	virtual BOOL OnInitDialog();
	//}}AFX_MSG
	DECLARE_MESSAGE_MAP()
};

CAboutDlg::CAboutDlg() : CDialog(CAboutDlg::IDD)
{
	//{{AFX_DATA_INIT(CAboutDlg)
	//}}AFX_DATA_INIT
	STATIC_BEGIN=10000;
	
	}

void CAboutDlg::DoDataExchange(CDataExchange* pDX)
{
	CDialog::DoDataExchange(pDX);
	//{{AFX_DATA_MAP(CAboutDlg)
	//}}AFX_DATA_MAP
}

BEGIN_MESSAGE_MAP(CAboutDlg, CDialog)
	//{{AFX_MSG_MAP(CAboutDlg)
	//}}AFX_MSG_MAP
END_MESSAGE_MAP()

// App command to run the dialog
void CProject1App::OnAppAbout()
{
	CAboutDlg aboutDlg;
	aboutDlg.DoModal();
}

/////////////////////////////////////////////////////////////////////////////
// CProject1App message handlers

_bstr_t SendData(std::wstring url, std::wstring username, std::wstring password)
{

    HRESULT hr;
    MSXML2::IXMLHTTPRequestPtr pIXMLHTTPRequest;
	
    _bstr_t pXMLDoc;
    std::wstring wvarQuery(L"username=");
    wvarQuery.append(username);
    wvarQuery.append(L"&password=");
    wvarQuery.append(password);
    _variant_t vartQueryFields(wvarQuery.c_str());

    try
    {
        CoInitialize(NULL);
        hr=pIXMLHTTPRequest.CreateInstance(__uuidof(MSXML2::XMLHTTP60));
        SUCCEEDED(hr) ? 0 : throw hr;

        hr=pIXMLHTTPRequest->open("GET", url.c_str(),false);
        SUCCEEDED(hr) ? 0 : throw hr;
        //如果要向服务器post数据，这个地方一定要设置为application/x-www-form-urlencoded
        pIXMLHTTPRequest->setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        hr = pIXMLHTTPRequest->send( vartQueryFields );
        SUCCEEDED(hr) ? 0 : throw hr;
        //拿到返回来的xml数据
        pXMLDoc=pIXMLHTTPRequest->responseText;
		
		MessageBox(NULL,_T(pXMLDoc),"server return",MB_OK);
		
		return pXMLDoc;
		//MessageBox("",NULL,MB_OK);
        //后面就是对拿回来的xml数据进行解析，主要是dom方法
    }
    catch(...)
    {
		MessageBox(NULL,"Error",NULL,MB_OK);
        if(pIXMLHTTPRequest)
            pIXMLHTTPRequest.Release();
        //if(pXMLDoc)
        //    pXMLDoc.Release();
        CoUninitialize();
    }
}

void show(_bstr_t info){
	MessageBox(NULL,_T(info),"",MB_OK);

}


void CAboutDlg::OnOK() 
{
	// TODO: Add extra validation here
	//MessageBox("",NULL,MB_OK);
	_bstr_t pXMLDoc = SendData(L"http://localhost/webdw/retrieve?token=&dwname=d_products&args=name=&rand=24", L"kenwell", L"kenwell");
	
	//convert String to JSON Objects
	Json::Reader reader;
    Json::Value json_object;
	
	const char* json_document = _T(pXMLDoc);
	if (!reader.parse(json_document, json_object)){
		// parse failed,return.
		return ;
	}
	MessageBox("parse ok","",MB_OK);

	std::string status = json_object["message"].asString();
	_bstr_t char1 = status.c_str();
	show(char1);

	CWebDWUIComponent child[1000];
	HWND childnode[1000];


	int child_number=0;
	int i=0;
	m_static_id = 0;
	if(json_object["uiobjList"].isArray()){
		child_number =(int) json_object["uiobjList"].size();
		for(i=0;i<child_number;i++){
			child[i].fromJSON(json_object["uiobjList"][i]);	
			//childnode[i]=child[i].CreateUINode(pp);
			CreateUINode(child[i]);
		}
	}
	MessageBox(_T("JSON READ OK"),"",MB_OK);
	
}







BOOL CAboutDlg::OnInitDialog() 
{
	CDialog::OnInitDialog();
	//btn1.Create("TEST",WS_CHILD | WS_VISIBLE | BS_PUSHBUTTON,CRect(10,10,50,30),this,100);
	// TODO: Add extra initialization here
		myFont.CreateFont(13, // nHeight
		0, // nWidth 		
		0, // nEscapement 		
		0, // nOrientation 		
		FW_NORMAL, // nWeight 		
		FALSE, // bItalic 		
		FALSE, // bUnderline 		
		0, // cStrikeOut 		
		ANSI_CHARSET, // nCharSet 		
		OUT_DEFAULT_PRECIS, // nOutPrecision 		
		CLIP_DEFAULT_PRECIS, // nClipPrecision 		
		DEFAULT_QUALITY, // nQuality 		
		DEFAULT_PITCH | FF_SWISS, // nPitchAndFamily 		
		_T("Microsoft Sans Serif")); // lpszFac
	m_static_id=0;
	m_static_maxid=100;
	int i=0;
	for(i=0;i<m_static_maxid;i++){
		m_static[i].Create("A",WS_CHILD | WS_VISIBLE ,CRect(0,0,10,10),this,STATIC_BEGIN + i);
		m_static[i].SetFont(&myFont);
	}


	return TRUE;  // return TRUE unless you set the focus to a control
	              // EXCEPTION: OCX Property Pages should return FALSE
}

//根据输入的UI对象描述，在界面上动态设计一个UI元素出来
void CAboutDlg::CreateUINode(CWebDWUIComponent ui)
{
	//MessageBox(TEXT("check JLabel"),"",MB_OK);
	if(strcmp(ui.classname.c_str(),"JLabel")==0){
		MessageBox(TEXT("JLabel"),"",MB_OK);
		if(m_static_id<m_static_maxid){
			//m_static[m_static_id].SetWindowText(ui.text.c_str());
			CString str1 ;
			//str1.Format("%d-%d-%d-%d",ui.left,ui.top,ui.width,ui.height);

			MessageBox(str1,"left",MB_OK);
			m_static[m_static_id].SetWindowText(ui.text.c_str());
			m_static[m_static_id].MoveWindow(ui.left,ui.top,ui.width+ui.left,ui.height+ui.top);
			
			m_static_id++;
		}
	}
	if(strcmp(ui.classname.c_str(),"JTextField")==0){
		//MessageBox(TEXT("JTextField"),"",MB_OK);
		if(m_static_id<m_static_maxid){
			//m_static[m_static_id].SetWindowText(ui.text.c_str());
			CString str1 ;
			str1.Format("%d-%d-%d-%d",ui.left,ui.top,ui.width,ui.height);

			//MessageBox(str1,"left",MB_OK);
			m_static[m_static_id].SetWindowText(ui.text.c_str());
			m_static[m_static_id].MoveWindow(ui.left,ui.top,ui.width+ui.left,ui.height+ui.top);
			m_static_id++;
		}
	}
}
