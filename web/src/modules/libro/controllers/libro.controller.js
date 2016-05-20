
(function () {
  'use strict';
  var app = angular.module('app.modules.libro.controllers');

  app.controller('Libro', function($scope,$q,$http,$timeout,$mdDialog,SLibro){

   $scope.listar = function() {
   	var lista = SLibro.listar();
   	lista.$promise.then(function(success){
   		$scope.libro = success;
   	},function(error){
   		console.error('>> error al listar',error);
   	});
   };

   $scope.listar();

   $scope.formulario = function(data) {
    if(data){  // <-------- ESTO AUMENTE
      $scope.items='';
      var d = SLibro.getlibro(data);
      d.$promise.then(function(success){
        $scope.items = success;
      },function(error){
        console.error(error);
        $scope.items='';
      });
    } // <-------- ESTO AUMENTE
    $mdDialog.show({
   		scope: $scope.$new(),
        controller: 'Libro',
        templateUrl: '/src/views/libro/form.html',
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
      SLibro.guardar($scope.items);


    };


    // componente: cancelar registro o formulario
    $scope.cancelar = function() {
      $mdDialog.cancel();
    };


    $scope.eliminar = function(data) {
    var e = SLibro.eliminar(data);
    e.$promise.then(function(success){
      $scope.listar();
    },function(error){
      $scope.listar();
    });
   };

  });

})();
