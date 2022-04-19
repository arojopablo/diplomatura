var express = require('express');
var router = express.Router();
var ofertasModel = require('./../../models/ofertasModel');


router.get('/',async function (req,res,next) {
    var ofertas = await ofertasModel.getOfertas();   
    res.render('admin/ofertas', {
        layout: 'admin/layout',
        usuario: req.session.nombre,
        ofertas
    });
});



router.get('/agregar', function (req, res, next) {
    res.render('admin/nuevaOferta', {
    layout: 'admin/layout',
    usuario: req.session.nombre
  });
  });


  router.post('/agregar', async (req,res,next) => {
      try {
          console.log(req.body);
          if (req.body.cuerpo != "") {
              await ofertasModel.insertOferta(req.body);
              res.redirect('/admin/ofertas')              
           } else {
               res.render('admin/nuevaOferta', {
                   layout: 'admin/layout',
                   error: true,
                   message: "campo cuerpo es requerido"
               });
           }
      } catch(error) {
          console.log(error);
          res.render('admin/nuevaOferta', {
              layout: 'admin/layout',
              error: true,
              message: "no se cargo oferta"
          });
      }
  });
   

module.exports = router;