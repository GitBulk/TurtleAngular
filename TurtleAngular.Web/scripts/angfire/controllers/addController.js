/// <reference path="../../angular.min.js" />

(function () {
    angular.module("crudFire")
    .controller("addController", addController);
    addController.$inject = ["$scope", "$firebaseArray", "$location", "FB_URL"]
    function addController($scope, $firebaseArray, $location, FB_URL) {
        $scope.addProduct = function () {
            var ref = new Firebase(FB_URL);
            var product = $firebaseArray(ref);
            $scope.product = {};
            product.$add({
                sku: $scope.product.sku,
                description: $scope.product.description,
                price: $scope.product.price
            });
            $location.path('/');
        }
    }
})();