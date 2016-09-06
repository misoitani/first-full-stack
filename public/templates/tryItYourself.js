var app = angular.module("RoutingApp");

app.controller("tryItYourselfController", ["$scope", function ($scope) {
    $scope.tryItYourself = " what you have to do before you start.";
}]);






//to work on this one 
//to be given the nAME capital region population latlng timezones borders and languages



app.service("HTTPService", ["$http", function ($http) {
    this.getCountry = function (id) {
        var country = {};
        var config = {
            headers: {
                'X-Mashape-Key': 'xO9iE6tPIDmshUWGjkqdW78ABiEup1VMqhQjsnYbFFrmS5X4dl'
            }
        };
        return $http.get("https://restcountries-v1.p.mashape.com/name/"+id, config);

    }
            }]);


//$http.get("https://restcountries-v1.p.mashape.com", function (req, res) {
//    if (req.query.name) {
//        var filteredcountries = country.filter(function (item) {
//            return item.name.toLowerCase() === req.query.name.toLowerCase();
//        });
//        res.send(filteredcountries);
//    } else {
//        res.send(country);
//    }
//});



app.controller("MainController", ["$scope", "HTTPService", function ($scope, HTTPService) {

    $scope.getCountryonClick = function () {
        console.log($scope.countryInput);
        
        HTTPService.getCountry($scope.countryInput).then(function (countryrat) {
            $scope.countries = countryrat.data;
        });
    }

}]);



//GET the info from this api 

//get
//https://restcountries-v1.p.mashape.com/all
//X-Mashape-Key
//xO9iE6tPIDmshUWGjkqdW78ABiEup1VMqhQjsnYbFFrmS5X4dl
//Accept
//application/json


//{
//    "name": "Afghanistan",
//    "capital": "Kabul",
//    "altSpellings": [
//      "AF",
//      "Afġānistān"
//    ],
//    "relevance": "0",
//    "region": "Asia",
//    "subregion": "Southern Asia",
//    "translations": {
//      "de": "Afghanistan",
//      "es": "Afganistán",
//      "fr": "Afghanistan",
//      "ja": "アフガニスタン",
//      "it": "Afghanistan"
//    },
//    "population": 26023100,
//    "latlng": [
//      33,
//      65
//    ],
//    "demonym": "Afghan",
//    "area": 652230,
//    "gini": 27.8,
//    "timezones": [
//      "UTC+04:30"
//    ],
//    "borders": [
//      "IRN",
//      "PAK",
//      "TKM",
//      "UZB",
//      "TJK",
//      "CHN"
//    ],
//    "nativeName": "افغانستان",
//    "callingCodes": [
//      "93"
//    ],
//    "topLevelDomain": [
//      ".af"
//    ],
//    "alpha2Code": "AF",
//    "alpha3Code": "AFG",
//    "currencies": [
//      "AFN"
//    ],
//    "languages": [
//      "ps",
//      "uz",
//      "tk"
//    ]
//  },