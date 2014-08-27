// UI for Dispay Data window

// Window: display data
var displayWindow = Ti.UI.createWindow({  
    title: "Display Contacts",
    backgroundColor: "#fff"
});

// Tab 2: display data window
var displayTab = Ti.UI.createTab({  
    icon: "KS_nav_ui.png",
    title: "All Contacts",
    window: displayWindow
});

// Label for display data window
var displayLabel = Ti.UI.createLabel({
	color: "#999",
	text: "No contacts available",
	font: { fontSize: "20sp", fontFamily: "Helvetica Neue" },
	textAlign: "center",
	width: "auto"
});

// Table view for data
var displayTableView = Ti.UI.createTableView({
	style: Ti.UI.iPhone.TableViewStyle.GROUPED,
	visible: false
});

// Function to create/update table view
var getTableView = function(sqlData) {
	
	if(sqlData.length > 0) {
		// Clear data in table view
		displayTableView.data = [];
				
		for(i in sqlData) {
			// Row to hold data entry
			var displayRow = Ti.UI.createTableViewRow({
				hasDetail: true,
				height: "50dp",
				width: Ti.UI.FILL,
				sqlData: sqlData[i]
			});
			
			// View to contain row elements
			var displayRowView = Ti.UI.createView({
				layout: "vertical",
				top: "4dp",
				left: "16dp",
				height: Ti.UI.FILL,
				width: Ti.UI.FILL
			});
			
			// Label for main row data (name)
			var displayMainLabel = Ti.UI.createLabel({
				text: sqlData[i].firstName + " " + sqlData[i].lastName,
				font: { fontSize: "18sp", fontFamily: "Helvetica Neue" },
				width: Ti.UI.FILL
			});
			
			// Label for secondary row data (phone)
			var displaySecondaryLabel = Ti.UI.createLabel({
				text: sqlData[i].phone,
				font: { fontSize: "14sp", fontFamily: "Helvetica Neue" },
				width: Ti.UI.FILL
			});
			
			// Add view elements
			displayRowView.add(displayMainLabel);
			displayRowView.add(displaySecondaryLabel);
			
			displayRow.add(displayRowView);
			
			displayTableView.appendRow(displayRow);
		}
				
		// Change element visibility if rows exists
		displayLabel.setVisible(false);
		displayTableView.setVisible(true);
	} else {
		// Change element visibility if rows do not exist
		displayLabel.setVisible(true);
		displayTableView.setVisible(false);
	}
};


// Event listener(s)
displayTableView.addEventListener("click", function(e) {
   editData.createEditWin(e.row.sqlData);
});

// Add window elements
displayWindow.add(displayTableView);
displayWindow.add(displayLabel);

// Exports

exports.displayDataTab = displayTab;
exports.getTableView = getTableView;
