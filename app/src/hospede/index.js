var angular = require('angular');

module.exports = angular
    .module('hospede', [])
    .directive('hospede', require('./hospede.directive')).name;
