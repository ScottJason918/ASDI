var db = Ti.Database.install("/database/DBase.sqlite", "dTable");
var win = Ti.UI.currentWindow;
var data= [];
var tableView = Ti.UI.createTableView({});
var create = function(){
	var dBase = Ti.Database.open("Dbase.sqlite");
	dBase.execute("INSERT INTO dTable (name, nick, number) VALUES (?,?,?)", name, nick, number);
	dBase.close();
};

// var read = function() {
var dBase = Ti.Database.open("dTable");
var rows = dBase.execute("SELECT name, nick, number FROM dTable");
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
rows.close();
dBase.close();
console.log(data);
win.add(tableView);
// };

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

exports.read = read;
exports.data = data;
