/**
 * Created by ahenning on 3/17/14.
 */
angular.module('zamolxian.books', [
    'ui.router.state',
    'ajoslin.promise-tracker'
])

.config(function config($stateProvider) {
    $stateProvider.state('books', {
        url: '/books',
        view: {
            "main": {
                controller: 'BooksCtrl',
                templateUrl: 'books/books.tpl.html'
            }
        },
        data: { pageTitle: 'Books' }
    });
})

.controller("BooksCtrl", function BooksCtrl($scope, promiseTracker) {

});