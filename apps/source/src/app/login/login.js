angular.module('zamolxian.login', [
    'ui.router.state'
])

    .config(function config($stateProvider) {
        $stateProvider.state('login', {
            url: '/login',
            views: {
                "main": {
                    controller: 'LoginCtrl',
                    templateUrl: 'login/login.tpl.html'
                }
            },
            data: { pageTitle: 'Login' }
        });
    })

    .controller("LoginCtrl", function LoginCtrl($scope, $http, $state) {
        $scope.login = {};
        $scope.login.username = {};
        $scope.login.password = {};

        /**
         * Login function. Sends a POST request to the LoginService backend.
         */
        $scope.login = function() {
            console.log('In login function');

            // POST request to the httpBackend.
            $http.post('http://zamolxian.client/login', JSON.stringify({username: $scope.login.username, password: $scope.login.password}))
                .success(function(data) {
                    // store token from data in localStorage on success
                    // redirect to home page
                    console.log('successful login');
                    window.localStorage.setItem('userToken', data.token);
                    $state.go('home');
                })
                .error(function(data) {
                    // show error message
                    console.log('error on login');
                    $state.go('login');
                });
        };
    });