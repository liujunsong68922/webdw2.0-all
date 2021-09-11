// WebDWUIComponent.h: interface for the CWebDWUIComponent class.
//
//////////////////////////////////////////////////////////////////////

#if !defined(AFX_WEBDWUICOMPONENT_H__0FB4F2D9_3866_4A45_B44C_E530C6A3B582__INCLUDED_)
#define AFX_WEBDWUICOMPONENT_H__0FB4F2D9_3866_4A45_B44C_E530C6A3B582__INCLUDED_

#if _MSC_VER > 1000
#pragma once
#endif // _MSC_VER > 1000

#include <string>
#include "reader.h"
#include "value.h"

class CWebDWUIComponent  
{
public:
	int height;
	int width;
	int top;
	int left;
	std::string classname;
	std::string text;
	std::string name;
	std::string id;

	CWebDWUIComponent();
	virtual ~CWebDWUIComponent();

	void CWebDWUIComponent::fromJSON(Json::Value jsonvalue);
};

#endif // !defined(AFX_WEBDWUICOMPONENT_H__0FB4F2D9_3866_4A45_B44C_E530C6A3B582__INCLUDED_)
