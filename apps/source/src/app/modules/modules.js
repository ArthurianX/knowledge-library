angular.module('zamolxian.modules', ['ionic'])

    .config(function config($stateProvider) {
        $stateProvider
            .state('sidemenu.modules', {
                url: '/modules',
                views: {
                    'topView': {
                        controller: 'ModulesCtrl',
                        templateUrl: 'modules/modules.tpl.html'
                    }
                }
            });
    })

    .controller('ModulesCtrl', function ModulesController($scope) {

    })

;

