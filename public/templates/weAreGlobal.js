var app = angular.module("RoutingApp");

app.controller("weAreGlobalController", ["$scope", function($scope) {
    $scope.weAreGlobal = " we are global because ";

}]);
