var angular = require('angular');

module.exports = angular
    .module('pessoafisica', [])
    .directive('pessoaFisica', require('./pessoafisica.directive')).name;
