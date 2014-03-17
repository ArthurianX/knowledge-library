angular.module('zamolxian.about', [
        'ui.router.state',
        'ajoslin.promise-tracker'
    ])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
    .config(function config($stateProvider) {
        $stateProvider.state('about', {
            url: '/about',
            views: {
                "main": {
                    controller: 'AboutCtrl',
                    templateUrl: 'about/about.tpl.html'
                }
            },
            data: { pageTitle: 'About' }
        });
    })

    .controller('AboutCtrl', function AboutController($scope, promiseTracker) {

    })

;