angular.module('zamolxian.irc', ['ionic'])

    .config(function config($stateProvider) {
        $stateProvider
            .state('sidemenu.irc', {
                url: '/irc',
                views: {
                    'topView': {
                        controller: 'IrcCtrl',
                        templateUrl: 'irc/irc.tpl.html'
                    }
                }
            });
    })

    .controller('IrcCtrl', function IrcController($scope) {

    })

;

