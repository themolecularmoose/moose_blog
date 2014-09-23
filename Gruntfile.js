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
    var exec = require('child_process').exec;
    setInterval(function() {
        grunt.task.run(['gitpull']);
        exec('hexo generate')
      }, 5 * 60 * 60 * 1000); // run every five hours
  });
};
