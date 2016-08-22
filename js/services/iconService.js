/**
 * Created by robert on 21.08.16.
 */
define(['modules/app'],function (app) {
    app.factory('iconService',function () {

        var movieIcon = "http://cliparts.co/cliparts/gce/opL/gceopLa9i.png";
        var seriesIcon = "https://cdn2.iconfinder.com/data/icons/picons-basic-1/57/basic1-128_tv_television-512.png";
        var gameIcon = "https://cdn3.iconfinder.com/data/icons/black-easy/512/535112-game_512x512.png";

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