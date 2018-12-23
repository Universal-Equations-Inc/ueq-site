/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var path = require('path');

module.exports = function (grunt) {
    
    'use strict';

          require('load-grunt-config')(grunt, {
          	configPath: path.join(process.cwd(), 'scripts/grunt/config')
          });

    // Project configuration.
    grunt.initConfig({
        
        pkg: grunt.file.readJSON('package.json'),
        
        jshint: {
            options: {
                esversion: 6,
                node: true,
                laxcomma: true
            },
            files: ['*.js','src/js/routes/*.js']
        },

        watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['jshint']
        }
        
    });
    
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    
    grunt.registerTask('default', ['jshint']);

      grunt.loadNpmTasks("@oracle/grunt-oraclejet");

      grunt.registerTask("build", "Public task. Calls oraclejet-build to build the oraclejet application. Can be customized with additional build tasks.", function (buildType) {
        grunt.task.run([`oraclejet-build:${buildType}`]);
      });

      grunt.registerTask("serve", "Public task. Calls oraclejet-serve to serve the oraclejet application. Can be customized with additional serve tasks.", function (buildType) {
        grunt.task.run([`oraclejet-serve:${buildType}`]);
      });
};
