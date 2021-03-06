// Karma configuration
// Generated on Wed Aug 24 2016 08:35:50 GMT+0200 (Środkowoeuropejski czas letni)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'requirejs'],


    // list of files / patterns to load in the browser
    files: [
      'spec/test-main.js',
	  {pattern: 'js/lib/angular/angular.js', included: false},
	  {pattern: 'js/lib/angular-loading-bar/src/loading-bar.js', included: false},
	  {pattern: 'js/lib/angucomplete-alt/angucomplete-alt.js', included: false},
	  {pattern: 'js/lib/angular-route/angular-route.js', included: false},
	  {pattern: 'js/lib/angular-mocks/angular-mocks.js', included: false},
	  {pattern: 'js/modules/app.js', included: false},
	  {pattern: 'js/services/*.js', included: false},
	  {pattern: 'js/directives/*.js', included: false},
      {pattern: 'js/controllers/*.js', included: false},
      {pattern: 'js/config.js', included: false},
      {pattern: 'spec/controllers_specs/*.js', included: false},
      {pattern: 'spec/services_specs/*.js', included: false},
      {pattern: 'spec/hello_test.spec.js', included: false}
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
