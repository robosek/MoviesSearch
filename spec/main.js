require.config({
   
    paths:{
        'jasmine':'lib/jasmine-core/lib/jasmine-core/jasmine',
        'jasmine-html':'lib/jasmine-core/lib/jasmine-core/jasmine-html',
        'jasmine-boot':'lib/jasmine-core/lib/jasmine-core/boot',
        angular:"../js/lib/angular/angular",
        mocks:"../js/lib/angular-mocks/angular-mocks",
      loadingBar:"../js/lib/angular-loading-bar/src/loading-bar",
       route:"../js/lib/angular-route/angular-route",
        'modules/app':'../js/modules/app',
        'services/movieHttpFacade':'../js/services/movieHttpFacade',
        'services/iconService': '../js/services/iconService',
        'services/imageService':'../js/services/imageService',
        'controllers/movieController':"../js/controllers/movieController",
        angucomplete:"../js/lib/angucomplete-alt/angucomplete-alt"
        
    },
    shim:{
        angular:{
            exports:'angular'
        },
        'jasmine-html':{
            deps:['jasmine']
        },
        'jasmine-boot':{
            deps:['jasmine','jasmine-html']       
        },
        mocks:{
            deps:['angular']
        },
        route:{
            deps:['angular']
        },
        loadingBar:{
            deps:['angular']
        },
        'modules/app':{
            deps:['angular','mocks','loadingBar','route']
        },
        angucomplete:{
            deps:['angular']
        }
    }
});


require(['jasmine-boot'],function(boot){
   
    require(['services_specs/movieHttpFacade.spec','services_specs/iconService.spec',
        'controllers_specs/movieController.spec','services_specs/imageService.spec'],function(test){
        window.onload();
    });
    
});

