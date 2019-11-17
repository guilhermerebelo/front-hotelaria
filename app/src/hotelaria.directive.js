'use strict';

var _ = require('lodash');

var MENU_OPCOES = [
    {
        key: "ALUGUEL",
        label: "ALUGUEL",
        ativo: true,
        diretiva: '<aluguel><aluguel>'
    },
    {
        key: "PRODUTOS",
        label: "PRODUTOS",
        ativo: false,
        diretiva: '<produto><produto>'

    },
    {
        key: "PESSOAS_FISICAS",
        label: "PESSOAS FÍSICAS",
        ativo: false,
        diretiva: '<pessoa-fisica><pessoa-fisica>'

    },
    {
        key: "FUNCIONARIOS",
        label: "FUNCIONÁRIOS",
        ativo: false,
        diretiva: '<funcionario><funcionario>'

    },
    {
        key: "HOSPEDES",
        label: "HOSPEDES",
        ativo: false,
        diretiva: '<hospede><hospede>'

    },
    {
        key: "QUARTO",
        label: "QUARTO",
        ativo: false,
        diretiva: '<quarto><quarto>'

    },
    {
        key: "CATEGORIA_QUARTO",
        label: "CATEGORIA QUARTO",
        ativo: false,
        diretiva: '<categoria-quarto><categoria-quarto>'

    },
    {
        key: "HOTEL",
        label: "HOTEL",
        ativo: false,
        diretiva: '<hotel><hotel>'
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

    vm.selecionado = "ALUGUEL";
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
