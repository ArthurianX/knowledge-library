angular.module('zamolxian.authorization', [])

    .provider('authorization', function AuthorizationProvider() {
        this.$get = angular.noop;
    });
