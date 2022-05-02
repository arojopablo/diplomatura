var express = require('express');
var router = express.Router();
var serviciosModel = require('./../../models/serviciosModel');
var util = require('util');
var cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);


router.get('/',async function (req,res,next) {
    var servicios = await serviciosModel.getServicios();
    servicios = servicios.map(servicio => {
        if(servicio.img_id) {
            const imagen = cloudinary.image(servicio.img_id,{
                width : 100,
                height : 100,
                crop : 'fill'  // para que se adapte al tamaño
            });
            return {
                ...servicio,
                imagen 
            }
        } else {
            return {
                ...servicio,
                imagen: ''
            }
        }        
    });
    res.render('admin/servicios', {
        layout: 'admin/layout',
        usuario: req.session.nombre,
        notificacion: req.session.notificacion,
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

        var img_id = "";
        if (req.files && Object.keys(req.files).length > 0 ) {
            imagen = req.files.imagen;
            img_id = (await uploader(imagen.tempFilePath)).public_id;
        }

          console.log(req.body);
          if (req.body.titulo != "" && req.body.servicio) {
            //   await serviciosModel.insertServicio(req.body);
            await serviciosModel.insertServicio({
                ...req.body,
                img_id
            });
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

/* Para eliminar */

router.get('/eliminar/:id', async (req, res, next) => {
    var id = req.params.id;
    await serviciosModel.deleteServiciosById(id);
    res.redirect('/admin/servicios');
});


// Para modificar necesito traer el servicio por id

router.get('/modificar/:id', async (req, res, next) => {
    var id = req.params.id;
    // console.log(req.params.id);

    var servicio = await serviciosModel.getServiciosById(id);
    // console.log(req.params.id);
    res.render('admin/modificarServicio', {
        layout: 'admin/layout',
        usuario: req.session.nombre,
        servicio
    });
});

// modificar (update)

router.post('/modificar', async (req, res, next) => {
    try {

        let img_id = req.body.img_original;
        let borrar_img_vieja = false;
        if(req.body.img_delete == 1) {
            img_id = null;
            borrar_img_vieja = true;
        } else {
            if (req.files && Object.keys(req.files).length > 0 ) {
                imagen = req.files.imagen;
                img_id = (await uploader(imagen.tempFilePath)).public_id;
                borrar_img_vieja = true;   
            }
        } 
        if (borrar_img_vieja && req.body.img_original) {
            await (destroy(req.body.img_original));
        }


        var obj = {
            servicio: req.body.servicio,
            titulo: req.body.titulo,
            img_id
        }
        console.log(obj);

        await serviciosModel.modificarServiciosById(obj, req.body.id);
        res.redirect('/admin/servicios');
    }
    catch (error) {
        console.log(error)
        res.render('admin/modificarServicio', {
            layout: 'admin/layout',
            usuario: req.session.nombre,
            error: true,
            message: 'No se modifico el servicio'
        })
    }
});

  module.exports = router;