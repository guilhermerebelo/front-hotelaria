'use strict';

var _ = require('lodash');

var MENU_OPCOES = [
    {
        key: "DASHBOARD",
        label: "GRÁFICOS",
        ativo: true,
        diretiva: '<aluguel><aluguel>'
    }
]

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

    vm.selecionado = "DASHBOARD";
    vm.menuOpcoes = MENU_OPCOES;

    vm.selecionarItemMenu = selecionarItemMenu;

    function selecionarItemMenu(index) {
        _.forEach(vm.menuOpcoes, function (item, i) {
            item.ativo = index == i;

            if (item.ativo) {
                vm.selecionado = item.key;
            }
        });
    }
}
