// project1View.cpp : implementation of the CProject1View class
//

#include "stdafx.h"
#include "project1.h"

#include "project1Doc.h"
#include "project1View.h"

#ifdef _DEBUG
#define new DEBUG_NEW
#undef THIS_FILE
static char THIS_FILE[] = __FILE__;
#endif

/////////////////////////////////////////////////////////////////////////////
// CProject1View

IMPLEMENT_DYNCREATE(CProject1View, CView)

BEGIN_MESSAGE_MAP(CProject1View, CView)
	//{{AFX_MSG_MAP(CProject1View)
		// NOTE - the ClassWizard will add and remove mapping macros here.
		//    DO NOT EDIT what you see in these blocks of generated code!
	//}}AFX_MSG_MAP
	// Standard printing commands
	ON_COMMAND(ID_FILE_PRINT, CView::OnFilePrint)
	ON_COMMAND(ID_FILE_PRINT_DIRECT, CView::OnFilePrint)
	ON_COMMAND(ID_FILE_PRINT_PREVIEW, CView::OnFilePrintPreview)
END_MESSAGE_MAP()

/////////////////////////////////////////////////////////////////////////////
// CProject1View construction/destruction

CProject1View::CProject1View()
{
	// TODO: add construction code here
	btn2.Create("hello",BS_DEFPUSHBUTTON|WS_VISIBLE|WS_CHILD,CRect(0,0,100,100),this,50000);
}

CProject1View::~CProject1View()
{
}

BOOL CProject1View::PreCreateWindow(CREATESTRUCT& cs)
{
	// TODO: Modify the Window class or styles here by modifying
	//  the CREATESTRUCT cs

	return CView::PreCreateWindow(cs);
}

/////////////////////////////////////////////////////////////////////////////
// CProject1View drawing

void CProject1View::OnDraw(CDC* pDC)
{
	CProject1Doc* pDoc = GetDocument();
	ASSERT_VALID(pDoc);
	// TODO: add draw code for native data here
}

/////////////////////////////////////////////////////////////////////////////
// CProject1View printing

BOOL CProject1View::OnPreparePrinting(CPrintInfo* pInfo)
{
	// default preparation
	return DoPreparePrinting(pInfo);
}

void CProject1View::OnBeginPrinting(CDC* /*pDC*/, CPrintInfo* /*pInfo*/)
{
	// TODO: add extra initialization before printing
}

void CProject1View::OnEndPrinting(CDC* /*pDC*/, CPrintInfo* /*pInfo*/)
{
	// TODO: add cleanup after printing
}

/////////////////////////////////////////////////////////////////////////////
// CProject1View diagnostics

#ifdef _DEBUG
void CProject1View::AssertValid() const
{
	CView::AssertValid();
}

void CProject1View::Dump(CDumpContext& dc) const
{
	CView::Dump(dc);
}

CProject1Doc* CProject1View::GetDocument() // non-debug version is inline
{
	ASSERT(m_pDocument->IsKindOf(RUNTIME_CLASS(CProject1Doc)));
	return (CProject1Doc*)m_pDocument;
}
#endif //_DEBUG

/////////////////////////////////////////////////////////////////////////////
// CProject1View message handlers
