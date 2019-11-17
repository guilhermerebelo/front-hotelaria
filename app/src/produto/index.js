var angular = require('angular');

module.exports = angular
    .module('produto', [])
    .directive('produto', require('./produto.directive')).name;
