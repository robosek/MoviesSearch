define(["modules/app"],function(app){
    app.directive("navbar",function(){
       
        return{
          restrict: "E",
            scope:{
                title:"@title"
            },
            replace:true,
            templateUrl:"templates/navbar-simple.html"
            
        };
        
    });
    
});