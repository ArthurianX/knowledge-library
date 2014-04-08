angular.module("zamolxian.authentication-service", [])

    .factory('AuthenticationService', function () {
        return {

            // authentication logic goes here, eventually check headers too
            authenticate: function (data) {
                var realData = JSON.parse(data);

                // check if username and password exists
                if (realData.username && realData.password) {

                    // generate token
                    var token = 'abcd1234';

                    // encode token in Base64
                    var tokenBase64 = btoa(token);

                    // response with status code 200 (OK) and a token
                    return [200, {token: tokenBase64}, {}];
                }

                // response with status code 403 (FORBIDDEN)
                return [403, {}, {}];
            },

            // token verification function. logic goes here
            verifyToken: function (headers) {

                // get token from Authorization header
                var auth = headers.Authorization;
                var tokenBase64 = auth.substr(auth.indexOf('Basic') + 'Basic'.length + 1);

                var token;
                try {

                    // decode token from Base64
                    token = atob(tokenBase64);
                } catch (InvalidCharacterError) {
                    //handle error if token is not formatted correctly
                }

                // check if token is correct
                if (token === 'abcd1234') {

                    // response OK
                    return [200, {data: 'example data'}, {}];
                }

                // response FORBIDDEN
                return [403, {}, {}];
            }
        };
    });