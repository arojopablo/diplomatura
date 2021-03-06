var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index'); 
var usersRouter = require('./routes/users');
var nosotrosRouter = require('./routes/nosotros'); //nosotros.js
var novedadesRouter = require('./routes/novedades'); //novedades.js
var contactoRouter = require('./routes/contacto'); //contatacto.js
var serviciosRouter = require('./routes/servicios'); //servicios.js


const res = require('express/lib/response');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/nosotros',nosotrosRouter);
app.use('/novedades', novedadesRouter);
app.use('/contacto', contactoRouter);
app.use('/servicios', serviciosRouter);



app.get('/prueba', function(req,res) {
  res.send("Hola soy la pagina de prueba")
})

app.get('/destacados', function(req,res) {
  res.send("Hola soy la pagina de DESTACADOS")
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  // res.send(" <h1>Pagina no encontrada<h1>")
  res.render('404')
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
