angular.module('zamolxian.irc', [
    'ui.router.state'
])


.config(function config($stateProvider) {
        $stateProvider.state('irc', {
            url: '/irc',
            views: {
                "main": {
                    controller: 'IrcCtrl',
                    templateUrl: 'irc/irc.tpl.html'
                }
            },
            data: { pageTitle: 'Irc' }
        });
    })

.controller("IrcCtrl", function IrcCtrl ($scope,$http) {
        console.log("IRC controller has been loaded");

        $scope.showThePremium = function () {
            $http.get("premium-content-zalmoxian.html");
        };


        $scope.$on('event:auth-loginRequired', function(e, rejection) {
            $scope.loginReq = true;
        });

        $scope.$on('event:auth-loginConfirmed', function() {
            $scope.loginReq = false;
        });

        $scope.$on('event:auth-login-failed', function(e, status) {
            var error = "Login failed.";
            if (status == 401) {
                error = "Invalid Username or Password.";
            }
            $scope.message = error;
        });

        $scope.$on('event:auth-logout-complete', function() {

        });
    });