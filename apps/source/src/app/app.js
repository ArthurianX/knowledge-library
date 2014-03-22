angular.module('zamolxian', [
        'templates-app',
        'templates-common',
        /*VVV App Config VVV*/
        'zamolxian.config',
        /*VVV Ionic VVV*/
        'ionic',
        /*VVV Providers VVV*/
        'zamolxian.authorization',
        'zamolxian.userinfo',
        /*VVV Factories VVV*/
        'zamolxian.globalnotification',
        'zamolxian.usernotification',
        'zamolxian.listingfactory',
        /*VVV Services VVV*/
        'zamolxian.achievements',
        'zamolxian.coaching',
        'zamolxian.context',
        'zamolxian.listing',
        'zamolxian.notification',
        'zamolxian.preferences',
        'zamolxian.search',
        'zamolxian.statistics',
        /*VVV Directives VVV*/
        //
        /*VVV Pages VVV*/
        'zamolxian.home',
        'zamolxian.docs',
        'zamolxian.tutorials',
        'zamolxian.community',
        'zamolxian.tips',
        'zamolxian.modules',
        'zamolxian.reading',
        'zamolxian.books',
        'zamolxian.irc',
        'zamolxian.settings',
        'zamolxian.myaccount'

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