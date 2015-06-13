var http = require('http');
var child_process = require('child_process');
//    sh = require('execSync');	// executing system commands

http.createServer(function (req, res) {
	var urlSplitOnSegment = req.url.split('?')[1];

	if (urlSplitOnSegment != undefined) {
		var urlSplit = urlSplitOnSegment.split('&');

		if (urlSplit != undefined) {
			var output     = "",
			    houseCode  = "",
			    unitCode   = "",
			    statusCode = "",
			    command    = "";

			for (i = 0; i < urlSplit.length; i++) {
				var name  = urlSplit[i].split('=')[0],
				    value = urlSplit[i].split('=')[1];

				if (name == "houseCode") {
					houseCode = value;
				} else if (name == "unitCode") {
					unitCode = value;
				} else if (name == "statusCode") {
					statusCode = value;
				}
			}

			//command = "echo " + statusCode + houseCode + unitCode + " > /home/pi/pycm19a/cm19a/in";

			//sh.exec (command);
child_process.exec (command);

			res.writeHead ("200", {'Content-Type': 'text/plain'});

			console.log (command);
			res.end (command);
		} else {
			res.writeHead ("500", {'Content-Type': 'text/plain'});
			res.end ("Error");
		}
	} else {
		var output = "no params passes";
		res.writeHead ("200", {'Content-Type': 'text/plain'});

		console.log (output);
		res.end (output);
	}
}).listen(666);