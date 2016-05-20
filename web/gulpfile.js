(function(){
	'use strict';

	var gulp = require('gulp');
	var connect = require('gulp-connect');
	



	gulp.task('run', function() {
		connect.server({
			port: 9000,
			host: 'localhost'
		});
	});

})();