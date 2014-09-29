module.exports = function(grunt) {
  grunt.registerTask('poll', function () {
    var done = this.async();
    var exec = require('child_process').exec;
    setInterval(function() {
      grunt.task.run(['gitpull']);
        exec('git pull & hexo generate', function(err, stdout, stderr) {
	  if (err) done(err);
          console.log(stdout);
          grunt.log.writeln('Synced at ' + Date.now());
       });
     }, 5 * 60 * 60 * 1000); // run every five hours
  });
};
