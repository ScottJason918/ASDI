var league = {
	"name" : "League of Legends",
	"type": "MOBA",
	"info": function(){
		alert("This game can last over an hour for one round");	
	}
};
var csGo = {
	"name" : "CounterStrike: GO",
	"type": "FPS",
	"info": function(){
		alert("Rounds last an average of 20 minutes.  Can last longer");
	}
};
var tl2 = {
	"name": "Torchlight 2",
	"type": "Open World RPG",
	"info": function(){
		alert("Casual game with drop in / drop out multiplayer");
	}
};
var bindIsaac = {
	"name": "Binding of Isaac",
	"type": "Indie",
	"info": function(){
		alert("This game is very casual, though can soak up a lot of time");
	}
};
var wildStar = {
	"name": "Wildstar",
	"type": "MMORPG",
	"info": function(){
		alert("Fun for a few days.  Not worth keeping around. IMO");
	}
};

var dota = new Object();
dota.name = "DOTA2";
dota.type = "MOBA";
dota.info = function (){
	alert("These matches can last over an hour.  Hardcore MOBA");
};

var mine = new Ojbect();
mine.name = "Minecraft";
mine.type = "Sandbox";
mine.info = function(){
	alert("This game is addicting to most, yet boring to some");
};

var wow = new Object();
wow.name = "World of Warcraft";
wow.type = "MMORPG";
wow.info = function(){
	alert("Those that like WoW, LOVE it.  The rest are just tired of it");
};

var helloK = new Object();
helloK.name = "Hello Kitty Island Adventure";
helloK.type = "Best Game Ever";
helloK.info = function(){
	alert("I'd rather be playing \"Hello Kitty Island Adventure anyways\"");
};

var nos = new Object();
nos.name = "Nosgoth";
nos.type = "Third Person Arena";
nos.info = function(){
	alert("Humans v. Vampires battle arena. Hard to get used to, but very fun.");
};
