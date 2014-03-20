angular.module("zalmoxis.cards", ['ui.bootstrap'])

.directive("cardZalmoxis", function () {
        return {
            restrict : "CEA",
//            scope : {
//                ngModel : "="
//            },
            //template: "<p> Hello World</p>"
            templateUrl: 'directive-templates/card-zalmoxis.tpl.html'

        };
    });