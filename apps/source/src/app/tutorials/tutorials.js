angular.module('zamolxian.tutorials', ['ionic'])

    .config(function config($stateProvider) {
        $stateProvider
            .state('sidemenu.tutorials', {
                url: '/tutorials',
                views: {
                    'topView': {
                        controller: 'TutorialsCtrl',
                        templateUrl: 'tutorials/tutorials.tpl.html'
                    }
                }
            });
    })

    .controller('TutorialsCtrl', function TutorialsController($scope) {

    })

;

