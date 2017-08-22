module.exports = function(grunt) {
      grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        mochaTest: {
            src: ['test/test-*.js'],
            options: {
                timeout: 6000,
                reporter: 'spec'
            }

          }
      });
    
      grunt.loadNpmTasks('grunt-mocha-test');

      grunt.registerTask('default', ['mochaTest']);    
};