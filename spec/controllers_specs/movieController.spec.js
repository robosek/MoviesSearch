define(['modules/app','controllers/movieController','services/iconService','services/imageService'],function(mocks,controller,iconService,imageService){
       
    describe("Movie controller specification",function(){
    var $scope;
    beforeEach(module("myApp"));
    beforeEach(inject( function($controller,$rootScope){
       $scope = $rootScope.$new();
       $controller("movieController",{$scope:$scope});     
    }));
                
});
});

