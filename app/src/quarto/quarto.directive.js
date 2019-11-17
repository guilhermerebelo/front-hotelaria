module.exports = directive;

directive.$inject = [];

function directive() {
    return {
        restrict: 'E',
        template: require('./quarto.directive.html'),
        scope: {},
        bindToController: {},
        controller: controller,
        controllerAs: 'vm'
    };
}

controller.$inject = [];
function controller() {
    var vm = this;

    var PATH = 'tipo-quarto';

    vm.listagem = [];

    vm.salvar = salvar;
    vm.buscar = buscar;
    vm.listarTudo = listarTudo;
    vm.remover = remover;

    listarTudo();

    function salvar() {
        (vm.categoriaQuarto.id
            ? Restangular.one(PATH, vm.categoriaQuarto.id).customPUT(vm.categoriaQuarto)
            : Restangular.all(PATH).customPOST(vm.categoriaQuarto))
            .then(remover)
            .then(listarTudo);

        function remover() {
            delete vm.categoriaQuarto
        }
    }

    function buscar(id) {
        Restangular
            .one(PATH, id)
            .get()
            .then(function (data) {
                vm.categoriaQuarto = data;
                //abrir colapse
            });
    }

    function listarTudo() {
        Restangular
            .one(PATH)
            .get()
            .then(list);

            function list(data) {
                vm.listagem = data.content;
            }
    }

    function remover(id) {
        Restangular
            .one(PATH, id)
            .remove()
            .then(listarTudo);
    }
}
