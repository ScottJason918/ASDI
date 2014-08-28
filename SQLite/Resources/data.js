var db = Ti.Database.install("/database/DBase.db", "dTable");
var data= [];
var tabGroup = Ti.UI.createTabGroup();
var tableView = Ti.UI.createTableView({});
var create = function(){
	var db = Ti.Database.open("Dbase.db");
	db.execute("INSERT INTO dTable (name, nick, number) VALUES (?,?,?)", name, nick, number);
	db.close();
};

var read = function() {
 	var win1 = Titanium.UI.createWindow({  
	    title:'Contacts',
	    backgroundColor:'#fff',
	});
	var tab1 = Titanium.UI.createTab({  
    	icon:'KS_nav_views.png',
    	title:'Contacts',
	    window:win1
 	});

	// var win2 = Titanium.UI.createWindow({  
	    // title:'Add',
	    // backgroundColor:'#fff'
	// });
	// var tab2 = Titanium.UI.createTab({  
	    // icon:'KS_nav_ui.png',
	    // title:'Add',
	    // window:win2
	// });

	var db = Ti.Database.open("dTable");
	var rows = db.execute("SELECT name, nick, number FROM dTable");
	while(rows.isValidRow()){
		var name = rows.fieldByName("name");
		var nick = rows.fieldByName("nick");
		var number = rows.fieldByName("number");
		data.push({
			title: name,
			hasChild: true,
			nick : nick,
			num : number
		});
		rows.next();
	}
	console.log(db);
	rows.close(); 
	db.close();
	tabGroup.addTab(tab1);
	// tabGroup.addTab(tab2);
	win1.add(tableView);
	tabGroup.open();
};

var update = function(){
	var dBase = Ti.Database.open("Dbase.sqlite");
	dBase.execute("UPDATE dTable SET name=? nick=? number=? WHERE id=?", functions.nameText.value, functions.nickText.value, functions.numberText.value, functions.accept.id);
	dBase.close();
};

var del = function(){
	var dBase = Ti.Database.open("Dbase.sqlite");
	dBase.execute("DELETE FROM dTable SET name=? nick=? number=? WHERE id=?");
	dBase.close();
};

exports.tabGroup = tabGroup;
exports.create = create;
exports.read = read;
exports.data = data;

