var createError = require('http-errors');
var express = require('express');
const favicon = require('serve-favicon');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');
var doKhanRouter = require('./routes/dokhan');
var doMatRouter = require('./routes/domat');
var trangThaiRouter = require('./routes/trangthai');
var loaiCongVanRouter = require('./routes/loaicongvan');
var donViRouter = require('./routes/donvi');
var canBoRouter = require('./routes/canbo');
var congVanDenRouter = require('./routes/congvanden');
var congVanDiRouter = require('./routes/congvandi');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

app.use('/', indexRouter);
//app.use('/users', usersRouter);
app.use('/dokhan', doKhanRouter);
app.use('/domat', doMatRouter);
app.use('/trangthai', trangThaiRouter);
app.use('/loaicongvan', loaiCongVanRouter);
app.use('/donvi', donViRouter);
app.use('/canbo', canBoRouter);
app.use('/congvanden', congVanDenRouter);
app.use('/congvandi', congVanDiRouter);

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

module.exports = app;
