'use strict';

var angular = require('angular');

module.exports = angular
    .module('app', [require('../../src/index')])
    .controller('app.MainController', require('./main.controller')).name;
