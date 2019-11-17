var angular = require('angular');

module.exports = angular
    .module('hotelaria', [
        require('restangular'),
    ])
    .config(function(RestangularProvider){
        RestangularProvider.setBaseUrl('http://localhost:8080/hotel/api')
    })
    .factory('DashboardService', require('./service'))
    .directive('dashboard', require('./dashboard.directive')).name;
