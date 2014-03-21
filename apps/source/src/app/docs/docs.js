angular.module('zamolxian.docs', ['ionic'])

    .config(function config($stateProvider) {
        $stateProvider
            .state('sidemenu.docs', {
                url: '/docs',
                views: {
                    'topView': {
                        controller: 'DocsCtrl',
                        templateUrl: 'docs/docs.tpl.html'
                    }
                }
            });
    })

    .controller('DocsCtrl', function DocsController($scope) {

    })

;

