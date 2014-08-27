//Creating Window
var win1 = Ti.UI.createWindow({
	backgroundColor: "#007a74"
});

//Navigation Window
var navWin = Ti.UI.iOS.createNavigationWindow({
	window: win1
});
//Logo View and Enter button creation
var logoView = Ti.UI.createImageView({
	image: "Pictures/AddLogo.jpg",
	top: 0
});

var goBut = Ti.UI.createView({
	borderRadius: 10,
	bottom: 85,
	height: 50,
	width: 250,
	backgroundColor: "feff5c"
});

var enter = Ti.UI.createLabel({
	text: "ENTER",
	font: {fontSize: 35, fontFamily: "Perpetua", fontAlignment: "center"}
});

//Functions and Adding and Required Files
navWin.open();
goBut.add(enter);
win1.add(logoView, goBut);

var loadfile = require("data");

