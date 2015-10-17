angular.module('app').config(['$ocLazyLoadProvider', function($ocLazyLoadProvider) {
    $ocLazyLoadProvider.config({
        debug:  true,
        events: true,
        modules: [
            {
                name: 'toaster',
                files: [
                    '../bower_components/angularjs-toaster/toaster.js',
                    '../bower_components/angularjs-toaster/toaster.css'
                ]
            }
        ]
    });
}]);