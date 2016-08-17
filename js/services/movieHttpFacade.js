define(["modules/app"],function(app){
    app.factory("movieHttpFacade",["$http",function($http){
        var _getSampleMovie = function(title){
            return $http.get("http://www.omdbapi.com/?t="+title+"&y=&plot=full&r=json")
        };
        
        return{
            getSampleMovie: _getSampleMovie
        };
        
    }]);
    
})