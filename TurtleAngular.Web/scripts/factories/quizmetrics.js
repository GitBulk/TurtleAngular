/// <reference path="../angular.min.js" />

(function () {
    angular.module("turtleApp")
        .factory("quizMetrics", quizMetrics);
    function quizMetrics() {
        var quizObj = {
            quizActive: false,
            changeState: changeState
        };
        return quizObj;

        function changeState() {
            quizObj.quizActive = true;
        }
    }
})()