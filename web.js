 var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {

    var fs=require('fs');
    fs.readFile('index.html','utf8',function (err,data) {
    if (err) {
       return console.log(err);
    }
//  console.log(data);
    response.send(data);
    });

//  response.send('Hello World2!');
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
