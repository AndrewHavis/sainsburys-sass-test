'use strict';

// Import Express and node-sass
var express = require('express');
var app = express();
var sass = require('node-sass');

// Route our root to /app
app.use('/', express.static(__dirname + '/app'));

// Compile our SASS on-the-fly when /styles.css is requested
app.get('/styles.css', function(req, res) {
   sass.render({
       file: __dirname + '/app/styles.scss'
   }, function(error, result) {
        if (!!error) {
            res.send(error);
        }
        else {
            res.type('css');
            res.send(result.css.toString());
        }
   });
});

// Listen on port 8596
app.listen(8596, '0.0.0.0', function() {
    console.log('Server listening on port 8596');
});
