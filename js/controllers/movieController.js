define(["modules/app", "services/movieHttpFacade"], function (app, movieHttpFacade) {
    app.controller("movieController", ["$scope", "movieHttpFacade", function ($scope, movieHttpFacade) {

        var noImageAddress = "http://www.novelupdates.com/img/noimagefound.jpg";

        $scope.search = function (title, isValid) {

            if (isValid) {
                delete $scope.movie;
                $scope.error = false;
                movieHttpFacade.getSampleMovie(title).success(function (data) {
                    
                    if (data.Response == "False") {
                        $scope.error = true;
                    }
                    else {
                        $scope.movie = data;
                        $scope.image = (data.Poster === "N/A" ? noImageAddress : data.Poster);
                    }


                }).error(function (error) {
                    $scope.error = true;
                });

            }
        }

    }]);

});