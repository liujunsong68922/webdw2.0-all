// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

var http = require('http');

var text = document.getElementById('text');
var load = document.getElementById('load');
load.addEventListener('click', function () {
    loadSomeData();
});


function loadSomeData() {
	var token = '0';
	var dwname = 'd_products';
    http.get('http://localhost/webdw/setdataobject?token='+token+'&dwname='+dwname, function (res) {
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            text.textContent += chunk;
        });
    });
}

var webdwui = require('./CWebDWUIView.js');
webdwui.setParentId('Picture2');
console.log("webdwui:" + webdwui);

var setdw1 = document.getElementById('setdw1');
setdw1.addEventListener('click', function () {
    setdw1_click();
});

var setdw2 = document.getElementById('setdw2');
setdw2.addEventListener('click', function () {
    setdw2_click();
});

var setdw3 = document.getElementById('setdw3');
setdw3.addEventListener('click', function () {
    setdw3_click();
});

var setdw4 = document.getElementById('setdw4');
setdw4.addEventListener('click', function () {
    setdw4_click();
});

function setdw1_click(){
	var dwname = "d_products"; //后台数据窗口的名字
	var args="";
	webdwui.retrieve("0",dwname,args);
}

function setdw2_click(){
	var dwname = "d_products_grid"; //后台数据窗口的名字
	var args="";
	webdwui.retrieve("0",dwname,args);
}

function setdw3_click(){
	var dwname = "d_employee_list"; //后台数据窗口的名字
	var args="";
	webdwui.retrieve("0",dwname,args);
}

function setdw4_click(){
	var dwname = "d_employee"; //后台数据窗口的名字
	var args="";
	webdwui.retrieve("0",dwname,args);
}

