angular.module('zamolxian.directives', ['ui.router.state'])

.directive('card', function() {
    return {
        restrict: 'EAC',
//        require: '^tutorial',
//        scope: {
//            tutorial: '='
//        },
        templateUrl: 'directive-templates/card-template.tpl.html'
    };
});