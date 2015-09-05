var express = require('express');
var swagger = require('swaggerize-ui');

var app = express();

app.use(swagger({
  docs: process.env.DOCS_PATH
}));
