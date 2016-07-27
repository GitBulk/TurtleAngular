/// <reference path="../angular.min.js" />
/// <reference path="../angular-route.min.js" />


(function () {
    var app = angular.module("crudFire", ['ngRoute', 'firebase']);
    app.config(function ($routeProvider) {
        $routeProvider
        .when("/",
        {
            controller: "listController",
            templateUrl: "scripts/angfire/views/list.html"
        })
        .when("/add",
        {
            controller: "addController",
            templateUrl: "scripts/angfire/views/add.html"
        })
        .when("/edit/:id",
        {
            controller: "editController",
            templateUrl: "scripts/angfire/views/edit.html"
        })
        .otherwise(
        {
            redirectTo: "/"
        });
    }); // end config route
    app.constant("FB_URL", "https://tamcrudfire.firebaseIO.com")
})();