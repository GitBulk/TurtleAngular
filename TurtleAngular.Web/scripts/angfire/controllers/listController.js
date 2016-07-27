/// <reference path="../../angular.min.js" />

(function () {
    angular.module("crudFire")
    .controller("listController", listController);
    listController.$inject = ["$scope", "$firebaseArray", "FB_URL"];
    function listController($scope, $firebaseArray, FB_URL) {
        var products = new Firebase(FB_URL);
        $scope.products = $firebaseArray(products);
    }
           //.controller("listCtrl", listController);


})();