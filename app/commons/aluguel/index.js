var angular = require('angular');

module.exports = angular
    .module('aluguel', [])
    .directive('aluguel', require('./aluguel.directive')).name;
