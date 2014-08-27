// UI for Edit Data window

// Function to open Edit Data window
var createEditWin = function(sqlData) {
	
	var editInputFields = [];
	var editInputFieldIndex = 0;
	
	// Window: edit data
	var editWindow = Ti.UI.createWindow({
		backgroundColor: "#fff"
	});
	
	// View for containing main elements
	var mainView = Ti.UI.createView({
		layout: "horizontal",
		left: "4dp",
		right: "4dp",
	});
	
	// View to contain top elements
	var topView = Ti.UI.createView({
		layout: "vertical",
		height: Ti.UI.SIZE,
		top: "24dp"
	});
	
	// Label for add data window
	var addLabel = Ti.UI.createLabel({
		color: "#000",
		text: "Edit contact " + sqlData.firstName + " " + sqlData.lastName,
		font: { fontSize: "20sp", fontFamily: "Helvetica Neue" },
		top: "4dp"
	});
	
	// Label for required fields
	var requiredFieldsLabel = Ti.UI.createLabel({
		color: "#777",
		text: "* Required Fields",
		font: { fontSize: "14sp", fontFamily: "Helvetica Neue" },
		top: "8dp"
	});
	
	// View to contain input rows
	var rowView = Ti.UI.createView({
		layout: "vertical",
		top: "64dp",
		left: "0dp",
		height: Ti.UI.SIZE
	});
	
	// Function to create an edit input row
	var createEditInputRow = function(labelText, textFieldHint, textFieldText, keyboardType, keyboardAutoFix) {
		
		// View for row
		var inputView = Ti.UI.createView({
			layout: "composite",
			top: "4dp",
			width: Ti.UI.FULL,
			height: Ti.UI.SIZE
		});
		
		// Label for row
		var inputLabel = Ti.UI.createLabel({
			text: labelText,
			font: { fontSize: "16sp", fontFamily: "Helvetica Neue" },
			color: "#777",
			top: "4dp",
			left: "8dp"
		});
		
		// Text field for row
		editInputFields[editInputFieldIndex] = Ti.UI.createTextField({
			value: textFieldText,
			hintText: textFieldHint,
			borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
			keyboardType: keyboardType,
			autocapitalization: keyboardAutoFix,
			autocorrect: keyboardAutoFix,
			clearButtonMode: true,
			width: "50%",
			top: "0dp",
			right: "8dp"
		});
		
		inputView.add(inputLabel);
		inputView.add(editInputFields[editInputFieldIndex]);
		
		rowView.add(inputView);
			
		editInputFieldIndex++;
	};
	
	// Button: save edited data
	var saveButton = Ti.UI.createButton({
		systemButton: Ti.UI.iPhone.SystemButton.SAVE,
	});
	
	// Button: delete database row
	var deleteButton = Ti.UI.createButton({
		systemButton: Ti.UI.iPhone.SystemButton.TRASH,
	});
	
	// Button: cancel edit
	var cancelButton = Ti.UI.createButton({
		systemButton: Ti.UI.iPhone.SystemButton.CANCEL,
	});
	
	// Button: flexible space
	var flexSpace = Ti.UI.createButton({
    	systemButton: Ti.UI.iPhone.SystemButton.FLEXIBLE_SPACE
	});
	
	// Toolbar for buttons
	var buttonToolbar = Ti.UI.iOS.createToolbar({
		items: [ saveButton, flexSpace, deleteButton, flexSpace, cancelButton ],
		bottom: 0
	});
	
	// Event listener(s)
	saveButton.addEventListener("click", function() {
		var firstName = editInputFields[0].value;
		var phone = editInputFields[2].value;
		
		if(addData.checkData(firstName, phone)) {
			sqlFunctions.updateData(sqlData.id, editInputFields[0].value, editInputFields[1].value, editInputFields[2].value, editInputFields[3].value);
			
			createDialog("Success", "Contact was updated");
			
			// Reload data in table view
			var data = sqlFunctions.readData();
			displayData.getTableView(data);
					
			editWindow.close();
		}
	});
	
	deleteButton.addEventListener("click", function() {
		var deleteDialog = Ti.UI.createAlertDialog({
			title: "Delete contact " + sqlData.firstName + " " + sqlData.lastName + "?",
			buttonNames: [ "Yes", "No" ],
			cancel: 1
		});
		
		deleteDialog.addEventListener("click", function(e) {
			if(e.index != e.source.cancel) {
				// Delete record from database
				sqlFunctions.deleteData(sqlData.id);
				
				createDialog("Success", "Contact was deleted");
				
				// Reload data in table view
				var data = sqlFunctions.readData();
				displayData.getTableView(data);
				
				editWindow.close();
			}
		});
		deleteDialog.show();		
	});
	
	cancelButton.addEventListener("click", function() {
		editWindow.close();
	});
	
	// Add window elements
	topView.add(addLabel);
	topView.add(requiredFieldsLabel);

	createEditInputRow("First name *", "First name", sqlData.firstName, Ti.UI.KEYBOARD_DEFAULT, true);
	createEditInputRow("Last name", "Last name", sqlData.lastName, Ti.UI.KEYBOARD_DEFAULT, true);
	createEditInputRow("Phone number *", "Phone number", sqlData.phone, Ti.UI.KEYBOARD_PHONE_PAD, false);
	createEditInputRow("Email address", "Email address", sqlData.email, Ti.UI.KEYBOARD_EMAIL, false);
	
	mainView.add(topView);
	mainView.add(rowView);
	
	editWindow.add(mainView);
	editWindow.add(buttonToolbar);
	
	editWindow.open();
};

//Exports
exports.createEditWin = createEditWin;
