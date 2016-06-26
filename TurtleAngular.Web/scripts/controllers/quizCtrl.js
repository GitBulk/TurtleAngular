// http://stackoverflow.com/questions/20087627/how-to-create-separate-angularjs-controller-files

(function () {

    angular.module("turtleApp", [])
           .controller("quizCtrl", quizController);
    function quizController($scope) {
        var vm = this;
    }
})();

