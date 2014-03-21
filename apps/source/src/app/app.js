angular.module('zamolxian', [
        'templates-app',
        'templates-common',
        /*VVV App Config VVV*/
        'zamolxian.config',
        'ionic',
        'zamolxian.services',
        'zamolxian.controllers',
        'zamolxian.home'

    ])

    .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider
            // setup an abstract state for the sidemenu directive
            .state('sidemenu', {
                url: "/sidemenu",
                abstract: true,
                templateUrl: "templates/sidemenu.tpl.html"
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/sidemenu/home');

    })

    /*.config(function myAppConfig($stateProvider, $urlRouterProvider, $locationProvider, $logProvider, $anchorScrollProvider) {
        $locationProvider.html5Mode(true).hashPrefix('!');

        $logProvider.debugEnabled(false);

        $urlRouterProvider.otherwise('/home');

        $anchorScrollProvider.disableAutoScrolling();

    })*/

    /*.run(function run($rootScope) {
        //Set body class for individual route pages.
        $rootScope.$on('$stateChangeSuccess', function (event, currentState) {
            $rootScope.getCurrentLocation = function () {
                return currentState.name + '-page';
            };
            if ($rootScope.debugStatus === true) {
                console.log('We are on the "' + currentState.name + '" page.');
            }
        });

    })*/

    .controller('AppCtrl', function AppCtrl($scope, $location, $stateParams) {
        //Get active menu
        $scope.isItemActive = function(item) {
            return $location.path().indexOf(item) > -1;
        };

        $scope.greeting = 'Welcome';



    })
;