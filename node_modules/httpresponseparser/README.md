# README #

This package allows you to parse the http POST and GET headers from the basic HTTP server.

## Usage ##

To get the username from a form field: <input type="text" name="username" />

OR

To get the username from a GET param http://localhost/?username=yourusername


## CODE ##

```
#!node

var http = require('http'),
    httpRequestParser = require('httpRequestParser');

http.createServer(function (req, res) {
	httpRequestParser.parse (req, function (httpRequestData) {
		// assuming only POST or GET param passed otherwise iterate through the array
		console.log (httpRequestData[0].username);
	});
});
```