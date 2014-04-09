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

        // Mock http backend service. Intercept URL and verify if authorization header contains token
        $httpBackend.whenGET('http://zamolxian.client/verify_token').respond(function (method, url, data, headers) {

            // perform token verification in request header
            return AuthenticationService.verifyToken(headers);
        });

        // rest of the requests should pass through
        $httpBackend.whenPOST('https://localhost:3000/oauth/token').passThrough();

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

    .controller('AppCtrl', function AppCtrl($scope, $location, $stateParams, $state, $http) {

        // commented out send get request in every API to check user token
        // test user token verification
        // send request for token verification. headers contain authorization token
//        $http.get('http://zamolxian.client/verify_token', {headers: {'Authorization': 'Basic ' + window.localStorage.userToken}})
//            .success(function(data) {
//                console.log("TOKEN SUCESS");
//                // state.go wherever user wants to
//            })
//            .error(function(data) {
//                console.log("TOKEN FAILURE");
//
//                // redirect to login page
//                $state.go('login');
//            });

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