// http://stackoverflow.com/questions/20087627/how-to-create-separate-angularjs-controller-files

(function () {

    angular.module("turtleApp")
           .controller("quizCtrl", quizController);
    quizController.$inject = ['quizMetrics', 'dataService'];


    function quizController(quizMetrics, dataService) {
        var numQuestionAnswered = 0;
        var vm = this;
        vm.quizMetrics = quizMetrics;
        vm.dataService = dataService;
        vm.activeQuestion = 0;
        vm.questionAnswered = function () {
            if (dataService.quizQuestions[vm.activeQuestion].selected !== null) {
                numQuestionAnswered++;
            }
        }
        vm.questionAnswered = function () {
            if (dataService.quizQuestions[vm.activeQuestion].selected !== null) {
                numQuestionsAnswered++;
            }
        }
        vm.setActiveQuestion = function () {
            var breakOut = false;
            var quizLength = dataService.quizQuestions.length - 1;

            while (!breakOut) {
                vm.activeQuestion = vm.activeQuestion < quizLength ? ++vm.activeQuestion : 0;
                if (dataService.quizQuestions[vm.activeQuestion].selected === null) {
                    breakOut = true;
                }
            }
        }
    }
})();

