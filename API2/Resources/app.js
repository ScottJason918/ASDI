//making window and Views
var mainWindow = Ti.UI.createWindow({
	title : "WoW Challnge Mode!",
	backgroundColor: "#4C351B"
});

var titleView = Ti.UI.createView({
	top: 0,
	height: "100%",
	backgroundColor: "#FFB35D"
});

var titleLabel = Ti.UI.createLabel({
	text: "WoW Data Time!"
});

// Adding views
titleView.add(titleLabel);
mainWindow.add(titleView);
//Getting Data
var info = require("data");
//Opening Windows
mainWindow.open();
