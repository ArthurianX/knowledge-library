angular.module("zamolxian.authentication-service", [])

    .factory('AuthenticationService', function () {
        return {

            // authentication logic goes here, eventually check headers too
            authenticate: function (data) {
                var realData = JSON.parse(data);
                console.log('Intercepted POST request. Data below');
                console.log(realData.password);

                // check if username and password exists
                if (realData.username && realData.password) {

                    // response with status code 200 (OK) and a token
                    return [200, {token: 'abcd1234'}, {}];
                }

                // response with status code 403 (FORBIDDEN)
                return [403, {}, {}];
            }
        };
    });