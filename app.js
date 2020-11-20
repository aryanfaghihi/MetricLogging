const createError = require('http-errors');
const express = require('express');
const storage = require('./storage');

const routes = require('./routes/index');

//Express App Config
const app = express();
app.use(express.json());

//Main Route
app.use('/', routes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // render the error page
  res.status(err.status || 500).json({ message: err.message, error: req.app.get('env') === 'development' ? err : {} });
});

module.exports = app;
