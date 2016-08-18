define(['modules/app','controllers/movieController'],function(mocks,controller){
       
    describe("Movie controller specification",function(){
    var $scope;
    beforeEach(module("myApp"));
    beforeEach(inject( function($controller,$rootScope){
       $scope = $rootScope.$new();
       $controller("movieController",{$scope:$scope});     
    }));
                
});
});

