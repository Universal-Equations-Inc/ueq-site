/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
module.exports = function (grunt) {
    
    'use strict';
    // Project configuration.
    grunt.initConfig({
        
        pkg: grunt.file.readJSON('package.json'),
        
        jshint: {
            options: {
                esversion: 6,
                node: true,
                laxcomma: true
            },
            files: ['*.js','src/routes/*.js','src/views/*.js']
        },
        
        watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['jshint']
        }
        
    });
    
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    
    grunt.registerTask('default', ['jshint']);
};
