var shellprocess = require('./processwrapper');
var request = require('request');


// Call the console.log function.
console.log("Hello World");


//shellprocess.spawn('ls', ['-lh', '/usr']);
// launch elastic search node
shellprocess.spawn('elasticsearch-1.4.1/bin/elasticsearch', []);



function getNodeBody() {
	request('http://localhost:9200', function (error, response, body) {
		    if (!error && response.statusCode == 200) {
		        console.log(body);
		     } else {
		     	console.log(body);
		     }
	});
};

setInterval(getNodeBody, 3000);