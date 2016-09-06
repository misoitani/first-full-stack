var app = angular.module("RoutingApp", ["ngRoute"]);

app.config(["$routeProvider", function ($routeProvider) {

    $routeProvider
        .when("/", {
            templateUrl: "templates/home.html",
            controller: "HomeController"
        })
        .when("/about", {
            templateUrl: "templates/about.html",
            controller: "AboutController"
        })
        .when("/whyilove", {
            templateUrl: "templates/weAreGlobal.html",
            controller: "weAreGlobalController"
        })
        .when("/tryItYourself", {
            templateUrl: "templates/tryItYourself.html",
            controller: "tryItYourselfController"
        })
        .when("/weAreGlobal", {
            templateUrl: "templates/weAreGlobal.html",
            controller: "weAreGlobalController"
        })
        .when("/team", {
            templateUrl: "templates/team.html",
            controller: "teamController"
        })
        .when("/leaveComment", {
            templateUrl: "templates/leaveComment.html",
            controller: "leaveCommentController"
        })
        .otherwise({
            redirectTo: "/"
        });
}]);