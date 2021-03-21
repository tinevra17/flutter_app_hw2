var express = require('express');
var app = express();

// This responds will get the information desired 
app.get('/', function (req, res) {
   console.log("Got a GET request for the homepage");
   res.send('Hello GET');
})

// This responds a PUT request to create new information 
app.put('/', function (req, res) {
   console.log("Got a PUT request for the homepage");
   res.send('Hello PUT');
})

// This responds a DELETE request for a desire file 
app.delete('/', function (req, res) {
   console.log("Got a DELETE request for /");
   res.send('Hello DELETE');
})


var server = app.listen(8000, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})

// The tests exercise the server by requiring it as a module,
// rather than running it in a separate process and listening on a port
module.exports = server


