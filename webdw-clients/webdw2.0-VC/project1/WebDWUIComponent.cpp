// WebDWUIComponent.cpp: implementation of the CWebDWUIComponent class.
//
//////////////////////////////////////////////////////////////////////

#include "stdafx.h"
#include <windows.h>
#include "project1.h"
#include "WebDWUIComponent.h"
#include "reader.h"
#include "value.h"


#ifdef _DEBUG
#undef THIS_FILE
static char THIS_FILE[]=__FILE__;
#define new DEBUG_NEW
#endif

//////////////////////////////////////////////////////////////////////
// Construction/Destruction
//////////////////////////////////////////////////////////////////////

CWebDWUIComponent::CWebDWUIComponent()
{
	id="";
	name="";
	classname="";
	text="";
	left=0;
	top=0;
	width=0;
	height =0;
}

CWebDWUIComponent::~CWebDWUIComponent()
{

}

void CWebDWUIComponent::fromJSON(Json::Value obj)
{
	double convertRate = 0.3;
	id = obj["Id"].asString();
	name = obj["Name"].asString();
	classname = obj["classname"].asString();
	text = obj["text"].asString();

	left= (int)(obj["left"].asDouble() * convertRate);
	top = (int)(obj["top"].asDouble() * convertRate);
	width = (int)(obj["width"].asDouble() * convertRate);
	height = (int)(obj["height"].asDouble() * convertRate);

}

