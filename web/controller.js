
// Paso 1 iniciar nuestra aplicacion 

app = angular.module('myApp', ['ngMaterial'])


// Paso 2 Crear un Controlador 

app.controller('myControlador', function($scope,myServicio){
	$scope.mytitulo = 'Hola Mundo';
	
	$scope.click = function(){
		$scope.myvalor = "Hola Mundo Controller";
		// $scope.myvalor = myServicio.hola();
		// $scope.myvalor = myServicio.holaf();
	};

	$scope.listar = function(){
		$scope.personas = myServicio.listar();
	}


	// _____________________________________________________
	// basic crud


	 $scope.mypersona = {
	 	items: [
	 	{nombre:"Edwin", apellido:"Calsin"}, 
	 	{nombre:"Grace", apellido:"Manrique"},  
	 	{nombre:"Liliana", apellido:"Gonzales"}
	 	]
    };

    $scope.add = function() {
    	$scope.mypersona.items.push({
    		nombre: '',
            apellido: ''
        });
    };

    $scope.destroy = function(index) {
    	$scope.mypersona.items.splice(index, 1);
    };




});

app.service('myServicio', function(Api){
	
	this.hola=function(){
		valor="Hola Mundo Service"
		return valor
		
	};

	this.holaf=function(){
		valor=Api.Hola;
		return valor
		
	};


	

	this.listar=function(){
		valor=Api.Personas;
		return valor
		
	};

});

app.factory('Api', function() {
	var PersonaList = [
	{"nombre":"Edwin", "apellido":"Calsin"}, 
    {"nombre":"Grace", "apellido":"Manrique"},  
    {"nombre":"Liliana", "apellido":"Gonzales"}
    ]

	return {
		Hola: 'Hola Mundo Factory',
		Personas: PersonaList
	}


});
	
