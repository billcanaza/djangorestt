
(function () {
  'use strict';
  var app = angular.module('app.modules.articulo.controllers');

  app.controller('Articulo', function($scope,$q,$http,$timeout,$mdDialog,SArticulo){

   $scope.listar = function() {
   	var lista = SArticulo.listar();
   	lista.$promise.then(function(success){
   		$scope.articulo = success;
   	},function(error){
   		console.error('>> error al listar',error);
   	});
   };

   $scope.listar();

   $scope.formulario = function(data) {
    if(data){  // <-------- ESTO AUMENTE
      $scope.items='';
      var d = SArticulo.getarticulo(data);
      d.$promise.then(function(success){
        $scope.items = success;
      },function(error){
        console.error(error);
        $scope.items='';
      });
    } // <-------- ESTO AUMENTE
    $mdDialog.show({
   		scope: $scope.$new(),
        controller: 'Articulo',
        templateUrl: '/src/views/articulo/form.html',
        parent: angular.element(document.body),
        clickOutsideToClose:true
    }).then(function(){
    	$scope.listar();
        $scope.items='';
    }, function() {
    });
   };


   // componente: guardar registro o formulario
    $scope.guardarregistro = function(items){
      console.log('--c -->',items);
      SArticulo.guardar($scope.items);


    };

    // componente: cancelar registro o formulario
    $scope.cancelar = function() {
      $mdDialog.cancel();
    };
   $scope.eliminar = function(data) {
    var e = SArticulo.eliminar(data);
    e.$promise.then(function(success){
      $scope.listar();
    },function(error){
      $scope.listar();
    });
   };

  });

})();