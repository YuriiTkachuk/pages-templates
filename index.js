var Metalsmith  = require("metalsmith");
var layouts     = require("metalsmith-layouts");
var markdown    = require("metalsmith-markdown");
var helpers     = require("handlebars-helpers");
var math        = helpers.math();

var dir = {
  base:   __dirname + "/",
  source: "./src/",
  dest:   "./build/"
};

var ms = Metalsmith(dir.base)
  .metadata({
    title: "Generator",
    description: "Sites generator with 8 themes",
    generator: "Metalsmith"
  })
  .source(dir.source)
  .destination(dir.dest)
  .clean(true)
  .use(markdown())
  .use(layouts({
    engine: "handlebars"
  }))
  .build(function(err, files) {
    if (err) {
      throw err;
    }
  });
