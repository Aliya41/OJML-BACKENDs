var createError = require('http-errors');
var express = require('express');
var cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('./model/database').mongoConnected();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var joinerformRouter = require('./routes/joinerform');
var registerRouter = require('./routes/register');
var onboardformRouter = require('./routes/onboardform');
var userModel = require('./model/userModel');
var app = express();
var port = 4000; // Set the port number to 4000

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/joinerform', joinerformRouter);
app.use('/register', registerRouter);
app.use('/onboardform', onboardformRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(port, function () {
  console.log('App is running on port ' + port);
});

module.exports = app;
