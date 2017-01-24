sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel"
], function(Controller, MessageToast, JSONModel, ResourceModel) {
	"use strict";

	return Controller.extend("sap.ui.bootcampWebapp.controller.App", {
		onInit : function (){
			
			var oData = {
				field : {
					username : "Username"
				}
			};
			
			var oModel = new JSONModel(oData);
			this.getView().setModel(oModel);
			
			var i18nModel = new ResourceModel({
				bundleName: "sap.ui.bootcampWebapp.i18n.i18n"
			});
			this.getView().setModel(i18nModel,"i18n");
			
		},
		
		
		
		
		
		onLoginPress: function (){
			
			var oBundle = this.getView().getModel("i18n").getResourceBundle();
			var sRecipient = this.getView().getModel().getProperty("/field/username");
			var sMsg = oBundle.getText("helloMsg",[sRecipient]);
			
			MessageToast.show(sMsg);
			
			// var oTextField = this.getView().byId("username").getValue();
			// var oLenField = oTextField.length;
			// var oTextPass = this.getView().byId("password").getValue();
			// var oLenPass = oTextPass.length;
			
			// if (oLenField === 0 && oLenPass === 0) {
			// MessageToast.show("Please enter username and password!" + sMsg);	
			// }
			// else if (oLenField === 0 || oLenPass === 0) {
			// MessageToast.show("Please enter username or password!");
			// }
			// else if (oLenField < 5 || oLenField > 9 ) {
			// MessageToast.show("Username must be 6 to 8 characters ONLY!");
			// }
			// else if (oLenPass < 6 || oLenPass > 11 ) {
			// MessageToast.show("Password must be 7 to 10 characters ONLY!");
			// }
			// else if (oTextField === "USERNAME" && oTextPass === "PASSWORD") {
			// MessageToast.show("Login Successful! " + "Hello " + oTextField);
			// }
			// else if (oTextField !== "USERNAME" || oTextPass !== "PASSWORD") {
			// MessageToast.show("Please enter correct username or password!");
			// }
			// else {
			// MessageToast.show("Syntax Error!");
			// }
		}
		
		
	});
	
});