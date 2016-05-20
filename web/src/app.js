(function () {
  'use strict';

  angular.module('app', ['app.config','app.routes','app.modules.persona','app.modules.articulo','app.modules.libro']);
  angular.module('app.config', ['ngMaterial','ngResource','ngAnimate']);
  angular.module('app.routes', ['ngRoute']);

})();