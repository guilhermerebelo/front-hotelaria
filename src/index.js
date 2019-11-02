var angular = require('angular');

require('./componente-modelo.css');

module.exports = angular
    .module('componente-modelo', [])
    .directive('componenteModelo', require('./componente-modelo.directive')).name;
