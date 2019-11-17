'use strict'

module.exports = directive;

directive.$inject = [];

var Chart = require('chart.js');

function directive() {
    return {
        restrict: 'E',
        template: require('./dashboard.directive.html'),
        scope: {},
        bindToController: {},
        controller: controller,
        controllerAs: 'vm'
    };
}

controller.$inject = ['DashboardService'];
function controller(DashboardService) {
    var vm = this;

    DashboardService.melhoresClientes().then(function(data) {
        vm.melhoresClientes = data;
    });

    DashboardService.totalHospedesAno().then(function(data) {
        vm.totalHospedesAno = data;
    });

    DashboardService.funcionarioMaisLocacoesUltimosSeisMeses().then(function(data) {
        vm.funcionarioMaisLocacoesUltimosSeisMeses = data;
    });

    DashboardService.faturamentoProdutoMes().then(function(data) {
        vm.faturamentoProdutoMes = data;
    });

    DashboardService.faturamentoAnual().then(function(data) {
        vm.faturamentoAnual = data;
    });

    DashboardService.faturamentoUltimosDozeMeses().then(function(data) {
        vm.faturamentoUltimosDozeMeses = data;
    });

    DashboardService.faturamentoAnualCategoriaQuarto().then(function(data) {
        vm.faturamentoAnualCategoriaQuarto = data;
    });

    var melhoresClientes = document.getElementById('melhoresClientes').getContext('2d');
    var chart = new Chart(melhoresClientes, {
        type: 'line'             
    });
}
