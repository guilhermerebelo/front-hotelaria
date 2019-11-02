'use strict';

module.exports = ComponenteModeloDirective;

ComponenteModeloDirective.$inject = [];

function ComponenteModeloDirective() {
    return {
        restrict: 'E',
        template: require('./componente-modelo.directive.html'),
        scope: {},
        controller: ComponenteModeloController,
        controllerAs: 'vm'
    };
}

ComponenteModeloController.$inject = [];
function ComponenteModeloController() {
    var vm = this;

    vm.titulo = 'Componente modelo';
}
