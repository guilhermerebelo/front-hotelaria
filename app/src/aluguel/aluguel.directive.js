module.exports = directive;

directive.$inject = [];

function directive() {
    return {
        restrict: 'E',
        template: require('./aluguel.directive.html'),
        scope: {},
        bindToController: {},
        controller: controller,
        controllerAs: 'vm'
    };
}

controller.$inject = [];
function controller() {
    var vm = this;
}
