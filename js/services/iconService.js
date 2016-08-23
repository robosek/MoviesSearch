/**
 * Created by robert on 21.08.16.
 */
define(['modules/app'],function (app) {
    app.factory('iconService',function () {

        var movieIcon = "http://image.flaticon.com/icons/svg/149/149647.svg";
        var seriesIcon = "http://image.flaticon.com/icons/svg/167/167018.svg";
        var gameIcon = "http://image.flaticon.com/icons/svg/181/181515.svg";

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