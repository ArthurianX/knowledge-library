angular.module('zamolxian', [
      'ngAnimate',
      'ngSanitize',
      'ivpusic.cookie',
      'templates-app',
      'templates-common',
      /*VVV PAGES VVV*/
      'ui.router.state',
      'ui.route',
      'anim-in-out',
      'zamolxian.home',
      'ngTouch',
      /*VVV Providers VVV*/
      //'zamolxian.providers',
      'hljs',
      /*VVV App Config VVV*/
      'zamolxian.config'

    ])

    .config(function myAppConfig($stateProvider, $urlRouterProvider, $locationProvider, $logProvider, $anchorScrollProvider) {
      $locationProvider.html5Mode(true).hashPrefix('!');

      $logProvider.debugEnabled(false);

      $urlRouterProvider.otherwise('/home');

      $anchorScrollProvider.disableAutoScrolling();

    })

    .run(function run($rootScope) {
      //Set body class for individual route pages.
      $rootScope.$on('$stateChangeSuccess', function (event, currentState) {
        $rootScope.getCurrentLocation = function () {
          return currentState.name + '-page';
        };
        if ($rootScope.debugStatus === true) {
          console.log('We are on the "' + currentState.name + '" page.');
        }
      });

    })

    .controller('AppCtrl', function AppCtrl($scope, $location, $stateParams) {

      $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        if (angular.isDefined(toState.data.pageTitle)) {
          $scope.pageTitle = toState.data.pageTitle + ' | Articulate Angular';
        }
      });

    })

    .controller('HeaderCtrl', function HeaderCtrl($scope) {

    })

    .controller('FooterCtrl', function FooterCtrl($scope) {


    })

;