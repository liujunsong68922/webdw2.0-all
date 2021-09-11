import urllib.request
import json
from tkinter import *

#with urllib.request.urlopen('http://webdw.vicp.net/webdw/retrieve?dwname=d_products') as response:
with urllib.request.urlopen('http://localhost/webdw/retrieve?dwname=d_products&args=') as response:
    html= response.read()
#    print(html)
    print(len(html))
    svalue = html.decode('utf-8')
    print(svalue)
    array = json.loads(svalue)
    print(len(array))
    array = array['uiobjList']
#show information you get
for item in range(0,len(array)):
    print(item)
    print(array[item])
#    print(chr(html[item]))
#    print(html[item][1])

#begin draw the ui interface
class Application(Frame):
    def __init__(self, master=None):
        Frame.__init__(self, master)
        self.place(x=20,y=20,width=800,height=600)
        self.createWidgets()

    def createWidgets(self):
        self.quitButton = Button(self, text='Quit', command=self.quit)
        self.quitButton.place(x=0,y=0,anchor='nw')
        for item in range(0,len(array)):
            print(array[item])
            data = array[item]
            self.newone = Label(self,text= data['text'])
            convertrate = 0.3
            self.newone.place(x=data['left']*convertrate ,y=data['top']*convertrate +20,width=data['width']*convertrate ,height=data['height']*convertrate )

app = Application()
# set title
app.master.title('Python Webdw Demp. http://webdw.vicp.net')
# msg loop
app.mainloop()