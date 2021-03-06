//requiring file
var req = require("data");
var data = req.litNot;
var data2 = req.dotNot;
//main Window
var mainWindow = Ti.UI.createWindow({
	title : "My Games",
	backgroundColor : "#FFF"
});
//creating table
var table = Ti.UI.createTableView({
	top : 100
});
//alert from object
// var anAlert = this.info();

//making table view rows
var litSect = Ti.UI.createTableViewSection({
	headerTitle: "Literal notation",
	footerTitle: " "
});
var dotSect = Ti.UI.createTableViewSection({
	headerTitle: "Dot Notation",
	footerTitle: " "
});
for(var i = 0; i < data.length; i++){
	var aRow = Ti.UI.createTableViewRow({
		title : data[i].name,
		desc : data[i].type,
		inf: data[i].info,
		hasChild: true
	});

	litSect.add(aRow);
	aRow.addEventListener("click", this.inf);
};

for(var i = 0; i < data.length; i++){
	var aRow = Ti.UI.createTableViewRow({
			title : data2[i].name,
			desc : data2[i].type,
			inf: data[i].info,
			hasChild: true,
		});
		dotSect.add(aRow);
		aRow.addEventListener("click", this.inf);
};
// ///Testing
//console.log(data[2].name);
// //console.log(req.dotNot);
// for(var i = 0; i < data.length; i++){
	// console.log(data[i].name);
// };

///Opening Window
sections = ([litSect, dotSect]);
console.log(anAlert);
table.setData(sections);
mainWindow.add(table);
mainWindow.open();
