module.exports = directive;

directive.$inject = [];

function directive() {
    return {
        restrict: 'E',
        template: require('./pessoafisica.directive.html'),
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
