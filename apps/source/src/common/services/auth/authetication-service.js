angular.module("zamolxian.authentication-service", [])

    .factory('AuthenticationService', function () {
        return {

            // authentication logic goes here, eventually check headers too
            authenticate: function (data) {
                var realData = JSON.parse(data);

                // check if username and password exists
                if (realData.username && realData.password) {

                    // response with status code 200 (OK) and a token
                    return [200, {token: 'abcd1234'}, {}];
                }

                // response with status code 403 (FORBIDDEN)
                return [403, {}, {}];
            },

            // token verification function. logic goes here
            verifyToken: function (headers) {

                // check if token is correct
                if (headers.Authorization === 'Basic abcd1234') {
                    // response OK
                    return [200, {data: 'example data'}, {}];
                }

                // response FORBIDDEN
                return [403, {}, {}];
            }
        };
    });