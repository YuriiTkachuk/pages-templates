var express = require('express');
var app = express();

app.use("/assets", express.static(__dirname + '/assets'));
app.use("/node_modules", express.static(__dirname + '/node_modules'));

app.use('/arlington', express.static(__dirname + '/build/arlington-review-rev'));
app.use('/bricky', express.static(__dirname + '/build/bricky'));
app.use('/burns', express.static(__dirname + '/build/burns'));
app.use('/caledoniancrow', express.static(__dirname + '/build/caledoniancrow'));
app.use('/critics', express.static(__dirname + '/build/critics'));
app.use('/baltimore', express.static(__dirname + '/build/baltimore'));
app.use('/beautyblog', express.static(__dirname + '/build/beautyblog'));
app.use('/intoafrica', express.static(__dirname + '/build/intoafrica'));
app.use('/mountaineering', express.static(__dirname + '/build/mountaineering'));
app.use('/snailstew', express.static(__dirname + '/build/snailstew'));

var port = process.env.PORT || 5000;

app.listen(port, function() {
  console.log("Listening on " + port);
});
