var util  = require('util');
var spawn = require('child_process').spawn;


exports.spawn = function(processName, processArgs)  {
		processObj = spawn(processName, processArgs);

	processObj.stdout.on('data', function (data) {
  		console.log('stdout: ' + data);
	});

	processObj.stderr.on('data', function (data) {
  		console.log('stderr: ' + data);
	});

	processObj.on('exit', function (code) {
  		console.log('child process exited with code ' + code);
	});
};



