var angular = require('angular');

require('./hotelaria.css');

module.exports = angular
    .module('hotelaria', [
        require('restangular'),

        require('./aluguel/index'),
        require('./categoriaquarto/index'),
        require('./funcionario/index'),
        require('./hospede/index'),
        require('./hotel/index'),
        require('./pessoafisica/index'),
        require('./produto/index'),
        require('./quarto/index')
    ])
    .config(function(RestangularProvider){
        RestangularProvider.setBaseUrl('http://localhost:8080/hotel/api')
    })
    .directive('hotelariaDashboard', require('./hotelaria.directive')).name;
