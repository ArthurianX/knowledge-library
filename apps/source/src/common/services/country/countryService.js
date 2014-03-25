angular.module("listingCountry", [])

    .service("countryListing", function () {
        this.countryList = [
            {"name": "Afghanistan", "cca2": "AF", "callingCode": ["93"]},
            {"name": "Åland Islands", "cca2": "AX", "callingCode": ["358"]},
            {"name": "Albania", "cca2": "AL", "callingCode": ["355"]},
            {"name": "Algeria", "cca2": "DZ", "callingCode": ["213"]},
            {"name": "American Samoa", "cca2": "AS", "callingCode": ["1684"]},
            {"name": "Andorra", "cca2": "AD", "callingCode": ["376"]},
            {"name": "Angola", "cca2": "AO", "callingCode": ["244"]},
            {"name": "Anguilla", "cca2": "AI", "callingCode": ["1264"]},
            {"name": "Antarctica", "cca2": "AQ", "callingCode": [""]},
            {"name": "Antigua and Barbuda", "cca2": "AG", "callingCode": ["1268"]},
            {"name": "Argentina", "cca2": "AR", "callingCode": ["54"]},
            {"name": "Armenia", "cca2": "AM", "callingCode": ["374"]},
            {"name": "Aruba", "cca2": "AW", "callingCode": ["297"]},
            {"name": "Ascension Island", "cca2": "SH", "callingCode": ["247"]},
            {"name": "Australia", "cca2": "AU", "callingCode": ["61"]},
            {"name": "Austria", "cca2": "AT", "callingCode": ["43"]},
            {"name": "Azerbaijan", "cca2": "AZ", "callingCode": ["994"]},
            {"name": "Bahamas", "cca2": "BS", "callingCode": ["1242"]},
            {"name": "Bahrain", "cca2": "BH", "callingCode": ["973"]},
            {"name": "Bangladesh", "cca2": "BD", "callingCode": ["880"]},
            {"name": "Barbados", "cca2": "BB", "callingCode": ["1246"]},
            {"name": "Belarus", "cca2": "BY", "callingCode": ["375"]},
            {"name": "Belgium", "cca2": "BE", "callingCode": ["32"]},
            {"name": "Belize", "cca2": "BZ", "callingCode": ["501"]},
            {"name": "Benin", "cca2": "BJ", "callingCode": ["229"]},
            {"name": "Bermuda", "cca2": "BM", "callingCode": ["1441"]},
            {"name": "Bhutan", "cca2": "BT", "callingCode": ["975"]},
            {"name": "Bolivia", "cca2": "BO", "callingCode": ["591"]},
            {"name": "Bonaire", "cca2": "BQ", "callingCode": ["5997"]},
            {"name": "Bosnia and Herzegovina", "cca2": "BA", "callingCode": ["387"]},
            {"name": "Botswana", "cca2": "BW", "callingCode": ["267"]},
            {"name": "Bouvet Island", "cca2": "BV", "callingCode": [""]},
            {"name": "Brazil", "cca2": "BR", "callingCode": ["55"]},
            {"name": "British Indian Ocean Territory", "cca2": "IO", "callingCode": ["246"]},
            {"name": "British Virgin Islands", "cca2": "VG", "callingCode": ["1284"]},
            {"name": "Brunei", "cca2": "BN", "callingCode": ["673"]},
            {"name": "Bulgaria", "cca2": "BG", "callingCode": ["359"]},
            {"name": "Burkina Faso", "cca2": "BF", "callingCode": ["226"]},
            {"name": "Burundi", "cca2": "BI", "callingCode": ["257"]},
            {"name": "Cambodia", "cca2": "KH", "callingCode": ["855"]},
            {"name": "Cameroon", "cca2": "CM", "callingCode": ["237"]},
            {"name": "Canada", "cca2": "CA", "callingCode": ["1"]},
            {"name": "Cape Verde", "cca2": "CV", "callingCode": ["238"]},
            {"name": "Cayman Islands", "cca2": "KY", "callingCode": ["1345"]},
            {"name": "Central African Republic", "cca2": "CF", "callingCode": ["236"]},
            {"name": "Chad", "cca2": "TD", "callingCode": ["235"]},
            {"name": "Chile", "cca2": "CL", "callingCode": ["56"]},
            {"name": "China", "cca2": "CN", "callingCode": ["86"]},
            {"name": "Christmas Island", "cca2": "CX", "callingCode": ["61"]},
            {"name": "Cocos (Keeling) Islands", "cca2": "CC", "callingCode": ["61"]},
            {"name": "Colombia", "cca2": "CO", "callingCode": ["57"]},
            {"name": "Comoros", "cca2": "KM", "callingCode": ["269"]},
            {"name": "Republic of the Congo", "cca2": "CG", "callingCode": ["242"]},
            {"name": "Democratic Republic of the Congo", "cca2": "CD", "callingCode": ["243"]},
            {"name": "Cook Islands", "cca2": "CK", "callingCode": ["682"]},
            {"name": "Costa Rica", "cca2": "CR", "callingCode": ["506"]},
            {"name": "Croatia", "cca2": "HR", "callingCode": ["385"]},
            {"name": "Cuba", "cca2": "CU", "callingCode": ["53"]},
            {"name": "Curaçao", "cca2": "CW", "callingCode": ["5999"]},
            {"name": "Cyprus", "cca2": "CY", "callingCode": ["357"]},
            {"name": "Czech Republic", "cca2": "CZ", "callingCode": ["420"]},
            {"name": "Denmark", "cca2": "DK", "callingCode": ["45"]},
            {"name": "Djibouti", "cca2": "DJ", "callingCode": ["253"]},
            {"name": "Dominica", "cca2": "DM", "callingCode": ["1767"]},
            {"name": "Dominican Republic", "cca2": "DO", "callingCode": ["1809", "1829", "1849"]},
            {"name": "Ecuador", "cca2": "EC", "callingCode": ["593"]},
            {"name": "Egypt", "cca2": "EG", "callingCode": ["20"]},
            {"name": "El Salvador", "cca2": "SV", "callingCode": ["503"]},
            {"name": "Equatorial Guinea", "cca2": "GQ", "callingCode": ["240"]},
            {"name": "Eritrea", "cca2": "ER", "callingCode": ["291"]},
            {"name": "Estonia", "cca2": "EE", "callingCode": ["372"]},
            {"name": "Ethiopia", "cca2": "ET", "callingCode": ["251"]},
            {"name": "Falkland Islands", "cca2": "FK", "callingCode": ["500"]},
            {"name": "Faroe Islands", "cca2": "FO", "callingCode": ["298"]},
            {"name": "Fiji", "cca2": "FJ", "callingCode": ["679"]},
            {"name": "Finland", "cca2": "FI", "callingCode": ["358"]},
            {"name": "France", "cca2": "FR", "callingCode": ["33"]},
            {"name": "French Guiana", "cca2": "GF", "callingCode": ["594"]},
            {"name": "French Polynesia", "cca2": "PF", "callingCode": ["689"]},
            {"name": "French Southern and Antarctic Lands", "cca2": "TF", "callingCode": [""]},
            {"name": "Gabon", "cca2": "GA", "callingCode": ["241"]},
            {"name": "Gambia", "cca2": "GM", "callingCode": ["220"]},
            {"name": "Georgia", "cca2": "GE", "callingCode": ["995"]},
            {"name": "Germany", "cca2": "DE", "callingCode": ["49"]},
            {"name": "Ghana", "cca2": "GH", "callingCode": ["233"]},
            {"name": "Gibraltar", "cca2": "GI", "callingCode": ["350"]},
            {"name": "Greece", "cca2": "GR", "callingCode": ["30"]},
            {"name": "Greenland", "cca2": "GL", "callingCode": ["299"]},
            {"name": "Grenada", "cca2": "GD", "callingCode": ["1473"]},
            {"name": "Guadeloupe", "cca2": "GP", "callingCode": ["590"]},
            {"name": "Guam", "cca2": "GU", "callingCode": ["1671"]},
            {"name": "Guatemala", "cca2": "GT", "callingCode": ["502"]},
            {"name": "Guernsey", "cca2": "GG", "callingCode": ["44"]},
            {"name": "Guinea", "cca2": "GN", "callingCode": ["224"]},
            {"name": "Guinea-Bissau", "cca2": "GW", "callingCode": ["245"]},
            {"name": "Guyana", "cca2": "GY", "callingCode": ["592"]},
            {"name": "Haiti", "cca2": "HT", "callingCode": ["509"]},
            {"name": "Heard Island and McDonald Islands", "cca2": "HM", "callingCode": [""]},
            {"name": "Vatican City", "cca2": "VA", "callingCode": ["39066", "379"]},
            {"name": "Honduras", "cca2": "HN", "callingCode": ["504"]},
            {"name": "Hong Kong", "cca2": "HK", "callingCode": ["852"]},
            {"name": "Hungary", "cca2": "HU", "callingCode": ["36"]},
            {"name": "Iceland", "cca2": "IS", "callingCode": ["354"]},
            {"name": "India", "cca2": "IN", "callingCode": ["91"]},
            {"name": "Indonesia", "cca2": "ID", "callingCode": ["62"]},
            {"name": "Ivory Coast", "cca2": "CI", "callingCode": ["225"]},
            {"name": "Iran", "cca2": "IR", "callingCode": ["98"]},
            {"name": "Iraq", "cca2": "IQ", "callingCode": ["964"]},
            {"name": "Ireland", "cca2": "IE", "callingCode": ["353"]},
            {"name": "Isle of Man", "cca2": "IM", "callingCode": ["44"]},
            {"name": "Israel", "cca2": "IL", "callingCode": ["972"]},
            {"name": "Italy", "cca2": "IT", "callingCode": ["39"]},
            {"name": "Jamaica", "cca2": "JM", "callingCode": ["1876"]},
            {"name": "Japan", "cca2": "JP", "callingCode": ["81"]},
            {"name": "Jersey", "cca2": "JE", "callingCode": ["44"]},
            {"name": "Jordan", "cca2": "JO", "callingCode": ["962"]},
            {"name": "Kazakhstan", "cca2": "KZ", "callingCode": ["76", "77"]},
            {"name": "Kenya", "cca2": "KE", "callingCode": ["254"]},
            {"name": "Kiribati", "cca2": "KI", "callingCode": ["686"]},
            {"name": "Kuwait", "cca2": "KW", "callingCode": ["965"]},
            {"name": "Kyrgyzstan", "cca2": "KG", "callingCode": ["996"]},
            {"name": "Laos", "cca2": "LA", "callingCode": ["856"]},
            {"name": "Latvia", "cca2": "LV", "callingCode": ["371"]},
            {"name": "Lebanon", "cca2": "LB", "callingCode": ["961"]},
            {"name": "Lesotho", "cca2": "LS", "callingCode": ["266"]},
            {"name": "Liberia", "cca2": "LR", "callingCode": ["231"]},
            {"name": "Libya", "cca2": "LY", "callingCode": ["218"]},
            {"name": "Liechtenstein", "cca2": "LI", "callingCode": ["423"]},
            {"name": "Lithuania", "cca2": "LT", "callingCode": ["370"]},
            {"name": "Luxembourg", "cca2": "LU", "callingCode": ["352"]},
            {"name": "Macau", "cca2": "MO", "callingCode": ["853"]},
            {"name": "Macedonia", "cca2": "MK", "callingCode": ["389"]},
            {"name": "Madagascar", "cca2": "MG", "callingCode": ["261"]},
            {"name": "Malawi", "cca2": "MW", "callingCode": ["265"]},
            {"name": "Malaysia", "cca2": "MY", "callingCode": ["60"]},
            {"name": "Maldives", "cca2": "MV", "callingCode": ["960"]},
            {"name": "Mali", "cca2": "ML", "callingCode": ["223"]},
            {"name": "Malta", "cca2": "MT", "callingCode": ["356"]},
            {"name": "Marshall Islands", "cca2": "MH", "callingCode": ["692"]},
            {"name": "Martinique", "cca2": "MQ", "callingCode": ["596"]},
            {"name": "Mauritania", "cca2": "MR", "callingCode": ["222"]},
            {"name": "Mauritius", "cca2": "MU", "callingCode": ["230"]},
            {"name": "Mayotte", "cca2": "YT", "callingCode": ["262"]},
            {"name": "Mexico", "cca2": "MX", "callingCode": ["52"]},
            {"name": "Micronesia", "cca2": "FM", "callingCode": ["691"]},
            {"name": "Moldova", "cca2": "MD", "callingCode": ["373"]},
            {"name": "Monaco", "cca2": "MC", "callingCode": ["377"]},
            {"name": "Mongolia", "cca2": "MN", "callingCode": ["976"]},
            {"name": "Montenegro", "cca2": "ME", "callingCode": ["382"]},
            {"name": "Montserrat", "cca2": "MS", "callingCode": ["1664"]},
            {"name": "Morocco", "cca2": "MA", "callingCode": ["212"]},
            {"name": "Mozambique", "cca2": "MZ", "callingCode": ["258"]},
            {"name": "Myanmar", "cca2": "MM", "callingCode": ["95"]},
            {"name": "Namibia", "cca2": "NA", "callingCode": ["264"]},
            {"name": "Nauru", "cca2": "NR", "callingCode": ["674"]},
            {"name": "Nepal", "cca2": "NP", "callingCode": ["977"]},
            {"name": "Netherlands", "cca2": "NL", "callingCode": ["31"]},
            {"name": "New Caledonia", "cca2": "NC", "callingCode": ["687"]},
            {"name": "New Zealand", "cca2": "NZ", "callingCode": ["64"]},
            {"name": "Nicaragua", "cca2": "NI", "callingCode": ["505"]},
            {"name": "Niger", "cca2": "NE", "callingCode": ["227"]},
            {"name": "Nigeria", "cca2": "NG", "callingCode": ["234"]},
            {"name": "Niue", "cca2": "NU", "callingCode": ["683"]},
            {"name": "Norfolk Island", "cca2": "NF", "callingCode": ["672"]},
            {"name": "North Korea", "cca2": "KP", "callingCode": ["850"]},
            {"name": "Northern Mariana Islands", "cca2": "MP", "callingCode": ["1670"]},
            {"name": "Norway", "cca2": "NO", "callingCode": ["47"]},
            {"name": "Oman", "cca2": "OM", "callingCode": ["968"]},
            {"name": "Pakistan", "cca2": "PK", "callingCode": ["92"]},
            {"name": "Palau", "cca2": "PW", "callingCode": ["680"]},
            {"name": "Palestine", "cca2": "PS", "callingCode": ["970"]},
            {"name": "Panama", "cca2": "PA", "callingCode": ["507"]},
            {"name": "Papua New Guinea", "cca2": "PG", "callingCode": ["675"]},
            {"name": "Paraguay", "cca2": "PY", "callingCode": ["595"]},
            {"name": "Peru", "cca2": "PE", "callingCode": ["51"]},
            {"name": "Philippines", "cca2": "PH", "callingCode": ["63"]},
            {"name": "Pitcairn Islands", "cca2": "PN", "callingCode": ["64"]},
            {"name": "Poland", "cca2": "PL", "callingCode": ["48"]},
            {"name": "Portugal", "cca2": "PT", "callingCode": ["351"]},
            {"name": "Puerto Rico", "cca2": "PR", "callingCode": ["1787", "1939"]},
            {"name": "Qatar", "cca2": "QA", "callingCode": ["974"]},
            {"name": "Republic of Kosovo", "cca2": "XK", "callingCode": ["377", "381", "386"]},
            {"name": "Réunion", "cca2": "RE", "callingCode": ["262"]},
            {"name": "Romania", "cca2": "RO", "callingCode": ["40"]},
            {"name": "Russia", "cca2": "RU", "callingCode": ["7"]},
            {"name": "Rwanda", "cca2": "RW", "callingCode": ["250"]},
            {"name": "Saint Barthélemy", "cca2": "BL", "callingCode": ["590"]},
            {"name": "Saint Helena", "cca2": "SH", "callingCode": ["290"]},
            {"name": "Saint Kitts and Nevis", "cca2": "KN", "callingCode": ["1869"]},
            {"name": "Saint Lucia", "cca2": "LC", "callingCode": ["1758"]},
            {"name": "Saint Martin", "cca2": "MF", "callingCode": ["590"]},
            {"name": "Saint Pierre and Miquelon", "cca2": "PM", "callingCode": ["508"]},
            {"name": "Saint Vincent and the Grenadines", "cca2": "VC", "callingCode": ["1784"]},
            {"name": "Samoa", "cca2": "WS", "callingCode": ["685"]},
            {"name": "San Marino", "cca2": "SM", "callingCode": ["378"]},
            {"name": "São Tomé and Príncipe", "cca2": "ST", "callingCode": ["239"]},
            {"name": "Saudi Arabia", "cca2": "SA", "callingCode": ["966"]},
            {"name": "Senegal", "cca2": "SN", "callingCode": ["221"]},
            {"name": "Serbia", "cca2": "RS", "callingCode": ["381"]},
            {"name": "Seychelles", "cca2": "SC", "callingCode": ["248"]},
            {"name": "Sierra Leone", "cca2": "SL", "callingCode": ["232"]},
            {"name": "Singapore", "cca2": "SG", "callingCode": ["65"]},
            {"name": "Sint Maarten", "cca2": "SX", "callingCode": ["1721"]},
            {"name": "Slovakia", "cca2": "SK", "callingCode": ["421"]},
            {"name": "Slovenia", "cca2": "SI", "callingCode": ["386"]},
            {"name": "Solomon Islands", "cca2": "SB", "callingCode": ["677"]},
            {"name": "Somalia", "cca2": "SO", "callingCode": ["252"]},
            {"name": "South Africa", "cca2": "ZA", "callingCode": ["27"]},
            {"name": "South Georgia", "cca2": "GS", "callingCode": ["500"]},
            {"name": "South Korea", "cca2": "KR", "callingCode": ["82"]},
            {"name": "South Sudan", "cca2": "SS", "callingCode": ["211"]},
            {"name": "Spain", "cca2": "ES", "callingCode": ["34"]},
            {"name": "Sri Lanka", "cca2": "LK", "callingCode": ["94"]},
            {"name": "Sudan", "cca2": "SD", "callingCode": ["249"]},
            {"name": "Suriname", "cca2": "SR", "callingCode": ["597"]},
            {"name": "Svalbard and Jan Mayen", "cca2": "SJ", "callingCode": ["4779"]},
            {"name": "Swaziland", "cca2": "SZ", "callingCode": ["268"]},
            {"name": "Sweden", "cca2": "SE", "callingCode": ["46"]},
            {"name": "Switzerland", "cca2": "CH", "callingCode": ["41"]},
            {"name": "Syria", "cca2": "SY", "callingCode": ["963"]},
            {"name": "Taiwan", "cca2": "TW", "callingCode": ["886"]},
            {"name": "Tajikistan", "cca2": "TJ", "callingCode": ["992"]},
            {"name": "Tanzania", "cca2": "TZ", "callingCode": ["255"]},
            {"name": "Thailand", "cca2": "TH", "callingCode": ["66"]},
            {"name": "Timor-Leste", "cca2": "TL", "callingCode": ["670"]},
            {"name": "Togo", "cca2": "TG", "callingCode": ["228"]},
            {"name": "Tokelau", "cca2": "TK", "callingCode": ["690"]},
            {"name": "Tonga", "cca2": "TO", "callingCode": ["676"]},
            {"name": "Trinidad and Tobago", "cca2": "TT", "callingCode": ["1868"]},
            {"name": "Tunisia", "cca2": "TN", "callingCode": ["216"]},
            {"name": "Turkey", "cca2": "TR", "callingCode": ["90"]},
            {"name": "Turkmenistan", "cca2": "TM", "callingCode": ["993"]},
            {"name": "Turks and Caicos Islands", "cca2": "TC", "callingCode": ["1649"]},
            {"name": "Tuvalu", "cca2": "TV", "callingCode": ["688"]},
            {"name": "Uganda", "cca2": "UG", "callingCode": ["256"]},
            {"name": "Ukraine", "cca2": "UA", "callingCode": ["380"]},
            {"name": "United Arab Emirates", "cca2": "AE", "callingCode": ["971"]},
            {"name": "United Kingdom", "cca2": "GB", "callingCode": ["44"]},
            {"name": "United States", "cca2": "US", "callingCode": ["1"]},
            {"name": "United States Minor Outlying Islands", "cca2": "UM", "callingCode": [""]},
            {"name": "United States Virgin Islands", "cca2": "VI", "callingCode": ["1340"]},
            {"name": "Uruguay", "cca2": "UY", "callingCode": ["598"]},
            {"name": "Uzbekistan", "cca2": "UZ", "callingCode": ["998"]},
            {"name": "Vanuatu", "cca2": "VU", "callingCode": ["678"]},
            {"name": "Venezuela", "cca2": "VE", "callingCode": ["58"]},
            {"name": "Vietnam", "cca2": "VN", "callingCode": ["84"]},
            {"name": "Wallis and Futuna", "cca2": "WF", "callingCode": ["681"]},
            {"name": "Western Sahara", "cca2": "EH", "callingCode": ["212"]},
            {"name": "Yemen", "cca2": "YE", "callingCode": ["967"]},
            {"name": "Zambia", "cca2": "ZM", "callingCode": ["260"]},
            {"name": "Zimbabwe", "cca2": "ZW", "callingCode": ["263"]}
        ];


        this.checkPhone = function (countryName, phoneNumber) {

            var country = {"name": "Zimbabwe", "cca2": "ZW", "callingCode": ["263"]};

            for (var i = 0 ;  i < this.countryList.length ; i++) {
                if (this.countryList[i].name === countryName) {
                    country = this.countryList[i];
                }
            }

            if (phoneNumber.length > 10) {
                return false;
            }

            // If the calling code is not at the very beggining of the number the number can't be good
            if (phoneNumber.indexOf(country.callingCode) !== 0) {
                return false;
            }

            return true;
        };
    });
