//making window and Views
var mainWindow = Ti.UI.createWindow({
	title : "Reddit.com/r/funny",
	backgroundColor: "#999999"
});

var titleView = Ti.UI.createView({
	top: 0,
	height: 50,
	backgroundColor: "#666666"
});

var titleLabel = Ti.UI.createLabel({
	text: "Funny Pictures!"
});
var infoView = Ti.UI.createScrollView({
	top: 51,
	height : Ti.Platform.displayCaps.platformHeight - titleView,
	layout: "vertical"
});
// Adding views
titleView.add(titleLabel);
mainWindow.add(titleView, infoView);
//Getting Data
var req = require("data");
//Opening Windows
mainWindow.open();
