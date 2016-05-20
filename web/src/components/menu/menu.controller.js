'use strict';

  app.controller('MenuCtrl', function ($rootScope, $scope, $location, Auth,HALTalkResource) {
    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.select= function(index){
       $scope.selected=index;
    }


    $scope.isAlmacen= function(){
      return false;
    }


    $scope.logout = function() {
        console.log('FFFFFFFFFFFEEEEEEEEEEEWWWWWWWWWW');

      Auth.logout(function(successLogout){
          console.log('eeeeeeeeeeeeee  '+successLogout);
          if(successLogout)
              window.location='/';
       });
      //   $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });