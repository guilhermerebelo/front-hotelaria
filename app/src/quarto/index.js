var angular = require('angular');

module.exports = angular
    .module('quarto', [])
    .directive('quarto', require('./quarto.directive')).name;
