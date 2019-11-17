var angular = require('angular');

module.exports = angular
    .module('hotel', [])
    .directive('hotel', require('./hotel.directive')).name;
