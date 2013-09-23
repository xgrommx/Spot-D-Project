module.exports = function (grunt) {
	'use strict';

	grunt.initConfig({
		compass: {
			dev: {
				options: {
					config: 'config.rb',
					sassDir: 'app/scss',
					cssDir: 'app/css'
				}
			},
			dist: {
				options: {
					config: 'config.rb',
					sassDir: 'app/scss',
					cssDir: 'dist/css',
					outputStyle: 'compressed'
				}
			}
		},
		watch: {
			options: {
				livereload: true,
			},
      files: ['app/scss/*.scss', 'app/index.html', 'app/js/*.js'],
      tasks: 'compass:dev'
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');

	grunt.registerTask('default','watch');
};
