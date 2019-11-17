'use strict'

module.exports = Service;

Service.$inject = ['Restangular'];
function Service(Restangular) {
    var PATH = 'dashboard';

    return {
        melhoresClientes: melhoresClientes,
        totalHospedesAno: totalHospedesAno,
        funcionarioMaisLocacoesUltimosSeisMeses: funcionarioMaisLocacoesUltimosSeisMeses,
        faturamentoProdutoMes: faturamentoProdutoMes,
        faturamentoAnual: faturamentoAnual,
        faturamentoUltimosDozeMeses: faturamentoUltimosDozeMeses,
        faturamentoAnualCategoriaQuarto: faturamentoAnualCategoriaQuarto
    };


    function melhoresClientes() {
        return Restangular
            .one(PATH, "melhores-clientes")
            .get()
            .then(Restangular.stripRestangular);
    }

    function totalHospedesAno() {
        return Restangular
            .one(PATH, "total-hospedes-ano")
            .get()
            .then(Restangular.stripRestangular);
    }

    function funcionarioMaisLocacoesUltimosSeisMeses() {
        return Restangular
            .one(PATH, "funcionario-mais-locacoes-ultimos-seis-meses")
            .get()
            .then(Restangular.stripRestangular);
    }

    function faturamentoProdutoMes() {
        return Restangular
            .one(PATH, "faturamento-produto-mes")
            .get()
            .then(Restangular.stripRestangular);
    }

    function faturamentoAnual() {
        return Restangular
            .one(PATH, "faturamento-anual")
            .get()
            .then(Restangular.stripRestangular);
    }

    function faturamentoUltimosDozeMeses() {
        return Restangular
            .one(PATH, "faturamento-ultimos-doze-meses")
            .get()
            .then(Restangular.stripRestangular);
    }

    function faturamentoAnualCategoriaQuarto() {
        return Restangular
            .one(PATH, "faturamento-anual-categoria-quarto")
            .get()
            .then(Restangular.stripRestangular);
    }
}