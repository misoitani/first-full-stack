var app = angular.module("RoutingApp");

app.service("leaveCommentService", ["$http", function($http) {
    var self = this;
    this.classList = [];

    this.getClasses = function() {
        return $http.get("/api/class").then(function(response) {
            self.classList = response.data;
            return response.data;
        });
    };

    this.addClass = function(newClass) {
        return $http.post("/api/class", newClass).then(function(response) {
            self.classList.push(response.data);
        });
    };

    this.deleteClass = function(clas, index) {
        return $http.delete("/api/class/" + clas._id).then(function(response) {
            self.classList.splice(index, 1);
        });
    };

    this.updateClass = function(clas, index) {
        return $http.put("/api/class/" + clas._id, clas).then(function(response) {
            self.classList[index] = response.data;
        });
    };

}]);










