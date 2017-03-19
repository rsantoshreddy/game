"use strict";
const express = require('express');
const webpack = require("webpack");
const config = require('./../../webpack.config');
const routes = require('./routes');

const app = express();
const compiler = webpack(config);

app.set('views', './src/app');
app.set('port', process.env.PORT || 3000);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use(routes);

module.exports = app;
