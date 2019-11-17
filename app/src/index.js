var angular = require('angular');

require('./hotelaria.css');
// require('chart.js')

module.exports = angular
    .module('hotelaria', [
        require('restangular'),
        require('./dashboard'),
    ])
    .config(function(RestangularProvider){
        RestangularProvider.setBaseUrl('http://localhost:8080/hotel/api')
    })
    .directive('hotelariaDashboard', require('./hotelaria.directive')).name;
