/**
 * Created by carlos on 9/15/15.
 */
'use strict';
module.exports = function(grunt){
    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

      sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'development/css/app.css':'bower_components/foundation/scss/*.scss'
                }
            }
      },
      browserSync: {
            bsFiles :{ 
                src: ['development/css/*.css', 'development/*.html', 'development/js/*.js']
            },
            options: {
                server: {
                    baseDir: 'development/'
                }
             }
            },
        copy: {
            main: {
                files: [

                        {
                        expand: true,
                        cwd: 'bower_components',
                        flatten:true,
                        src: [
                                'swiper/dist/css/*.css'

                             ],

                        dest: 'development/css/',
                    }

                ]
            }
        },

        imagemin: {

            dist: {
                files:[
                    {
                        expand: true,
                        cwd: 'development/medias/images',
                        src: '{,*/}*.{gif,jpeg,jpg,png}',
                        dest: 'distribution/medias/images'
                    }
                ]
            }
        },

        uglify: {
            myTarget: {
                files: {
                    'development/js/output.min.js': [
                        'development/foundation/js/*.js',
                        'bower_components/swiper/dist/js/swiper.js'],
                    'development/js/jquery.min.js':'bower_components/jquery/dist/jquery.js'
                }
            }
        },

    });



    grunt.registerTask('server', 'browserSync');
    grunt.registerTask('compile', ['sass']);

    grunt.registerTask('dist', 'browserSync');

    grunt.registerTask('build', ['copy', 'sass','uglify', 'browserSync']);

};
