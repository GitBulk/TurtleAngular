// http://stackoverflow.com/questions/20087627/how-to-create-separate-angularjs-controller-files

(function () {

    angular.module("turtleApp", [])
           .controller("quizCtrl", quizController);
    quizController.$inject = ['quizMetrics', 'dataService'];

    function quizController(quizMetrics, dataService) {
        var vm = this;
        vm.quizMetrics = quizMetrics;
        vn.dataService = dataService;
    }
})();

