angular.module("zamolxian.phone-service", [])

    .factory('PhoneService', function ($http, $q) {
        return {
            isValidPhoneNr: function (phoneNr, countryCode) {
                var clientId = "pv-53b2387b42ece71237013cdc1fa91d68";
                //var locale = 'en-US';

                // max 100 API calls / month
                return $q.all([
                        $http.get('http://www.phone-validator.net/api/verify?' +
                            'PhoneNumber=' + phoneNr + '&CountryCode=' + countryCode +
                            '&APIKey=' + clientId)
                    ])

                    .then(function (data) {
                        if (typeof(data[0]) != "undefined") {
                            if (data[0].data.status == "VALID") {
                                return true;
                            }
                        }
                        return false;
                    });
            }
        };
    });