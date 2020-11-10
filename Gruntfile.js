module.exports = function(grunt) {
  require('jit-grunt')(grunt);
  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    less: {
      dist: {
        options: {
          sourcemap: false,
          compress: false,
          yuicompress: false,
          style: 'expanded',
        },
        files: {
          "src/css/index.css": "src/less/index.less",
          },
        }
      },
  
    
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint'],
      tasks: ['less'],
      styles: {
          files: 'src/**/*.less',
          tasks: ['less'],
          options: {
            nospawn: true
          }
        }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.registerTask('default', ['less', 'watch']);
  grunt.registerTask(['jshint', 'watch']);
};