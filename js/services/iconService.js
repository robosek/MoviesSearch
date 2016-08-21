/**
 * Created by robert on 21.08.16.
 */
define(['modules/app'],function (app) {
    app.factory('iconService',function () {

        var movieIcon = "http://cliparts.co/cliparts/gce/opL/gceopLa9i.png";
        var seriesIcon = "https://cdn2.iconfinder.com/data/icons/picons-basic-1/57/basic1-128_tv_television-512.png";

        var _getIcon = function (kind) {
            return kind === "movie" ?  movieIcon: seriesIcon;
        }

        return {
            getIcon :_getIcon
        }
    });
})