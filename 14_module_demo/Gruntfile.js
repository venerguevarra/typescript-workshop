module.exports = function(grunt) {
    // Load Grunt tasks declared in the package.json file.
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        DEVELOPMENT_PATH: './src/',
        DISTRIBUTION_PATH: './bin/',

        /**
         * The different constant names that will be use to build our html files.
         * @example <!-- @if NODE_ENV == 'DEVELOPMENT' -->
         */
        env: {
            src: {
                NODE_ENV : 'local'
            },
            dev: {
                src : ".env"
            }
        },

        preprocess : {
            // Task to create the index.html file that will be used during development.
            // Passes the app version and creates the /index.html
            src : {
                src : './public/index.html',
                dest : '<%= DISTRIBUTION_PATH %>' + '/public/index.html',
                options : {
                    context : {
                        APP_VERSION : '<%= pkg.version %>',
                        APP_ENV: '<%= __ENV.NODE_ENV %>'
                    }
                }
            }
        },

         /**
         * Creates a node.js Express Server to test our code in a server like environment.
         * Note: We are using the watch task to keep the server running.
         */
        express: {
            start: {
                options: {
                    script: '<%= DISTRIBUTION_PATH %>' + 'app.js',
                }
            }
        },

        watch: {
            src: {
                options: {
                    livereload: true
                },
                files: [
                    '<%= DEVELOPMENT_PATH %>' + '**/*.ts',
                    '<%= DEVELOPMENT_PATH %>' + 'index.template.html'
                ],
                tasks: ['src']
            }
        },

        copy: {
            web:  {
                files: [
                    { expand: true, cwd: 'public', src: 'favicon.ico', dest: '<%= DISTRIBUTION_PATH %>/public' },
                    { expand: true, cwd: 'public', src: ['media/**/*'], dest: '<%= DISTRIBUTION_PATH %>/public' }
                ]
            }
        },

        /**
         * Cleans or deletes our production folder before we create a new production build.
         */
        clean: {
            web: ['<%= DISTRIBUTION_PATH %>' + '/**/*']
        },

        ts: {
            default : {
              tsconfig: './tsconfig.json'
            }
        },

        open : {
            dev : {
              path: 'http://127.0.0.1:8000'
            }
        }

    });

    grunt.registerTask('default', [
        'local'
    ]);

    grunt.registerTask('local', [
        'env:src',
        'server'
    ]);

    grunt.registerTask('dev', [
        'env:dev',
        'server'
    ]);

    grunt.registerTask('server', [
        'clean',
        'copy:web',
        'set-env',
        'preprocess:src',
        'ts',
        'express:start',
        'open',
        'watch'
    ]);

    grunt.registerTask('set-env', 'set_environment_variables', function() {
        grunt.config('__ENV', process.env);
    });
}