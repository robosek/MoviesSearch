define(["modules/app","services/movieHttpFacade"],function(app,movieHttpFacade){
   app.controller("movieController",["$scope","movieHttpFacade",function($scope,movieHttpFacade){
    
       $scope.search = function(title, isValid){
           
           if(isValid)
               {
                    $scope.error = false;
            movieHttpFacade.getSampleMovie(title).success(function(data){
        
        $scope.movie = data;
            if(data.Response == "False"){
                $scope.error = true;
            }
        }).error(function(error){
            $scope.error = true;
        });
                   
        }
                
       }
       
   }]);
    
});