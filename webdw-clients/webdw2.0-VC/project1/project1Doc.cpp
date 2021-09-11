// project1Doc.cpp : implementation of the CProject1Doc class
//

#include "stdafx.h"
#include "project1.h"

#include "project1Doc.h"

#ifdef _DEBUG
#define new DEBUG_NEW
#undef THIS_FILE
static char THIS_FILE[] = __FILE__;
#endif

/////////////////////////////////////////////////////////////////////////////
// CProject1Doc

IMPLEMENT_DYNCREATE(CProject1Doc, CDocument)

BEGIN_MESSAGE_MAP(CProject1Doc, CDocument)
	//{{AFX_MSG_MAP(CProject1Doc)
		// NOTE - the ClassWizard will add and remove mapping macros here.
		//    DO NOT EDIT what you see in these blocks of generated code!
	//}}AFX_MSG_MAP
END_MESSAGE_MAP()

/////////////////////////////////////////////////////////////////////////////
// CProject1Doc construction/destruction

CProject1Doc::CProject1Doc()
{
	// TODO: add one-time construction code here

}

CProject1Doc::~CProject1Doc()
{
}

BOOL CProject1Doc::OnNewDocument()
{
	if (!CDocument::OnNewDocument())
		return FALSE;

	// TODO: add reinitialization code here
	// (SDI documents will reuse this document)

	return TRUE;
}



/////////////////////////////////////////////////////////////////////////////
// CProject1Doc serialization

void CProject1Doc::Serialize(CArchive& ar)
{
	if (ar.IsStoring())
	{
		// TODO: add storing code here
	}
	else
	{
		// TODO: add loading code here
	}
}

/////////////////////////////////////////////////////////////////////////////
// CProject1Doc diagnostics

#ifdef _DEBUG
void CProject1Doc::AssertValid() const
{
	CDocument::AssertValid();
}

void CProject1Doc::Dump(CDumpContext& dc) const
{
	CDocument::Dump(dc);
}
#endif //_DEBUG

/////////////////////////////////////////////////////////////////////////////
// CProject1Doc commands
