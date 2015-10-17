angular.module('app')
    .run(['$rootScope', '$state', '$stateParams',
        function ($rootScope,   $state,   $stateParams) {
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
        }
    ]).config(['$stateProvider', '$urlRouterProvider',
        function ($stateProvider,   $urlRouterProvider) {
            $urlRouterProvider
              .otherwise('/app/ignite/rest');
            $stateProvider
              .state('app', {
                  abstract: true,
                  url: '/app',
                  templateUrl: 'modules/layout/master.html',
                  resolve: {
                      deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                          return $ocLazyLoad.load([
                              'modules/app/app-controller.js',
                              'modules/layout/page-sizer-directive.js',
                              'modules/layout/header-controller.js',
                              'toaster'
                          ]);
                      }]
                  }
              })
              .state('app.gen', {
                  abstract: true,
                  url: '/gen',
                  templateUrl: 'modules/generators/master.html'
              })
              .state('app.ignite', {
                  abstract: true,
                  url: '/ignite',
                  templateUrl: 'modules/ignite/master.html'
              })
              .state('app.gen.metastock', {
                  url: '/metastock',
                  templateUrl: '../generators/metastock/metastock.html',
                  resolve: {
                      deps: ['$ocLazyLoad',
                          function( $ocLazyLoad){
                              return $ocLazyLoad.load([
                                  'modules/generators/metastock/metastock-service.js',
                                  'modules/generators/metastock/metastock-controller.js'
                              ]);
                          }]
                  }
              })
              .state('app.ignite.rest', {
                  url: '/rest',
                  templateUrl: 'modules/ignite/rest/default.html',
                  resolve: {
                      deps: ['$ocLazyLoad',
                          function( $ocLazyLoad){
                              return $ocLazyLoad.load([
                                  'modules/ignite/rest/rest-service.js',
                                  'modules/ignite/rest/rest-controller.js',
                                  'modules/ignite/topology/topology-controller.js',
                                  'modules/ignite/cache/cache-controller.js'
                              ]);
                          }]
                  }
              });

        }
    ]
);
