angular.module('zamolxian.login', [
    'ui.router.state',
    'facebook'
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

    .controller("LoginCtrl", function LoginCtrl($scope, $http, $state, $facebook) {

        $facebook.getLoginStatus().then(function (response) {

                if (response.status === "connected") {
                    $scope.isFbLoged = true;
                } else {
                    $scope.isFbLoged = false;
                }
            }
        );

        $scope.loginUser = function () {
            var userToken = {};
            userToken.userName = $scope.loginUserName;
            userToken.password = $scope.loginPassword;
            userToken.secret = 123;

            localStorage.setItem('userToken', JSON.stringify(userToken));

//            $http({
//                url: "/api/login",
//                method: "POST",
//                data: {"userName":userToken.userName, "password": userToken.password, "static": "static"}
//            }).success(function(data, status, headers, config) {
//                localStorage.setItem('userToken', JSON.stringify(data.token));
//                console.log("login POST succesfully set in local storage.");
//                $state.go('home');
//            }).error(function(data, status, headers, config) {
//                console.log("could not post to login service");
//                $scope.showError = true;
//            });


            $http.post('https://zamolxian.arthur:3000/oauth/token',
                {
                    grant_type: 'password',
                    username: 'bob',
                    password: 'secret',
                    scope: 'offline_access'
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: 'Basic YWJjMTIzOnNzaC1zZWNyZXQ=',
                        Accept: 'application/json'
                    }
                }
            ).success(function (data, status, headers, config) {
                    localStorage.setItem('userToken', JSON.stringify(data.access_token));
                    console.log("login POST succesfully set in local storage.");
                    $state.go('home');
                }).error(function (data, status, headers, config) {
                    console.log("could not post to login service");
                    $scope.showError = true;
                });

//            $http.post("https://zamolxian.arthur:3000/oauth/token",  { grant_type: "password", username: "bob", password: "secret", scope: "offline_access"}, {headers: {"Authorization": "Basic YWJjMTIzOnNzaC1zZWNyZXQ="}}).success(function (data, status, headers, config) {
//                localStorage.setItem('userToken', JSON.stringify(data.access_token));
//                console.log("login POST succesfully set in local storage.");
//                $state.go('home');
//            }).error(function (data, status, headers, config) {
//                console.log("could not post to login service");
//                $scope.showError = true;
//            });

            //$http.post('https://zamolxian.arthur/zamolxian.client/verify_token', {},{headers: {'Authorization': 'Basic ' + 'bla bla'}});


        };

        $scope.callServer = function () {
            console.log("calling server");
            var httpRequest;
            if (window.XMLHttpRequest) { // Mozilla, Safari, ...
                httpRequest = new XMLHttpRequest();
            } else if (window.ActiveXObject) { // IE 8 and older
                httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
            }

            httpRequest.onreadystatechange = function (data) {
                console.log(data);
            };

            httpRequest.open('POST', 'https://zamolxian.arthur:3000/oauth/token', true);
            httpRequest.withCredentials = true;
            httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            httpRequest.setRequestHeader('Authorization', 'Basic YWJjMTIzOnNzaC1zZWNyZXQ=');
            httpRequest.setRequestHeader('Accept', 'application/json');
            httpRequest.send('grant_type=password&username=bob&password=secret&scope=offline_access');
        };

        $scope.loginFB = function () {


            $facebook.getLoginStatus().then(
                function (response) {
                    if (response.status !== 'connected') {
                        $facebook.login().then(function (response) {
                            console.log(response);
                            $scope.isFbLoged = true;
                            $scope.getFriendList();

                        });

                    }
                }
            );

        };

        $scope.logoutFB = function () {
            console.log("logging out");
            $facebook.logout().then(
                $facebook.getLoginStatus().then(function (response) {
                    $scope.isFbLoged = false;
                })
            );
        };

        $scope.getFriendList = function () {
            console.log("Getting friends");
            $facebook.api('/1033643149/friendlists').then( function (response) {
                console.log(response);
            });
            $scope.friendsList = [];
        }

    });
