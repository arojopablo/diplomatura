var express = require('express');
var router = express.Router();
var novedadesModel = require('./../../models/novedadesModel');


router.get('/',async function (req,res,next) {
    var novedades = await novedadesModel.getNovedades();

    res.render('admin/novedades', {
        layout: 'admin/layout',
        usuario: req.session.nombre,
        novedades
    });
});


router.get('/agregar', function (req, res, next) {
    res.render('admin/nuevaNovedad', {
    layout: 'admin/layout',
    usuario: req.session.nombre
  });
  });


  router.post('/agregar', async (req,res,next) => {
      try {
          console.log(req.body);
          if (req.body.titulo != "" && req.body.subtitulo != "" && req.body.cuerpo != "") {
              await novedadesModel.insertNovedad(req.body);
              res.redirect('/admin/novedades')              
           } else {
               res.render('admin/nuevaNovedad', {
                   layout: 'admin/layout',
                   error: true,
                   message: "Todos los campos son requeridos"
               });
           }
      } catch(error) {
          console.log(error);
          res.render('admin/nuevaNovedad', {
              layout: 'admin/layout',
              error: true,
              message: "no se cargo novedad"
          });
      }
  });

// router.get('/', async (req, res, next) => {
//   try {
   
//     var data = await novedadesModel.getNovedades();
//     // console.log(data);
//     if (data != undefined) {        
//       res.render('admin/novedades',{
//         layout: 'admin/layout',
//         data: data,
//         usuario: req.session.nombre
//       });
//     } else {
//       res.render('admin/login', {
//         layout: 'admin/layout',
//         error : true
//       });
//     }
//     } catch (error) {
//       console.log(error);
//     }
//     });

//  router.get('/nuevoProducto', function (req, res, next) {
//       res.render('admin/nuevoProducto', {
//       layout: 'admin/layout',
//       usuario: req.session.nombre
//     });
//     });


// router.post('/', async (req, res, next) => {
//   try {
//     var nombre = req.body.nombre;

    

module.exports = router;