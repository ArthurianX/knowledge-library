angular.module('zamolxian.my_account', [
        'ui.router.state',
        'ajoslin.promise-tracker',
        'ngSanitize'
    ])

    .config(function config($stateProvider) {
        $stateProvider.state('my_account', {
            url: '/my_account',
            views: {
                "main": {
                    controller: 'AccountCtrl',
                    templateUrl: 'my_account/my_account.tpl.html'
                }
            },
            data: { pageTitle: 'Account' }
        });
    })

    .controller("AccountCtrl", function AccountCtrl($scope, promiseTracker, $sanitize) {
            $scope.userName = "George Bora";
            $scope.userMail = "gbora@pititechnologies.ro";

            $scope.contactZalmoxis = function() {
                   $scope.userName = $sanitize($scope.newUserName);
                   $scope.userMail = $sanitize($scope.newUserMail);
                  console.log($sanitize($scope.newUserName));
                  console.log($sanitize($scope.newUserMail));
                  $scope.modData = false;
            };
    });
