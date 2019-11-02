'use strict';

module.exports = hotelariaDirective;

hotelariaDirective.$inject = [];

function hotelariaDirective() {
    return {
        restrict: 'E',
        template: require('./hotelaria.directive.html'),
        scope: {},
        controller: hotelariaController,
        controllerAs: 'vm'
    };
}

hotelariaController.$inject = [];
function hotelariaController() {
    var vm = this;

    vm.titulo = 'Componente modelo';
}
