var angular = require('angular');

module.exports = angular
    .module('funcionario', [])
    .directive('funcionario', require('./funcionario.directive')).name;
