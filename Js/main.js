getTurkiye();
function getTurkiye() {
  var app = angular.module("myApp", []);
  app.controller("myCtrl", function ($scope, $http) {
    $scope.data = {};
    $http.get("https://api.covid19api.com/summary").then(function (response) {
      $scope.data = response.data.Countries;
    });
  });
}
