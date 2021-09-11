// project1Doc.h : interface of the CProject1Doc class
//
/////////////////////////////////////////////////////////////////////////////

#if !defined(AFX_PROJECT1DOC_H__9FC6E500_CD87_4D6F_802B_C09F5ED9ECA5__INCLUDED_)
#define AFX_PROJECT1DOC_H__9FC6E500_CD87_4D6F_802B_C09F5ED9ECA5__INCLUDED_

#if _MSC_VER > 1000
#pragma once
#endif // _MSC_VER > 1000


class CProject1Doc : public CDocument
{
protected: // create from serialization only
	CProject1Doc();
	DECLARE_DYNCREATE(CProject1Doc)

// Attributes
public:

// Operations
public:

// Overrides
	// ClassWizard generated virtual function overrides
	//{{AFX_VIRTUAL(CProject1Doc)
	public:
	virtual BOOL OnNewDocument();
	virtual void Serialize(CArchive& ar);
	//}}AFX_VIRTUAL

// Implementation
public:
	virtual ~CProject1Doc();
#ifdef _DEBUG
	virtual void AssertValid() const;
	virtual void Dump(CDumpContext& dc) const;
#endif

protected:

// Generated message map functions
protected:
	//{{AFX_MSG(CProject1Doc)
		// NOTE - the ClassWizard will add and remove member functions here.
		//    DO NOT EDIT what you see in these blocks of generated code !
	//}}AFX_MSG
	DECLARE_MESSAGE_MAP()
};

/////////////////////////////////////////////////////////////////////////////

//{{AFX_INSERT_LOCATION}}
// Microsoft Visual C++ will insert additional declarations immediately before the previous line.

#endif // !defined(AFX_PROJECT1DOC_H__9FC6E500_CD87_4D6F_802B_C09F5ED9ECA5__INCLUDED_)
