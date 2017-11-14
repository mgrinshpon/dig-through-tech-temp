module.exports = function(grunt) {

    grunt.initConfig({
	jshint: {
	    files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
	    options: {
		globals: {
		    jQuery: true
		}
	    }
	},
	watch: {
	    files: ['./css/*.scss'],
	    tasks: ['sass','cssmin']
	},
	php: {
	    dist: {
		options: {
		    port: 8080,
		    keepalive: 'true'
		}
	    }
	},
	wiredep: {

	    task: {

		// Point to the files that should be updated when
		// you run `grunt wiredep`
		src: [
		    'templates/layout/header.twig.html'   // .html support...
		],

		options: {
		    // See wiredep's configuration documentation for the options
		    // you may pass:

		    // https://github.com/taptapship/wiredep#configuration
		}
	    }
	},
	sass: {
	    options: {
		sourceMap: true
	    },
	    dist: {
		files: {
		    'css/main.css': 'css/main.scss'
		}
	    }
	},
	cssmin: {
	    target: {
		files: [{
		    expand: true,
		    cwd: 'css',
		    src: ['*.css', '!*.min.css'],
		    dest: 'css',
		    ext: '.min.css'
		}]
	    }
	}
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-php');
    grunt.loadNpmTasks('grunt-wiredep');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    
    grunt.registerTask('default', ['jshint']);

};
