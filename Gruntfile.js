module.exports = function(grunt) {
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    sass: {
      dist: {
        options: {
          loadPath: [
            'bower_components/foundation/scss'
          ]
        },
        files: {
          'grid.css': 'src/grid.scss'
        }
      }
    },

    clean: {
      sassCache: ['.sass-cache']
    }
  });

  grunt.registerTask('default', [
    'sass',
    'clean'
  ]);
};
