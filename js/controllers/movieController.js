define(["modules/app", "services/movieHttpFacade","services/iconService"], function (app, movieHttpFacade) {
    app.controller("movieController", ["$scope", "movieHttpFacade","iconService",
        function ($scope, movieHttpFacade,iconService) {

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
                        $scope.icon = iconService.getIcon(data.Type);

                    }


                }).error(function (error) {
                    $scope.error = true;
                });

            }
        }

    }]);

});