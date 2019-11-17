var angular = require('angular');

module.exports = angular
    .module('dashboard', [])
    .factory('DashboardService', require('./service'))
    .directive('dashboard', require('./dashboard.directive')).name;
