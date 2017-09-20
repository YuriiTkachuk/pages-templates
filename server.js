var glob = require('glob');
var path = require('path');
var express = require('express');

var app = express();

app.use("/assets", express.static(__dirname + '/assets'));
app.use("/node_modules", express.static(__dirname + '/node_modules'));

glob.sync('./build/*/*.html').forEach(function(file) {
  let folder = path.dirname(file);
  let name = path.basename(file);
  let base = '/page/'  + path.basename(file, '.html');
  let pathToFile = path.join(__dirname, folder, name);

  app.use(base, express.static(pathToFile));
});

var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log("Listening on " + port);
});
