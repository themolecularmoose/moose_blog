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
        exec('hexo generate');
        grunt.log.write("Synced at " + Date.now());
      },1000); // run every five hours
  });
};
