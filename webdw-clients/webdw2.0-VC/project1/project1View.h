// project1View.h : interface of the CProject1View class
//
/////////////////////////////////////////////////////////////////////////////

#if !defined(AFX_PROJECT1VIEW_H__D1163EA3_3FD4_43E8_B843_DBF388D43612__INCLUDED_)
#define AFX_PROJECT1VIEW_H__D1163EA3_3FD4_43E8_B843_DBF388D43612__INCLUDED_

#if _MSC_VER > 1000
#pragma once
#endif // _MSC_VER > 1000


class CProject1View : public CView
{
protected: // create from serialization only
	CProject1View();
	DECLARE_DYNCREATE(CProject1View)

// Attributes
public:
	CProject1Doc* GetDocument();

// Operations
public:

// Overrides
	// ClassWizard generated virtual function overrides
	//{{AFX_VIRTUAL(CProject1View)
	public:
	virtual void OnDraw(CDC* pDC);  // overridden to draw this view
	virtual BOOL PreCreateWindow(CREATESTRUCT& cs);
	protected:
	virtual BOOL OnPreparePrinting(CPrintInfo* pInfo);
	virtual void OnBeginPrinting(CDC* pDC, CPrintInfo* pInfo);
	virtual void OnEndPrinting(CDC* pDC, CPrintInfo* pInfo);
	//}}AFX_VIRTUAL

// Implementation
public:
	CButton btn2;
	virtual ~CProject1View();
#ifdef _DEBUG
	virtual void AssertValid() const;
	virtual void Dump(CDumpContext& dc) const;
#endif

protected:

// Generated message map functions
protected:
	//{{AFX_MSG(CProject1View)
		// NOTE - the ClassWizard will add and remove member functions here.
		//    DO NOT EDIT what you see in these blocks of generated code !
	//}}AFX_MSG
	DECLARE_MESSAGE_MAP()
};

#ifndef _DEBUG  // debug version in project1View.cpp
inline CProject1Doc* CProject1View::GetDocument()
   { return (CProject1Doc*)m_pDocument; }
#endif

/////////////////////////////////////////////////////////////////////////////

//{{AFX_INSERT_LOCATION}}
// Microsoft Visual C++ will insert additional declarations immediately before the previous line.

#endif // !defined(AFX_PROJECT1VIEW_H__D1163EA3_3FD4_43E8_B843_DBF388D43612__INCLUDED_)
