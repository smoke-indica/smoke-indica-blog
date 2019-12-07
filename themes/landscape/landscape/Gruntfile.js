module.exports = function(grunt){
  grunt.initConfig({
    gitclone: {
      fontawesome: {
        options: {
          repository: 'https://github.com/FortAwesome/Font-Awesome.git',
          directory: 'tmp/fontawesome'
        },
      },
      fancybox: {
        options: {
          repository: 'https://github.com/fancyapps/fancyBox.git',
          directory: 'tmp/fancybox'
        }
      },
      jquery: {
        options: {
          repository: 'https://github.com/jquery/jquery.git',
          directory: 'tmp/jquery'
        }
      },
      bootstrap: {
        options: {
          repository: 'https://github.com/twbs/bootstrap.git',
          directory: 'tmp/bootstrap'
        }
      },
      popper: {
        options: {
          repository: 'https://github.com/FezVrasta/popper.js.git',
          directory: 'tmp/popper'
        }
      }
    },
    copy: {
      fontawesome: {
        expand: true,
        cwd: 'tmp/fontawesome/fonts/',
        src: ['**'],
        dest: 'source/css/fonts/'
      },
      fancybox: {
        expand: true,
        cwd: 'tmp/fancybox/source/',
        src: ['**'],
        dest: 'source/fancybox/'
      },
      jquery: {
        expand: true,
        cwd: 'tmp/jquery/source/',
        src: ['**'],
        dest: 'source/jquery/'
      },
      bootstrap: {
        expand: true,
        cwd: 'tmp/bootstrap/source/',
        src: ['**'],
        dest: 'source/bootstrap/'
      },
      popper: {
        expand: true,
        cwd: 'tmp/popper/source/',
        src: ['**'],
        dest: 'source/popper/'
      }
    },
    _clean: {
      tmp: ['tmp'],
      fontawesome: ['source/css/fonts'],
      fancybox: ['source/fancybox'],
      fancybox: ['source/jquery'],
      fancybox: ['source/bootstrap'],
      fancybox: ['source/popper']
    }
  });

  require('load-grunt-tasks')(grunt);

  grunt.renameTask('clean', '_clean');

  grunt.registerTask('fontawesome', ['gitclone:fontawesome', 'copy:fontawesome', '_clean:tmp']);
  grunt.registerTask('fancybox', ['gitclone:fancybox', 'copy:fancybox', '_clean:tmp']);
  grunt.registerTask('jquery', ['gitclone:jquery', 'copy:jquery', '_clean:tmp']);
  grunt.registerTask('bootstrap', ['gitclone:bootstrap', 'copy:bootstrap', '_clean:tmp']);
  grunt.registerTask('popper', ['gitclone:popper', 'copy:popper', '_clean:tmp']);
  grunt.registerTask('default', ['gitclone', 'copy', '_clean:tmp']);
  grunt.registerTask('clean', ['_clean']);
};
