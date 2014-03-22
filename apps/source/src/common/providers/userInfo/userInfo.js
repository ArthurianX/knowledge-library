angular.module('zamolxian.userinfo', [])
/**
 * This provider will read the localStorage settings and provide us from the get go with user settings and everything else if present, if not
 * populate the localStorage with the default .config data.
 * Also an API to handle user info, To Be Evolved.
 **/

    .provider('userInfo', function UserInfoProvider() {
        this.$get = angular.noop;
    });
