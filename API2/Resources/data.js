//Function to create image view
var next = function(a){
	var nextWin = Ti.UI.createWindow({
		backgroundColor: "#999999",
		
	});
	var picView = Ti.UI.createImageView({
		image: a.source.picture
	});
	nextWin.add(picView);
	nextWin.open();
	nextWin.addEventListener("click", function(){
		this.close();
	});
};

///Creating Views out of API
var yes = function (){
	alert("Data has been received");
	var getData = JSON.parse(this.responseText);
	var infoCon = getData.data.children;
	
	for(var i = 1; i < infoCon.length; i++){
		var thumb = infoCon[i].data.url;
		var lastFour = thumb.substring((thumb.length - 3), thumb.length);
		var title = infoCon[i].data.title;
		if(lastFour === "jpg" || lastFour === "gif" || lastFour === "png"){
			var listView = Ti.UI.createView({
				backgroundColor: "#336699",
				bottom: 2,
				picture: thumb,
				height: Ti.UI.SIZE
			});
			var text = Ti.UI.createLabel({
				text: title,
				top : 2,
				bottom: 2,
				left: 5,
				right: 5,
				textAlign: "left",
				picture: thumb,
				height: Ti.UI.SIZE
				
			});
			listView.addEventListener("click", next);
			listView.add(text);
			infoView.add(listView);
		};
			
	};
	//console.log(this.responseText);
};
var no = function(){
	alert("Data has not been received");
};	
var url = "http://api.reddit.com/r/funny";

var info = Ti.Network.createHTTPClient({
	onload: yes,
	onerror: no,
	timeout: 5000
});
///opening connection
info.open("GET", url);
//request
info.send();
