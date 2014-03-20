/**
 * Created by ahenning on 3/17/14.
 */
angular.module('zamolxian.tutorials', [
    'ui.router.state',
    'ajoslin.promise-tracker'
])

.config(function config($stateProvider) {
    $stateProvider.state('tutorials', {
        url: '/tutorials',
        views: {
            "main": {
                controller: 'TutorialsCtrl',
                templateUrl: 'tutorials/tutorials.tpl.html'
            }
        },
        data: { pageTitle: 'Tutorials' }
    });
})

.controller("TutorialsCtrl", function TutorialsCtrl($http, $scope, promiseTracker) {
    $scope.tutorials = [
    {
        "date" : "date today",
        "rating" : 10,
        "link_to_tutorial" : "link/stuff",
        "source" : "src",
        "comments" : "comm",
        "title" : "title",
        "priority" : 3,
        "content" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pulvinar, metus quis gravida cursus, urna eros ullamcorper enim, ut tincidunt nisl ipsum a lectus. Etiam at odio sed ante vestibulum rhoncus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec pellentesque tellus enim, eu viverra sem semper quis. Etiam bibendum ac libero eu lacinia. Nam sodales tortor elit, quis egestas libero consequat ut. Sed convallis ante ut quam pellentesque cursus ut ac velit.",
        "tags" : "default, tags"
    },
    {
        "date" : "date today2",
        "rating" : 7,
        "link_to_tutorial" : "link/stuff",
        "source" : "src",
        "comments" : "comm",
        "title" : "title 2",
        "priority" : 3,
        "content" : "Etiam consectetur diam vel nisi sagittis tincidunt. Aliquam in velit pulvinar, mollis arcu at, consectetur justo. Vivamus commodo faucibus velit, interdum hendrerit mauris aliquet ac. Nunc pretium porttitor blandit. Proin eu suscipit ligula. Suspendisse potenti. Morbi congue ipsum eu nulla imperdiet placerat. Sed vitae ultrices felis. Ut fringilla, odio quis ullamcorper luctus, nisl mi consequat orci, rhoncus sodales felis nunc tempor est. Morbi sed aliquet justo, quis tincidunt magna. In elementum gravida neque sed ullamcorper. Vestibulum justo tellus, ultrices non ante ac, condimentum euismod diam.",
        "tags" : "default, tags"
    },
    {
        "date" : "date today2",
        "rating" : 8,
        "link_to_tutorial" : "link/stuff",
        "source" : "src",
        "comments" : "comm",
        "title" : "title 3",
        "priority" : 3,
        "content" : "Fusce diam est, porttitor vitae nulla non, dictum luctus ante. Vestibulum porta nisl vel justo iaculis consectetur. Morbi pellentesque vel sapien vehicula ultricies. Nam a posuere turpis. Nullam dictum augue metus, vitae suscipit metus porttitor id. Mauris lectus nisl, lacinia non sollicitudin sit amet, interdum ut mi. Proin euismod molestie dapibus. Ut dolor dolor, cursus in pretium eget, suscipit et lacus. Nulla vulputate lacinia dolor nec condimentum. Donec eget molestie ante, a luctus diam. In hac habitasse platea dictumst. Integer vitae purus ornare, tristique tellus vitae, facilisis orci. Aliquam erat volutpat. Aliquam magna dui, condimentum at orci eu, vestibulum dictum ipsum. Praesent nec convallis dui, sit amet lobortis enim.",
        "tags" : "default, tags"
    }
    ];
})

.directive('card', function(cardData) {
    return {
        template: 'Title: {{cardData.title}}'
    };
});