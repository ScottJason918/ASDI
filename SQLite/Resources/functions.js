var data1 = require("data");
var app1 = require("app.js");

var setUp = function(){	
	var win2 = Titanium.UI.createWindow({  
	    title:'Add',
	    backgroundColor:'#fff'
	});
	var tab2 = Titanium.UI.createTab({  
	    icon:'KS_nav_ui.png',
	    title:'Add',
	    window:win2
	});
	var nickText = Ti.UI.createTextField({
		borderstyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		top: 50,
		right: 10,
		width: "80%",
		height: 60
	}) ;
	
	var nameText = Ti.UI.createTextField({
		borderstyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		top: 120,
		right: 10,
		width: "80%",
		height: 60
	}) ;
	
	var numberText = Ti.UI.createTextField({
		borderstyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		top: 180,
		right: 10,
		width: "80%",
		height: 60
	}) ;
	win2.add(numberText, nameText, nickText);
	data1.tabgroup.addTab(tab2);	

};	
exports.setUp = setUp;

