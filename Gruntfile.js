module.exports = function(grunt) {
  grunt.initConfig({
    gitpull: {
      your_target: {
        options: {
          // use defaults
        }
      }
    },
  });

  grunt.loadNpmTasks('grunt-git');
  grunt.registerTask('default', ['gitpull']);

  grunt.registerTask('poll', function () {
    var done = this.async()
    setInterval(function() {
        grunt.task.run(['gitpull']);
      }, 5 * 60 * 60 * 1000); // run every five hours
  });
};
