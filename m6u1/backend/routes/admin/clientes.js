var express = require('express');
var router = express.Router();
var clientesModel = require('./../../models/clientesModel');



router.get('/',async function (req,res,next) {
    var clientes = await clientesModel.getClientes();
       res.render('admin/clientes', {
        layout: 'admin/layout',
        usuario: req.session.nombre,        
        clientes
    });
});


router.get('/agregar', function (req, res, next) {
    res.render('admin/nuevocliente', {
    layout: 'admin/layout',
    usuario: req.session.nombre
  });
  });


  router.post('/agregar', async (req,res,next) => {
      try {
          console.log(req.body);
          console.log("gola");
          if (req.body.nombre != "" && req.body.apellido != "" && req.body.direccion != "" && req.body.telefono != "" && req.body.mail != "") {
              await clientesModel.insertCliente(req.body);
              res.redirect('/admin/clientes')              
           } else {
               res.render('admin/nuevoCliente', {
                   layout: 'admin/layout',
                   error: true,
                   usuario: req.session.nombre,
                   message: "Todos los campos son requeridos"
               });
           }
      } catch(error) {
          console.log(error);
          res.render('admin/nuevoCliente', {
              layout: 'admin/layout',
              error: true,
              message: "no se cargo cliente"
          });
      }
  });
    

module.exports = router;