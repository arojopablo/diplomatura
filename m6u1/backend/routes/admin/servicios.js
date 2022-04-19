var express = require('express');
var router = express.Router();
var serviciosModel = require('./../../models/serviciosModel');


router.get('/',async function (req,res,next) {
    var servicios = await serviciosModel.getServicios();
console.log("aca");
    res.render('admin/servicios', {
        layout: 'admin/layout',
        usuario: req.session.nombre,
        servicios
    });
});


router.get('/agregar', function (req, res, next) {
    res.render('admin/nuevoServicio', {
    layout: 'admin/layout',
    usuario: req.session.nombre
  });
  });


  router.post('/agregar', async (req,res,next) => {
      try {
          console.log(req.body);
          if (req.body.titulo != "" && req.body.servicio) {
              await serviciosModel.insertServicio(req.body);
              res.redirect('/admin/servicios')              
           } else {
               res.render('admin/nuevoServicio', {
                   layout: 'admin/layout',
                   error: true,
                   usuario: req.session.nombre,
                   message: "Todos los campos son requeridos"
               });
           }
      } catch(error) {
          console.log(error);
          res.render('admin/nuevoServicio', {
              layout: 'admin/layout',
              error: true,
              message: "no se cargo servicio"
          });
      }
  });

  module.exports = router;