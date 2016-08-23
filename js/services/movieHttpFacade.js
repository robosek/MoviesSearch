define(["modules/app"],function(app){
    app.factory("movieHttpFacade",["$http",function($http){
        var _getSampleMovie = function(title){
            return $http.get("https://www.omdbapi.com/?t="+title+"&y=&plot=full&r=json")
        };

        var _getMovieById = function (id) {
            return $http.get("https://www.omdbapi.com/?i="+id+"&y=&plot=full&r=json")
        }
        
        return{
            getSampleMovie: _getSampleMovie,
            getMovieById : _getMovieById
        };
        
    }]);
    
})