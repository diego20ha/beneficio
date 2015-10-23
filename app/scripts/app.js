'use strict';

/**
 * @ngdoc overview
 * @name beneficioApp
 * @description
 * # beneficioApp
 *
 * Main module of the application.
 */
angular
  .module('beneficioApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
