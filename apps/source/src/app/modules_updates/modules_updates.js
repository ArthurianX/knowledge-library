angular.module('zamolxian.modules_updates', [
        'ui.router.state',
        'anim-in-out',
        'ngAnimate',
        'ajoslin.promise-tracker',
        'zalmoxis.cards'
    ])

    .config(function config($stateProvider) {
        $stateProvider.state('modules_updates', {
            url: '/modules_updates',
            views: {
                "main": {
                    controller: 'ModulesCtrl',
                    templateUrl: 'modules_updates/modules_updates.tpl.html'
                }
            },
            data: { pageTitle: 'Modules and Updates' }
        });
    })

    .controller("ModulesCtrl", function ModulesCtrl($scope, promiseTracker, listingProvider) {
//            console.log(listingProvider);
        // $scope.data = listingProvider.ListingService;
        //console.log($scope.data().commnunityList);

        $scope.modulesList = [
            { "name": "angular", "version": 1.12, "dependencies": "-", "language": "javascript"},
            { "name": "jQuerryUI", "version": 2.0, "dependencies": "Jquerry", "language": "javascript"},
            { "name": "SASS", "version": 1.1, "dependencies": "NodeJS", "language": "ruby"},
            { "name": "LESS", "version": 1.7, "dependencies": "NodeJS", "language": "javascript"}
        ];

        $scope.updatesList = { "updates" : [
            { "name": "Angular 2.0", "version": 2.0, "parent-module": "angular", "type": "General Update"},
            { "name": "JQuerryUI 2.1", "version": 2.0, "parent-module": "JQuerryUI", "type": "SecurityFix"}
        ]};

    });