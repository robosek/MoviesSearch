define(["angular","loadingBar","route","angucomplete"],function(angular){
   var app = angular.module("myApp",["angular-loading-bar","ngRoute","angucomplete-alt"]);
    app.init = function(){
      angular.bootstrap(document,["myApp"]);  
    };
    return app;
});