
(function () {
  'use strict';
  var app = angular.module('app.modules.persona.controllers');

  app.controller('Persona', function($scope,$q,$http,$timeout,$mdDialog,SPersona){

   $scope.listar = function() {
   	var lista = SPersona.listar();
   	lista.$promise.then(function(success){
   		$scope.persona = success;
   	},function(error){
   		console.error('>> error al listar',error);
   	});
   };

   $scope.listar();

   $scope.formulario = function(data) {
    if(data){  // <-------- ESTO AUMENTE
      $scope.items='';
      var d = SPersona.getpersona(data);
      d.$promise.then(function(success){
        $scope.items = success;
      },function(error){
        console.error(error);
        $scope.items='';
      });
    } // <-------- ESTO AUMENTE
    $mdDialog.show({
   		scope: $scope.$new(),
        controller: 'Persona',
        templateUrl: '/src/views/persona/form.html',
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
      SPersona.guardar($scope.items);


    };


    // componente: cancelar registro o formulario
    $scope.cancelar = function() {
      $mdDialog.cancel();
    };


    $scope.eliminar = function(data) {
    var e = SPersona.eliminar(data);
    e.$promise.then(function(success){
      $scope.listar();
    },function(error){
      $scope.listar();
    });
   };






  });


  



})();
