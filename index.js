'use strict';
module.exports = function (str) {
  var spawn = require('child_process').spawn;
  var stat = require('fs').statSync;
  
  var identity;
  try {
    identity = stat('Gruntfile.js') ? 'grunt' : false;
    console.log(identity);
  } catch (e) {
    try {
      identity = stat('gulpfile.js') ? 'gulp' : false;
    } catch (e) {
      identity = false;
    }
    
  }
  
  console.log(identity);  
  if (identity) {
    var child = spawn(identity, str.split(' '), {stdio: 'inherit'});

    child.on('data', function(buff) {
      console.log(buff.toString('utf8'));
    });

    // earlier this wasn't killing off the child process on ctrl+c; now it is?
    // 
    // var killWorker = function(){
    //   // console.dir(child);
    //   process.kill(child);
    // };
    // 
    // process.on('uncaughtException', killWorker);
    // process.on('SIGINT', killWorker);
    // process.on('SIGTERM', killWorker);
  } else {
    console.log('Neither Gruntfile nor gulpfile found!');
  }
};
