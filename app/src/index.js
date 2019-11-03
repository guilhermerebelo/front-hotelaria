var angular = require('angular');

require('./hotelaria.css');

module.exports = angular
    .module('hotelaria', [])
    .directive('hotelaria', require('./hotelaria.directive')).name;
