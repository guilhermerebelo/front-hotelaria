'use strict'

var _ = require('lodash');

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

controller.$inject = ['DashboardService', '$q'];
function controller(DashboardService, $q) {
    var vm = this;

    DashboardService.melhoresClientes().then(function (data) {
        new Chart(document.getElementById('melhoresClientes').getContext('2d'), {
            type: 'doughnut',
            data: {
                labels: _.map(data, function (value) { return value[1] }),
                datasets: [
                    {
                        backgroundColor:
                            [
                                "#2ecc71",
                                "#3498db",
                                "#95a5a6",
                                "#9b59b6",
                                "#f1c40f",
                                "#e74c3c",
                                "#34495e"
                            ],
                        data: _.map(data, function (value) { return value[0] })
                    }
                ]
            }
        });
    });

    DashboardService.totalHospedesAno().then(function (data) {
        new Chart(document.getElementById('totalHospedesAno').getContext('2d'), {
            type: 'line',
            data: {
                labels: _.map(data, function (value) { return value[1] }),
                datasets: [
                    {
                        label: "Total de hóspedes por ano",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(75,192,192,0.4)",
                        borderColor: "rgba(75,192,192,1)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(75,192,192,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 5,
                        pointHitRadius: 10,
                        backgroundColor: [
                            "#2ecc71",
                            "#3498db",
                            "#95a5a6"
                        ],
                        data: _.map(data, function (value) { return value[0] })
                    }
                ]
            }
        });
    });

    DashboardService.funcionarioMaisLocacoesUltimosSeisMeses().then(function (data) {
        new Chart(document.getElementById('funcionarioMaisLocacoesUltimosSeisMeses').getContext('2d'), {
            type: 'line',
            data: {
                labels: _.map(data, function (value) { return value[2] + " / " + value[1].split(' ')[0]}),
                datasets: [
                    {
                        label: "Funcionários que mais fizeram locações",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(75,192,192,0.4)",
                        borderColor: "rgba(75,192,192,1)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(75,192,192,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 5,
                        pointHitRadius: 10,
                        backgroundColor: [
                            "#2ecc71",
                            "#3498db",
                            "#95a5a6"
                        ],
                        data: _.map(data, function (value) { return value[0] })
                    }
                ]
            }
        });
    });

    DashboardService.faturamentoProdutoMes().then(function (data) {
        new Chart(document.getElementById('faturamentoProdutoMes').getContext('2d'), {
            type: 'doughnut',
            data: {
                labels: _.map(data, function (value) { return value[0] }),
                datasets: [
                    {
                        backgroundColor:
                            [
                                "#2ecc71",
                                "#3498db",
                                "#95a5a6",
                                "#9b59b6",
                                "#f1c40f",
                                "#e74c3c",
                                "#34495e"
                            ],
                        data: _.map(data, function (value) { return value[2] })
                    }
                ]
            }
        });
    });

    DashboardService.faturamentoAnualCategoriaQuarto().then(function (data) {
        new Chart(document.getElementById('faturamentoAnualCategoriaQuarto').getContext('2d'), {
            type: 'doughnut',
            data: {
                labels: _.map(data, function (value) { return value[2] }),
                datasets: [
                    {
                        backgroundColor:
                            [
                                "#2ecc71",
                                "#3498db",
                                "#95a5a6",
                                "#9b59b6",
                                "#f1c40f",
                                "#e74c3c",
                                "#34495e"
                            ],
                        data: _.map(data, function (value) { return value[0] })
                    }
                ]
            }
        });
    });

    DashboardService.faturamentoAnual().then(function (data) {
        vm.faturamentoAnualQuartos = "R$" + data[0] + ",00";
    });

    DashboardService.faturamentoUltimosDozeMeses().then(function (data) {
        vm.faturamentoTotal = "R$" + data[0] + ",00";
    });

    $q.all([
            DashboardService.faturamentoUltimosDozeMeses(),
            DashboardService.faturamentoAnual()
    ]).then(function(data) {
        vm.faturamentoProdutos = "R$" + (data[0] - data[1]) + ",00";
    })
}
