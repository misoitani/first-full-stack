var app = angular.module("RoutingApp");

app.controller("leaveCommentController", ["$scope", "leaveCommentService", function ($scope, leaveCommentService) {

    $scope.leaveCommentService = leaveCommentService;
    $scope.editing = false;
    $scope.classList = leaveCommentService.classList;

    leaveCommentService.getClasses().then(function (data) {
        $scope.classes = data;
        console.log(data);
    });
    $scope.addClass = function (newClass){
         leaveCommentService.addClass(newClass);
    }
    $scope.deleteClass = function (clas, index) {
        leaveCommentService.deleteClass(clas, index)
    }

    $scope.completeClass = function (clas, index) {
        leaveCommentService.updateClass(clas, index);
    }

    $scope.updateClass = function (clas, index) {
        leaveCommentService.updateClass(clas, index).then(function () {
            clas.editing = false;
        });
    }
}]);