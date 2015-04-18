module.exports = function(grunt) {
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    sass: {
      dist: {
        options: {
          loadPath: [
            'temp/scss'
          ]
        },
        files: {
          'grid.css': 'src/grid.scss'
        }
      }
    },

    clean: {
      sassCache: ['.sass-cache']
    },

    bump: {
      options: {
        files: ['package.json', 'bower.json'],
        push: false
      }
    }
  });

  grunt.registerTask('default', [
    'sass',
    'clean'
  ]);
};
