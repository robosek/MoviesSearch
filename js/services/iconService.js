/**
 * Created by robert on 21.08.16.
 */
define(['modules/app'],function (app) {
    app.factory('iconService',function () {

        var movieIcon = "images/movie.svg";
        var seriesIcon = "images/series.svg";
        var gameIcon = "images/game.svg";

        var _getIcon = function (kind) {
            switch(kind){
                case "movie":
                    return movieIcon;
                case "series":
                    return seriesIcon;
                case "game":
                    return gameIcon;
                default:
                    return seriesIcon;
            }
        }

        return {
            getIcon :_getIcon
        }
    });
})