var db = Ti.Database.install("/database/DBase.db", "db1");
var data= [];
var tableView = Ti.UI.createTableView({editable: true});
var create = function(){
	var db = Ti.Database.open("db1");
	db.execute("INSERT INTO db1 (name, nick, number) VALUES (?,?,?)", name, nick, number);
	db.close();
};

var read = function() {
	var db = Ti.Database.open("db1");
	var rows = db.execute("SELECT * FROM db1");
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
	var tabGroup = Ti.UI.createTabGroup();
 	var win1 = Titanium.UI.createWindow({  
	    title:'Contacts',
	    backgroundColor:'#fff',
	});
	var tab1 = Titanium.UI.createTab({  
    	icon:'KS_nav_views.png',
    	title:'Contacts',
    	window: win1
 	});
	var win2 = Titanium.UI.createWindow({  
	    title:'Add',
	    backgroundColor:'#fff'
	});
	var tab2 = Titanium.UI.createTab({  
	    icon:'KS_nav_ui.png',
	    title:'Add',
	    window:win2
	});

	rows.close(); 
	db.close();
	console.log(data);
	tableView.setData(data);
	tabGroup.addTab(tab1);
	tabGroup.addTab(tab2);
	win1.add(tableView);
	tabGroup.open();
};

var update = function(){
	var dBase = Ti.Database.open("db1");
	dBase.execute("UPDATE dTable SET name=? nick=? number=? WHERE id=?", functions.nameText.value, functions.nickText.value, functions.numberText.value, functions.accept.id);
	dBase.close();
};

var del = function(){
	var dBase = Ti.Database.open("db1");
	dBase.execute("DELETE FROM dTable SET name=? nick=? number=? WHERE id=?");
	dBase.close();
};

exports.del = del;
exports.update = update;
exports.create = create;
exports.read = read;
exports.data = data;

