module.exports = function(grunt) {
  grunt.registerTask('poll', function () {
    var done = this.async();
    var exec = require('child_process').exec;
    setInterval(function() {
        exec('git pull & hexo generate', function(err, stdout, stderr) {
	  if (err) done(err);
          console.log(stdout);
          grunt.log.writeln('Synced at ' + Date.now());
       });
     }, 5 * 60 * 60 * 1000); // run every five hours
  });
  grunt.registerTask('status', function () {
    var done = this.async();
    var request = require('request')
    setInterval(function() {
      request(
        {
          method: 'POST',
          uri: 'https://themoose.slack.com/services/hooks/slackbot?token=97CdC9icNyveel1FFT0QCAR2&channel=%23standup',
          body: '@channel statuses?'
        }, function(error, response, body){
          if(error) {
            done(error);
          }
          done();
        });
    }, 24 * 60 * 60 * 1000); // run every once day
  });
};
