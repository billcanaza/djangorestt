(function(){
	'use strict';
	var serv = angular.module('app.modules.persona.services');

	serv.factory('ApiPersona', function($resource,baseUrl) {
		
		return {
			Persona:  $resource(''+baseUrl+'/servicios/persona/:id/', {'id': "@id"} ,{ 'update': { method:'PUT' } })
		};
	});



	serv.service('SPersona', function(ApiPersona,$mdDialog){

		this.listar = function(){
			var list = ApiPersona.Persona.query();
			list.$promise.then(function(success){
				list = success;
				return list;
			},function(error){
				list = error;
				return list;
			});
			return list;
			
		};

		this.eliminar = function(data){
			var list = ApiPersona.Persona.delete({id : data.id});
			return list;
			
		};


		this.getpersona = function(data){
			return ApiPersona.Persona.get({id : data.id});
		};


		this.guardar = function(items){
			console.log(' mis datos',items);
			if(items){
				if(items.id){
					var updates = ApiPersona.Persona.update({id : items.id}, items);
					$mdDialog.hide();
					return updates;
				}else{
					var g = new ApiPersona.Persona(items);
					g.$save().then(function(success){
						$mdDialog.hide();
						return success;
					},function(error){
						console.log('--',error);
						$mdDialog.cancel();
						return error;
					});
				}
			}else {
				console.debug('no hay datos');
			}
		};
		

	});


	









})();