///Creating Variables for later use
var yes = function (){
	alert("Data has been received");
	var getData = JSON.parse(this.responseText);
	//console.log(this.responseText);
};
var no = function(){
	alert("Data has not been received");
};	
var url = "http://us.battle.net/api/wow/challenge/medivh";

var data = Ti.Network.createHTTPClient({
	onload: yes,
	onerror: no,
	timeout: 5000
});

///opening connection
data.open("GET", url);
//request
data.send();