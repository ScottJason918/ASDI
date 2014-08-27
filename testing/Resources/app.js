/*
 * Michael Wielgosz
 * ASD 1408
 * Project 3: Local Storage with SQLite
 */

// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Ti.UI.setBackgroundColor("#999");

// Load required files
var sqlFunctions = require("sqlFunctions");
var addData = require ("addData");
var displayData = require("displayData");
var editData = require("editData");

// Function to create a basic alert dialog
var createDialog = function(title, message) {
	dialog = Ti.UI.createAlertDialog({
		title: title,
		message: message
	}).show();
};
	
// Create tab group
var tabGroup = Ti.UI.createTabGroup();

// Add tabs
tabGroup.addTab(addData.addDataTab);
tabGroup.addTab(displayData.displayDataTab);

// Event listener for special events in tabGroup
tabGroup.addEventListener("focus", function(e){
	if(e.index == 1) {
		// Refresh data on tab focus
		var data = sqlFunctions.readData();
		displayData.getTableView(data);
	}
});

// Open tab group
tabGroup.open();
