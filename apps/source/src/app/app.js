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
        /*VVV Providers VVV*/
        'zamolxian.providers.factory',
        'hljs',
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
        'zamolxian.login',
        // for mocking httpBackend
        'ngMockE2E'
    ])

    .config(function myAppConfig($stateProvider, $urlRouterProvider, $locationProvider, $logProvider, $anchorScrollProvider) {
        $locationProvider.html5Mode(true).hashPrefix('!');

        $logProvider.debugEnabled(false);

        $urlRouterProvider.otherwise('/home');

        $anchorScrollProvider.disableAutoScrolling();

    })

    .run(function run($rootScope, $httpBackend) {

        // Mock http backend service. Intercept URL and respond with a status (and a token)
        $httpBackend.whenPOST('http://zamolxian.client/login').respond(function(method, url, data, headers) {
            var realData = JSON.parse(data);
            console.log('Intercepted POST request. Data below');
            console.log(realData.password);
            if (realData.username && realData.password) {
                return [200, {token: 'abcd1234'}, {}];
            }
            return [400, {}, {}];
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