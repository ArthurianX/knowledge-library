angular.module('zamolxian.home', [
      'ui.router.state',
      'ajoslin.promise-tracker'
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

    .controller('HomeCtrl', function HomeController($scope, promiseTracker, listingProvider) {
        /*$scope.omniList = listingProvider.getList();*/
//        $scope.data = listingProvider.ListingService;
//        console.log($scope.data.getCom);
//       // $scope.functionList(" home");
    })

;

