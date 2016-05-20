(function () {
  'use strict';

  var conf = angular.module('app.config');

  conf.config(['$httpProvider', function($httpProvider){



    // $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    // $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';

    
    // $httpProvider.defaults.headers.post['Content-Type'] = undefined;
    // $httpProvider.defaults.headers.put['Content-Type'] = undefined;
  }]);


  conf.config(['$resourceProvider', function($resourceProvider) {
    $resourceProvider.defaults.stripTrailingSlashes = false;
  }]);
  
  

  // conf.config(function(toastrConfig) {
  //   angular.extend(toastrConfig, {
  //     autoDismiss: false,
  //     containerId: 'toast-container',
  //     maxOpened: 0,
  //     newestOnTop: true,
  //     positionClass: 'toast-top-right',
  //     preventDuplicates: false,
  //     preventOpenDuplicates: false,
  //     target: 'body'
  //   });
  // });


  conf.config(['$mdThemingProvider',function($mdThemingProvider) {
    $mdThemingProvider.theme('default').primaryPalette('blue').accentPalette('light-blue');
  }]);

  var baseUrl = 'http://localhost:8000';
  conf.value('baseUrl', baseUrl)

  

})();


