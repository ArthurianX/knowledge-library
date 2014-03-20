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

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider

            // setup an abstract state for the tabs directive
            .state('tab', {
                url: "/tab",
                abstract: true,
                templateUrl: "templates/tabs.tpl.html"
            })

            // the pet tab has its own child nav-view and history
            .state('tab.pet-index', {
                url: '/pets',
                views: {
                    'pets-tab': {
                        templateUrl: 'templates/pet-index.tpl.html',
                        controller: 'PetIndexCtrl'
                    }
                }
            })

            .state('tab.pet-detail', {
                url: '/pet/:petId',
                views: {
                    'pets-tab': {
                        templateUrl: 'templates/pet-detail.tpl.html',
                        controller: 'PetDetailCtrl'
                    }
                }
            })

            .state('tab.adopt', {
                url: '/adopt',
                views: {
                    'adopt-tab': {
                        templateUrl: 'templates/adopt.tpl.html'
                    }
                }
            })

            .state('tab.about', {
                url: '/about',
                views: {
                    'about-tab': {
                        templateUrl: 'templates/about.tpl.html'
                    }
                }
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/tab/home');

    });

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

    /*.controller('AppCtrl', function AppCtrl($scope, $location, $stateParams) {

        $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
            if (angular.isDefined(toState.data.pageTitle)) {
                $scope.pageTitle = toState.data.pageTitle + ' | Articulate Angular';
            }
        });

    })
;*/