// Create web server
var express = require('express');
var app = express();
var fs = require("fs");

// Set up the server
var server = app.listen(8080, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Web server started at http://%s:%s", host, port);
});

// Display the comments
app.get('/listComments', function (req, res) {
    fs.readFile(__dirname + "/comments.json", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
});

// Add a new comment
app.post('/addComment', function (req, res) {
    fs.readFile(__dirname + "/comments.json", 'utf8', function (err, data) {
        data = JSON.parse(data);
        data['comment4'] = 'This is comment 4';
        console.log(data);
        res.end(JSON.stringify(data));
    });
});

// Delete a comment
app.delete('/deleteComment', function (req, res) {
    fs.readFile(__dirname + "/comments.json", 'utf8', function (err, data) {
        data = JSON.parse(data);
        delete data['comment2'];
        console.log(data);
        res.end(JSON.stringify(data));
    });
});