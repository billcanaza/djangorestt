(function(){
	'use strict';
	var serv = angular.module('app.modules.articulo.services');

	serv.factory('ApiArticulo', function($resource,baseUrl) {
		
		return {
			Articulo:  $resource(''+baseUrl+'/servicios/articulo/:id/', {'id': "@id"} ,{ 'update': { method:'PUT' } })
		};
	});



	serv.service('SArticulo', function(ApiArticulo,$mdDialog){

		this.listar = function(){
			var list = ApiArticulo.Articulo.query();
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
			var list = ApiArticulo.Articulo.delete({id : data.id});
			return list;
			
		};


		this.getarticulo
		 = function(data){
			return ApiArticulo.Articulo.get({id : data.id});
		};


		this.guardar = function(items){
			console.log(' mis datos',items);
			if(items){
				if(items.id){
					var updates = ApiArticulo.Articulo.update({id : items.id}, items);
					$mdDialog.hide();
					return updates;
				}else{
					var g = new ApiArticulo.Articulo(items);
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