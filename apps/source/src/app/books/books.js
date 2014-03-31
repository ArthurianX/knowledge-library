angular.module('zamolxian.books', [
    'ui.router.state',
    'ajoslin.promise-tracker'
])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
    .config(function config($stateProvider) {
        $stateProvider.state('books', {
            url: '/books',
            views: {
                "main": {
                    controller: 'BooksCtrl',
                    templateUrl: 'books/books.tpl.html'
                }
            },
            data: { pageTitle: 'Books' }
        });
    })

    .controller('BooksCtrl', function BooksController($scope, promiseTracker) {

    })

;