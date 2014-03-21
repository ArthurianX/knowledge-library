angular.module('zamolxian.reading', ['ionic'])

    .config(function config($stateProvider) {
        $stateProvider
            .state('sidemenu.reading', {
                url: '/reading',
                views: {
                    'topView': {
                        controller: 'ReadingCtrl',
                        templateUrl: 'reading/reading.tpl.html'
                    }
                }
            });
    })

    .controller('ReadingCtrl', function ReadingController($scope) {

    })

;

