angular.module('zamolxian.my_account', [
        'ui.router.state',
        'ajoslin.promise-tracker',
        "listingCountry",
        'ngSanitize'
])

.config(function config($stateProvider) {
    $stateProvider.state('my_account', {
        url: '/my_account',
        views: {
            "main": {
                controller: 'AccountCtrl',
                templateUrl: 'my_account/my_account.tpl.html'
            }
        },
        data: { pageTitle: 'Account' }
    });
})

.controller("AccountCtrl", function AccountCtrl($scope, promiseTracker, $sanitize, countryListing) {
    $scope.userName = "George Bora";
    $scope.userMail = "gbora@pititechnologies.ro";
    $scope.result = {};

    $scope.motivesList = [
        { "name": "Hire Me Pls", "options": [
            {"name": "Web Developer"},
            {"name": "Front End Developer"},
            {"name": "Back End Developer"},
            {"name": "Designer"},
            {"name": "DB Admin"}
        ]},

        {"name": "Vengeance", "options": [
            {name: "You killed my mother"},
            {name: "You killed my father"},
            {name: "You killed my family"}
        ]},

        {"name": "Miscelonous", "options": [
            {"name": "Miscelonious"},
            {"name": "Random"},
            {"name": "Anarchy"}
        ]}

    ];

    $scope.selectedMotive = $scope.motivesList[0];

    $scope.countryList = countryListing.countryList;
    $scope.userCountry = $scope.countryList[89];

    // I intialize all the error to false
    $scope.errorList = {"firstName": false, "lastName": false, "mail": false, "phoneNumber": false, "address": false, "country": false};

    $scope.contactZalmoxis = function () {
        $scope.contact = false;
    };

    $scope.geocode = function(address) {
        geocoder.geocode({'address': address}, function(results, status) {
            if(status == google.maps.GeocoderStatus.OK) {
                console.log("OK");
                $scope.errorList.address = false;
                $scope.result.address = results[0];
                console.log($scope.result.address.formatted_address);
            } else {
                console.log("NOT FOUND = ERROR");
                $scope.errorList.address = true;
            }
        });
    };
});
var geocoder;
var initialize = function() {
    console.log("loading geocoder...");
    geocoder = new google.maps.Geocoder();
    console.log("geocoder loaded");
};