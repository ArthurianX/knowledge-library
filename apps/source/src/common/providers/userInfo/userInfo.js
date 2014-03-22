angular.module('zamolxian.userinfo', [])

    .provider('userInfo', function UserInfoProvider() {
        this.$get = angular.noop;
    });
