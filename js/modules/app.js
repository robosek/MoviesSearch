define(["angular","loadingBar","route"],function(angular){
   var app = angular.module("myApp",["angular-loading-bar","ngRoute"]);
    app.init = function(){
      angular.bootstrap(document,["myApp"]);  
    };
    return app;
});