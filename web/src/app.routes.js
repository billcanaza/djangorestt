(function () {
  'use strict';
  var route = angular.module('app.routes');

  route.config(['$routeProvider',function($routeProvider) {
    var r = $routeProvider;

 
    r.when('/persona', { 
      templateUrl: '/src/views/persona/index.html',
      controller: 'Persona' });

    r.when('/articulo', { 
      templateUrl: '/src/views/articulo/index.html',
      controller: 'Articulo' });
    
    r.when('/libro', { 
      templateUrl: '/src/views/libro/index.html',
      controller: 'Libro' });

   
  }]);


})();

