module.exports = function(grunt) {
  require('jit-grunt')(grunt);
  grunt.initConfig({
    // jshint: {
    //   files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
    //   options: {
    //     globals: {
    //       jQuery: true
    //     }
    //   }
    // },
    sass: {
      dist: {
        options: {
          sourcemap: false,
          compress: false,
          yuicompress: false,
          style: 'expanded',
        },
        files: {
          "src/css/index.css": "src/sass/index.scss",
          "src/css/home.css": "src/sass/home.scss",
          "src/css/cover.css": "src/sass/cover.scss",
          "src/css/service.css": "src/sass/service.scss",
          },
        }
      },
  
    
    watch: {
      // files: ['<%= jshint.files %>'],
      tasks: ['sass'],
      styles: {
          files: 'src/**/*.scss',
          tasks: ['sass'],
          options: {
            nospawn: true
          }
        }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.registerTask('default', ['sass', 'watch']);

};