var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
const res = require('express/lib/response');
const { read } = require('fs');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// en este lugar se coloca app.use(session);

app.use(session({
 secret:'R8g!iJ6WchLsQMus3zMx', // pagina https://www.lastpass.com/es/features/password-generator
 resave: false,
 saveUninitialized: true 
}
))

// cuento las visitas a la pagina de acuerdo al ejemplo de PDF visto en clase
app.use(function(req,res,next){
  if(!req.session.vistas) {
    req.session.vistas = {};
  }
  if(!req.session.vistas[req.originalUrl]) {
    req.session.vistas[req.originalUrl] = 1;
  } else {
    req.session.vistas[req.originalUrl]++;
  }
  
  next();
});



app.get('/', function(req,res){
  var conocido = Boolean(req.session.nombre);  
  var mayoredad = Boolean(req.session.edad); // sigo con la misma logica del ejercicio visto en clase
  if((req.session.edad) >= 21) { // chequeo la edad ingresada para verificar si es maoyor o menor
    mayoredad = true;
  } else {
    mayoredad = false;
  }
  res.render('index',{
    title: 'Sesiones en express',
    conocido: conocido,
    mayoredad: mayoredad,   // agrego al ejercicio visto en clase
    nombre: req.session.nombre, 
    edad: req.session.edad,   // tomo la edad 
    vistas: req.session.vistas[req.originalUrl]  // tomo la cantidad de vistas de acuerdo al ejemplo del PDF visto en clase
  });
});

app.post('/ingresar', function(req, res) {
  if(req.body.nombre) {
    req.session.nombre = req.body.nombre;
    req.session.edad = req.body.edad;         
  }
  res.redirect('/');
});

app.get('/volver', function(req,res){
  req.session.nombre = false;   
    res.redirect('/');      //hago redirect sin destruir la sesion entonces sigo contando la cantidad de visitas hasta que el usuario presione en salir
});


app.get('/salir', function(req,res){
  req.session.destroy();   // destruyo sesion y empiezo de nuevo
  res.redirect('/');
});

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

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
