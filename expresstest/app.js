#!/usr/bin/env node
var express = require('express');
var app = express();

app.set('views', __dirname + "/views");
app.engine(".html", require('ejs').__express);
app.set('view engine', 'html');

var router = require('./routes/users');
app.use('/home', router); //mounting router at /home, so access page as localhost:8088/home/

// Render "Hello World" for any request
// app.VERB - GET, POST, PUT etc.

// app.get('*', function(request, response) {
//     console.log(request.params);
//     console.log(request.query);

//     var user = request.query ? " " + request.query["user"] : "";
//     response.end("Hello world" + 
//                  user +
//                  (request.params ? ("from " + request.params[0]) : "") +
//                  "!!")
// });

module.exports = app;

