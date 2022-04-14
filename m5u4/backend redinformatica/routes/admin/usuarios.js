var express = require('express');
var router = express.Router();
var usuariosModel = require('./../../models/usuariosModel');



router.get('/',async function (req,res,next) {
    var novedades = await usuariosModel.getUsuarios();

    res.render('admin/usuarios', {
        layout: 'admin/layout',
        usuario: req.session.nombre,
        novedades
    });
});


router.get('/agregar', function (req, res, next) {
    res.render('admin/nuevoUsuario', {
    layout: 'admin/layout',
    usuario: req.session.nombre
  });
  });


  router.post('/agregar', async (req,res,next) => {
      try {
          console.log(req.body);
          console.log("gola");
          if (req.body.usuario != "" && req.body.password != "" && req.body.rol != "") {
              await usuariosModel.insertUsuario(req.body);
              res.redirect('/admin/usuarios')              
           } else {
               res.render('admin/nuevoUsuario', {
                   layout: 'admin/layout',
                   error: true,
                   message: "Todos los campos son requeridos"
               });
           }
      } catch(error) {
          console.log(error);
          res.render('admin/nuevoUsuario', {
              layout: 'admin/layout',
              error: true,
              message: "no se cargo usuario"
          });
      }
  });
    

module.exports = router;