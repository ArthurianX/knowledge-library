angular.module('zamolxian.my_account', [
    'ui.router.state',
    'ajoslin.promise-tracker',
    "listingCountry",
    "zamolxian.phone-service",
    'ngSanitize'
])

    .config(function config($stateProvider, $httpProvider) {
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

    .config( function () {
        //countryListing.interceptors.push('myCountryInterceptor');
    })

    .controller("AccountCtrl", function AccountCtrl($scope, $http, promiseTracker, $sanitize, countryListing, PhoneService) {
        $scope.userName = "George Bora";
        $scope.userMail = "gbora@pititechnologies.ro";
        $scope.contactData = {};

        $http.get("http://tinyurl.com/api-create.php?url=http://scripting.com/").then(function (result) {
            console.log("this is the result");
        });
//        /**
//         * @name test_the_zone
//         * @description Adds the event which will trigger an assincronious error in order to test the stack tracing of node js.
//         */
//        function test_the_zone() {
//            var erBtn = document.getElementById("btnError");
//            erBtn.addEventListener("click", middleMan, false);
//
//        }
//
//        /**
//         * @name middleMan
//         * @description Providers a extra layer to the stack trace.
//         */
//        function middleMan() {
//            theRealCulprit();
//        }
//
//        /**
//         * @name theRealCulprit
//         * @description Causes the error which wil lead to the stack trace.
//         */
//        function theRealCulprit() {
//            throw new Error('Why not just work just bloody once?');
//        }
//
//        zone.fork(Zone.longStackTraceZone).run(test_the_zone);
//        //test_the_zone();

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
        $scope.cdCountry = $scope.countryList[89]; //TODO: Enable the scope in the tests

        // I initialize all the error to false
        $scope.errorList = {"firstName": false, "lastName": false, "mail": false, "phoneNumber": false, "adress": false, "county": false, "country": false};

        $scope.contactZalmoxis = function () {
            $scope.contact = false;
        };


        $scope.isValidPhoneNr = function (phoneNr, countryCode) {
            PhoneService.isValidPhoneNr(phoneNr, countryCode)
                .then(function (data) {
                    $scope.errorList.phone = !data;
                });
        };

        $scope.checkContactData = function (suspect) {
            switch (suspect) {
                case "firstName" :
                    $scope.errorList["firstName"] = !($scope.cdFirstName.length > 5 && $scope.cdFirstName.length < 30);
                    break;

                case "lastName" :
                    $scope.errorList["lastName"] = !($scope.cdLastName.length > 5 && $scope.cdLastName.length < 30);
                    break;

                case "mail" :
                    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    $scope.errorList["mail"] = !(re.test($scope.cdMail));
                    break;

                case "adress" :
                    // Do something here with google API
                    console.log("Checking the adress");

                    var adress = $scope.cdAdress + ',' + $scope.cdCity + ',' + $scope.cdCounty + ',' + $scope.cdCountry;

                    geocoder = new google.maps.Geocoder();

                    geocoder.geocode({ 'address': adress}, function (results, status) {
                        if (status == google.maps.GeocoderStatus.OK) {
                            console.log("address is ok");
                        } else {
                            $scope.errorList["adress"] = true;
                            $scope.errorList["county"] = true;
                            $scope.errorList["country"] = true;
                            console.log("adress is not ok");

                        }
                    });
                    break;

                case "phone" :

                    Locale = 'en-US';

//                    $http.get('http://www.phone-validator.net/api/verify', { PhoneNumber: $scope.cdPhone, CountryCode: $scope.cdCountry.cca2,
//                        Locale: Locale, APIKey: 'pv-1571f24e7e74c413343dce8f4214f31a'}).success(function (json) {
//                        console.log(json);
//                        if (typeof(json.status) != "undefined") {
//                            if (json.status === 'FAIL') {
//                                console.log("number is invalid");
//                                $scope.errorList["phoneNumber"] = true;
//                            } else {
//                                console.log("number is valid");
//                            }
//                        }
//                    }).error(function (data, status, headers, config) {
//                        $scope.status = status;
//                    });

                    $scope.errorList["phoneNumber"] = !countryListing.checkPhone($scope.cdCountry, $scope.cdPhone);


                    break;

                default :
                    console.log("default case has been triggered");
                    break;
            }
        };
    });


var geocoder;
var initialize = function () {
    console.log("loading geocoder...");
    geocoder = new google.maps.Geocoder();
    console.log("geocoder loaded");
};
