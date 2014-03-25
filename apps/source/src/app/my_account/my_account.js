angular.module('zamolxian.my_account', [
        'ui.router.state',
        'ajoslin.promise-tracker',
        "listingCountry",
        'ngSanitize',
        'zamolxian.phone-service'
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

.controller("AccountCtrl", function AccountCtrl($scope, promiseTracker, $sanitize, countryListing, PhoneService) {
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

    // intialize all the errors to false
    $scope.errorList = {"firstName": false, "lastName": false, "mail": false, "phone": undefined, "address": undefined, "country": false};

    $scope.contactZalmoxis = function () {
        $scope.contact = false;
    };

    /**
     * Geocode function. Returns formatted address if found, else sets error flag.
     * @param address String the address to search for
     */
    $scope.geocode = function(address) {
        geocoder.geocode({'address': address}, function(results, status) {

            // check if address status is OK (found)
            if(status == google.maps.GeocoderStatus.OK) {
                $scope.errorList.address = false;

                // $apply function to update view
                $scope.$apply(function() {
                    $scope.result.address = results[0];
                });
            } else {
                $scope.errorList.address = true;
            }
        });
    };

    /**
     * Phone number validation function depending on country code.
     * @param phoneNr String, the phone number
     * @param countryCode 2 capital letters String, the country ISO code
     */
    $scope.isValidPhoneNr = function(phoneNr, countryCode) {
        PhoneService.isValidPhoneNr(phoneNr, countryCode)
        .then(function(data) {
            $scope.errorList.phone = !data;
        });
    };
});

/**
 * Geocoder object from google maps.
 */
var geocoder;

/**
 * Initialize callback function when requiring google maps api via HTTP.
 */
var initialize = function() {
    console.log("loading geocoder...");
    geocoder = new google.maps.Geocoder();
    console.log("geocoder loaded");
};