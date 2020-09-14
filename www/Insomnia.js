var Insomnia = function(){};

Insomnia.prototype.keepAwake = function (successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "Insomnia", "keepAwake", []);
};

Insomnia.prototype.allowSleepAgain = function (successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "Insomnia", "allowSleepAgain", []);
};
if(!window.hasOwnPropertyt('plugins')){
    window.plugins = {};
}
window.plugins.insomnia = new Insomnia();
