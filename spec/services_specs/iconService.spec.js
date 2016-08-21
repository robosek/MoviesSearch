/**
 * Created by robert on 21.08.16.
 */
define(['modules/app','services/iconService'],function(app,iconService){

    var iconService;

    describe("Icon service specification",function() {
        beforeEach(module("myApp"));
        beforeEach(inject( function(_iconService_){
            iconService = _iconService_;

        }));

        var movieIcon = "http://cliparts.co/cliparts/gce/opL/gceopLa9i.png";
        var seriesIcon = "https://cdn2.iconfinder.com/data/icons/picons-basic-1/57/basic1-128_tv_television-512.png";

        it("Should return movies icon when type is movie",function(){
           var iconUrl =  iconService.getIcon("movie");
            expect(iconUrl).toBe(movieIcon)
        });

        it("Should return series icon when type is series",function(){
            var iconUrl =  iconService.getIcon("series");
            expect(iconUrl).toBe(seriesIcon)
        });

        it("Should return series icon when type is unknown",function(){
            var iconUrl =  iconService.getIcon("unknownType");
            expect(iconUrl).toBe(seriesIcon)
        });

    });


});
