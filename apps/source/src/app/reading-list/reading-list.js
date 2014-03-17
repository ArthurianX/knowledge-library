angular.module('zamolxian.reading-list', [
        'ui.router.state',
        'ajoslin.promise-tracker'
    ])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
    .config(function config($stateProvider) {
        $stateProvider.state('reading-list', {
            url: '/reading-list',
            views: {
                "main": {
                    controller: 'ReadingListCtrl',
                    templateUrl: 'reading-list/reading-list.tpl.html'
                }
            },
            data: { pageTitle: 'Reading List' }
        });
    })

    .controller('ReadingListCtrl', function ReadingListCtrl($scope, promiseTracker) {

    })

;