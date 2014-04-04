angular.module('zalmoxian-auth-interceptor', ['zalmoxian-auth-interceptor-buffer'])

    .factory('authService', ['$rootScope','httpBuffer', function($rootScope, httpBuffer) {
        return {
            /**
             * Call this function to indicate that authentication was successfull and trigger a
             * retry of all deferred requests.
             * @name loginConfirmed
             * @param data an optional argument to pass on to $broadcast which may be useful for
             * example if you need to pass through details of the user that was logged in
             */
            loginConfirmed: function(data, configUpdater) {
                var updater = configUpdater || function(config) {return config;};
                $rootScope.$broadcast('event:auth-loginConfirmed', data);
                httpBuffer.retryAll(updater);
            },

            /**
             * Call this function to indicate that authentication should not proceed.
             * All deferred requests will be abandoned or rejected (if reason is provided).
             * @param data an optional argument to pass on to $broadcast.
             * @param reason if provided, the requests are rejected; abandoned otherwise.
             */
            loginCancelled: function(data, reason) {
                httpBuffer.rejectAll(reason);
                $rootScope.$broadcast('event:auth-loginCancelled', data);
            }
        };
    }])

/**
 * $http interceptor.
 * On 401 response (without 'ignoreAuthModule' option) stores the request
 * and broadcasts 'event:angular-auth-loginRequired'.
 */
    .config(['$httpProvider', function($httpProvider) {
        $httpProvider.interceptors.push(['$rootScope', '$q', 'httpBuffer', function($rootScope, $q, httpBuffer) {
            return {
                responseError: function(rejection) {
                    if (rejection.status === 401 && !rejection.config.ignoreAuthModule) {
                        var deferred = $q.defer();
                        httpBuffer.append(rejection.config, deferred);
                        console.log("authentification is required");
                        $rootScope.$broadcast('event:auth-loginRequired', rejection);
                        return deferred.promise;
                    }
                    // otherwise, default behaviour
                    return $q.reject(rejection);
                }
            };
        }]);
    }]);

