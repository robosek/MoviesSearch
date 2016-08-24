var allTestFiles = []
var TEST_REGEXP = /(spec|test)\.js$/i

// Get a list of all the test files to include
Object.keys(window.__karma__.files).forEach(function (file) {
  if (TEST_REGEXP.test(file)) {
    var normalizedTestModule = file.replace(/^\/base\/|\.js$/g, '')
    allTestFiles.push(normalizedTestModule)
  }
})

require.config({
  // Karma serves files under /base, which is the basePath from your config file
  baseUrl: '/base',
    paths:{
      jquery:"js/lib/jquery/dist/jquery",
       bootstrap:"js/lib/bootstrap/dist/js/bootstrap",
       angular:"js/lib/angular/angular",
       loadingBar:"js/lib/angular-loading-bar/src/loading-bar",
       route:"js/lib/angular-route/angular-route",
       mocks:"js/lib/angular-mocks/angular-mocks",
       config:"js/config",
       angucomplete:"js/lib/angucomplete-alt/angucomplete-alt",
      'modules/app':'js/modules/app',
      'services/movieHttpFacade':'js/services/movieHttpFacade',
      'services/iconService': 'js/services/iconService',
      'services/imageService':'js/services/imageService',
      'controllers/movieController':"js/controllers/movieController"
    },
    shim:{
      angular:{
          exports:'angular'
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
    },
  // dynamically load all test files
   deps: allTestFiles,
  // we have to kickoff jasmine, as it is asynchronous
   callback: window.__karma__.start
})

