define(["modules/app", "services/movieHttpFacade","services/iconService","services/imageService"], function (app, movieHttpFacade) {
    app.controller("movieController", ["$scope", "movieHttpFacade","iconService","imageService",
        function ($scope, movieHttpFacade, iconService,imageService) {
            var noImageAddress = "images/noimagefound.jpg";

            $scope.changeImage = function (search) {
                imageService.changeImageToNotFound(search, "N/A", noImageAddress);
                return search;
            }
                
            $scope.search = function (id, isValid) {
                if (isValid) {
                    delete $scope.movie;
                    $scope.error = false;
                    movieHttpFacade.getMovieById(id).success(function (data) {
                    
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
            $scope.$broadcast('angucomplete-alt:clearInput');
        }

    }]);

});