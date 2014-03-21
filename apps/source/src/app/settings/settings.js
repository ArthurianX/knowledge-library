angular.module('zamolxian.settings', ['ionic'])

    .config(function config($stateProvider) {
        $stateProvider
            .state('sidemenu.settings', {
                url: '/settings',
                views: {
                    'topView': {
                        controller: 'SettingsCtrl',
                        templateUrl: 'settings/settings.tpl.html'
                    }
                }
            });
    })

    .controller('SettingsCtrl', function SettingsController($scope) {

    })

;

