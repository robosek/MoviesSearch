define(["modules/app"],function(app){
   
    app.directive("alert",function(){
       
        return{
          restrict:"E",
            scope:{
                topic:"@topic",
                content:"@content"
            },
            replace:true,
            templateUrl:"templates/alert.html"
            
            
        };
        
    });
    
});