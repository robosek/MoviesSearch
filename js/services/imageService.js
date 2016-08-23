define(['modules/app'], function (app) {
    app.factory('imageService', function () {

        var _changeImageToNotFound = function (objArray, notFoundText,notFoundPicture) {
                if (objArray && objArray!==undefined && objArray.Search) {
                    for (var i = 0; i < objArray.Search.length; i++) {
                        if (objArray.Search[i].Poster === notFoundText) {
                            objArray.Search[i].Poster = notFoundPicture;
                        }
                    }
                }
                return objArray;
        };
        return {
            changeImageToNotFound : _changeImageToNotFound
        }
    });

});