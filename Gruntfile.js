module.exports = function(grunt) {

	// Configuring the Grunt
	grunt.initConfig({
		//retrieving the information from package.jason 
		pkg: grunt.file.readJSON('package.json'),
		
		//validate Java script files using jshint configuration
		jshint: {
			options: {
				reporter: require('jshint-stylish') 
			},
			build: ['Gruntfile.js', 'Grunt/src/**/progressive-bar.js']
		},
		
		// minifying javascripts
		uglify: {
			options: {
				banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
			},
			build: {
				files: {
					'Grunt/dest/js/progressive-bar.min.js' : 'Grunt/src/js/progressive-bar.js',
					'Grunt/dest/js/jquery-1.11.3.min.js' : 'Grunt/src/js/jquery-1.11.3.js',
					'Grunt/dest/js/ractive.min.js' : 'Grunt/src/js/ractive.js',
					'Grunt/dest/js/ractive-load.min.js' : 'Grunt/src/js/ractive-load.js'
						}
			}
		},
		
		// compiling less stylesheets to css
		less: {
			build: {
				files: {
					'Grunt/dest/css/progressbar.css': 'Grunt/src/css/progressbar.less',
					'Grunt/src/css/progressbar.css': 'Grunt/src/css/progressbar.less'
				}
			}
		},
		
		// css minification
		cssmin: {
			options: {
				banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
			},
			build: {
				files: {
					'Grunt/dest/css/progressbar.min.css': 'Grunt/src/css/progressbar.css'
				}
			}
		}
		
		

		
	});
	
	// Loading grunt plugins configured in package.json
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['jshint', 'uglify', 'cssmin', 'less']); 
	
};
		
