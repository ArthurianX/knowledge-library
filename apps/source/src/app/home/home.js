angular.module('zamolxian.home', [
    'ui.router.state'
])

.config(function config($stateProvider) {
    $stateProvider.state('home', {
        url: '/home',
        views: {
            "main": {
                controller: 'HomeCtrl',
                templateUrl: 'home/home.tpl.html'
            }
        },
        data: { pageTitle: 'Home' }
    });
})

.controller("HomeCtrl", function HomeCtrl($scope, factoryProvider) {
        $scope.data = factoryProvider.FactoryProvider();
//        for (var id in $scope.data.readingList.$getIndex()) {
//            console.log(id);
//        }
//        console.log($scope.data.readingList);

});