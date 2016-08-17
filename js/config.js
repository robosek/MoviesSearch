define(["modules/app"],function(app){
   
    app.config(['$routeProvider',function($routeProvider){
        $routeProvider.
            when("/", {
                templateUrl: "partials/movie_details.html",
                controller: "movieController"
        });
    }]);
    
});