// const e = require('express');
var express = require('express');
var router = express.Router();
var usuariosModel = require('../../models/usuariosModel');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin/login', { 
    layout: "admin/layout"
   });
});

router.get('/logout', function(req, res, next) {
  req.session.destroy();
  res.render('admin/login', { 
    layout: "admin/layout"
   });
});


router.post('/', async (req,res,netx) => {
    try {
        var usuario = req.body.usuario;
        var password = req.body.password;        

        var data = await usuariosModel.getUserByUserNameAndPassword(usuario,password);
        // tomo el campo "rol" de la base de datos
        // var rol = data.rol 
        // si esta ok next()
        // sino error "usuario no autorizado para visitar esta pagina"
        // tambien se podria renderizar igual la pagina pero con alguna restriccion en ese caso se pude poner x ejemplo
        // req.session.rol = data.rol; despues si es igual a "root" x ejemplo en el get de la pagina setear con variable booleana
        // el rol de root y al renderizar restringir lo que se muestra (como habilitar o deshabilitar algun boton).
        var rol = data.rol;
        if (data != undefined) {       
          req.session.id_usuario = data.id;
          req.session.nombre = data.usuario;
          req.session.rol = rol;   // si cambio por otro valor por ejemplo rol "lectura" puedo cambiar lo que se muestra en pagina novedades.
          res.redirect('/admin/novedades');
        } else {
            res.render('admin/login',{
            layout: 'admin/layout',
            error: true
          });
        }        
    } catch (error) {
      console.log(error);
    } // cierro catch
}) // cierro router post

module.exports = router;
