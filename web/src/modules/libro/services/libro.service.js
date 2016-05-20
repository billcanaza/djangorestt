(function(){
	'use strict';
	var serv = angular.module('app.modules.libro.services');

	serv.factory('ApiLibro', function($resource,baseUrl) {
		
		return {
			Libro:  $resource(''+baseUrl+'/servicios/libro/:id/', {'id': "@id"} ,{ 'update': { method:'PUT' } })
		};
	});



	serv.service('SLibro', function(ApiLibro,$mdDialog){

		this.listar = function(){
			var list = ApiLibro.Libro.query();
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
			var list = ApiLibro.Libro.delete({id : data.id});
			return list;
			
		};


		this.getlibro = function(data){
			return ApiLibro.Libro.get({id : data.id});
		};


		this.guardar = function(items){
			console.log(' mis datos',items);
			console.log('mis datos autor',items.autor)
			if(items){
				if(items.id){
					var updates = ApiLibro.Libro.update({id : items.id}, items);
					$mdDialog.hide();
					return updates;
				}else{

					var g = new ApiLibro.Libro(items);
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