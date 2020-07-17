module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean : {
            dist: ['dist/']
        },
        copy: {
            srcFiles: {
                files: [
                    {
                        expand : true,
                        cwd : 'src/app/',
                        src : ['**/*.js', '**/*.html'],
                        dest : 'dist/app'
                    },
                    {
                        expand : true,
                        cwd : 'src/img/',
                        src : '**/*',
                        dest : 'dist/img'
                    },
                    {
                        expand : true,
                        cwd : 'src/js/',
                        src : '**/*',
                        dest : 'dist/js'
                    },
                    {
                        expand : true,
                        cwd : 'src/css/webfonts/',
                        src : '**/*',
                        dest : 'dist/css/webfonts'
                    },
                    {
                        src : 'src/css/style.css',
                        dest : 'dist/css/style.css'
                    },
                    {
                        src : 'src/config.js',
                        dest : 'dist/config.js'
                    }
                ]
            },
            nodeModules: {
                files: [
                    {
                        src : 'node_modules/jquery/dist/jquery.min.js',
                        dest : 'dist/js/libs/jquery.min.js'
                    },
                    {
                        src : 'node_modules/angular/angular.min.js',
                        dest : 'dist/js/libs/angular.min.js'
                    },
                    {
                        src : 'node_modules/angular-route/angular-route.min.js',
                        dest : 'dist/js/libs/angular-route.min.js'
                    },
                    {
                        src : 'node_modules/angular-translate/dist/angular-translate.min.js',
                        dest : 'dist/js/libs/angular-translate.min.js'
                    }
                ]
            },
        },
        processhtml : {
            index : {
                files : {
                    'dist/index.html' : ['src/index.html']
                }
            }
        },
        'string-replace': {
            version: {
                files: [{
                    src: 'dist/index.html',
                    dest: 'dist/index.html'
                }],
                options: {
                    replacements: [{
                        pattern: '###VERSION_COMPIL###',
                        replacement: '© AngularJS Sample Structure | v<%= pkg.version %> | Sébastien Montlibert | ' + ('00' + new Date().getDate()).slice(-2)+'-'+('00' + (new Date().getMonth()+1)).slice(-2)+'-'+new Date().getFullYear()
                    }]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-string-replace');

    grunt.registerTask('compil', [
        'clean',
        'copy',
        'processhtml',
        'string-replace'
    ]);
};
