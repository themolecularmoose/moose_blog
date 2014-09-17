module.exports = function(grunt) {
  grunt.initConfig({
    gitpull: {
      your_target: {
        options: {

        }
      }
    },
  });

  grunt.loadNpmTasks('grunt-git');
  grunt.registerTask('default', ['gitpull']);
};
