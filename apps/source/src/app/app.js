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
        /* Listing services */
//        'listingCommunity',
//        'listingDocumentation',
//        'listingModules',
        'listingCountry',
        'zamolxian.phone-service',
        'ngTouch',
        /*VVV Providers VVV*/
        "zalmoxian.providers",
        'hljs',
        /*directives*/
        "zalmoxis.cards",
        /*VVV App Config VVV*/
        'zamolxian.config',
        /*VVV PAGES VVV*/
        'zamolxian.home',
        'zamolxian.irc',
        'zamolxian.my_account',
        'zamolxian.docs',
        'zamolxian.modules_updates',
        'zamolxian.community',
        'zamolxian.login',
        'zalmoxian.interceptors',
        'zalmoxian.interceptorCountry',
        'zalmoxian-auth-interceptor-buffer',
        'zalmoxian-auth-interceptor'

    ])

    .config(function myAppConfig($stateProvider, $urlRouterProvider, $locationProvider, $logProvider, $anchorScrollProvider) {
        $locationProvider.html5Mode(true).hashPrefix('!');

        $logProvider.debugEnabled(false);

        $urlRouterProvider.otherwise('/login');

        $anchorScrollProvider.disableAutoScrolling();

    })


    .config( function($httpProvider) {
        $httpProvider.interceptors.push('myHttpInterceptor');
    })

    .config(function($provide) {
        $provide.decorator('$httpBackend', angular.mock.e2e.$httpBackendDecorator);
    })

    // define our fake backend
    .run(function($httpBackend) {
        // do not bother server, respond with given content
        $httpBackend.whenGET('premium-content-zalmoxian.html').respond(401, "I can't let you do that Dave", {header: 'one'});
        // l
        $httpBackend.whenJSONP().passThrough();
        // For everything else, don't mock
        $httpBackend.whenGET(/^\w+.*/).passThrough();
        $httpBackend.whenPOST(/^\w+.*/).passThrough();
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