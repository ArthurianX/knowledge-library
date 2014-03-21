angular.module('zamolxian.books', ['ionic'])

    .config(function config($stateProvider) {
        $stateProvider
            .state('sidemenu.books', {
                url: '/books',
                views: {
                    'topView': {
                        controller: 'BooksCtrl',
                        templateUrl: 'books/books.tpl.html'
                    }
                }
            });
    })

    .controller('BooksCtrl', function BooksController($scope) {

    })

;

