define(['modules/app','services/movieHttpFacade'],function(mocks,service){
       
    describe("Http facade specification",function(){
    var movieHttpFacade, $httpBackend;
    beforeEach(module("myApp"));
        
    beforeEach(inject( function(_movieHttpFacade_, _$httpBackend_){
       movieHttpFacade = _movieHttpFacade_;
        $httpBackend = _$httpBackend_;
   
    }));
        
        
    it("Should get info about Titanic movie",function(){
        $httpBackend.whenGET("http://www.omdbapi.com/?t=Titanic&y=&plot=full&r=json").respond(function(method,url,data,headers){
           
            return [200,"{\"Title\":\"Titanic\"}",{}]
        });
        movieHttpFacade.getSampleMovie('Titanic').success(function(data,status){
            expect(data.Title).toBe('Titanic');
            expect(status).toBe(200);
        });
       $httpBackend.flush();
    });
        
    it("Try to get non-existent movie, shoud responde with not found error",function(){
        $httpBackend.whenGET("http://www.omdbapi.com/?t=Blablablaxasxasbla&y=&plot=full&r=json").respond(function(method,url,data,headers){
           
            return [404,"{\"Response\":\"False\"}",{}]
        });
        movieHttpFacade.getSampleMovie('Blablablaxasxasbla').error(function(data,status){
            expect(data.Response).toBe('False');
            expect(status).toBe(404);
        });
       $httpBackend.flush();
    }); 
  
});

});