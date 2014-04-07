angular.module('zamolxian', [
    'ngAnimate',
    'ngSanitize',
    'ivpusic.cookie',
    'templates-app',
    'templates-common',
    'ui.router.state',
    'ui.route',
    'anim-in-out',
    'ui.bootstrap',
    'ngTouch',
    // for mocking httpBackend
    'ngMockE2E',
    /*VVV Providers VVV*/
    'zamolxian.providers.factory',
    'hljs',
    /*  Services */
    'zamolxian.authentication-service',
    /*VVV App Config VVV*/
    'zamolxian.config',
    /* Directives */
    'zamolxian.directives',
    /*VVV PAGES VVV*/
    'zamolxian.home',
    'zamolxian.home-second',
    'zamolxian.about',
    'zamolxian.books',
    'zamolxian.reading-list',
    'zamolxian.tips-tricks',
    'zamolxian.tutorials',
    'zamolxian.settings',
    'zamolxian.irc',
    'zamolxian.my_account',
    'zamolxian.docs',
    'zamolxian.modules_updates',
    'zamolxian.community',
    'zamolxian.login'
])

    .config(function myAppConfig($stateProvider, $urlRouterProvider, $locationProvider, $logProvider, $anchorScrollProvider) {
        $locationProvider.html5Mode(true).hashPrefix('!');

        $logProvider.debugEnabled(false);

        $urlRouterProvider.otherwise('/home');

        $anchorScrollProvider.disableAutoScrolling();

    })

    .run(function run($rootScope, $httpBackend, AuthenticationService) {

        // Mock http backend service. Intercept URL and respond with a status (and a token)
        $httpBackend.whenPOST('http://zamolxian.client/login').respond(function (method, url, data, headers) {

            // perform authentication logic, return result
            return AuthenticationService.authenticate(data);
        });

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

    .controller('AppCtrl', function AppCtrl($scope, $location, $stateParams, $state) {

        // Check if user is logged in. Redirect to login page if not.
        if (!window.localStorage.userToken) {
            console.log("USER NOT LOGGED IN!");
            $state.go('login');
        }

        $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
            if (angular.isDefined(toState.data.pageTitle)) {
                $scope.pageTitle = toState.data.pageTitle + ' | Articulate Angular';
            }
        });

    })

    .controller('HeaderCtrl', function HeaderCtrl($scope) {

    })


    .controller('FooterCtrl', function FooterCtrl($scope) {
        // github provider here

    })
;