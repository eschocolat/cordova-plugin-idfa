var exec = require("cordova/exec");
var PLUGIN_NAME = "Idfa";

module.exports = {
    getInfo: function(successCallback, errorCallback) {
        return cordova.exec(successCallback, errorCallback, PLUGIN_NAME, "getInfo", []);
    },

    requestTrackingAuthorization: function(successCallback, errorCallback) {
        return cordova.exec(successCallback, errorCallback, PLUGIN_NAME, "requestTrackingAuthorization", []);
    }
};
