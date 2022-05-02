var express = require('express');
var router = express.Router();
var novedadesModel = require('./../models/novedadesModel');
var productosModel = require('./../models/productosModel');
var ofertasModel = require('./../models/ofertasModel');
var serviciosModel = require('./../models/serviciosModel');
var ventasModel = require('./../models/ventasModel');

var util = require('util');
var cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);

router.get('/novedades', async function (req, res, next) {

    var novedades = await novedadesModel.getNovedades();
    novedades = novedades.map(novedad => {
        if(novedad.img_id) {
            const imagen = cloudinary.url(novedad.img_id,{
                width : 640,
                height : 640,
                crop : 'fill'  // para que se adapte al tamaño
            });
            console.log(imagen);
            return {
                ...novedad,
                imagen                 
            }
        } else {
            return {
                ...novedad,
                imagen: ''
            }
        }        
    });

    // res.render('admin/novedades', {
    //     layout: 'admin/layout',
    //     usuario: req.session.nombre,
    //     novedades
    // });
    res.json(novedades); // Paso a JSON para mandar al frontend con react.
});

// get de productos

router.get('/productos', async function (req, res, next) {

    var productos = await productosModel.getProductos();
    productos = productos.map(producto => {
        if(producto.imagen) {
            const imagen = cloudinary.url(producto.imagen,{
                width : 640,
                height : 640,
                crop : 'fill'  // para que se adapte al tamaño
            });
            // console.log(imagen);
            return {
                ...producto,
                imagen                 
            }
        } else {
            return {
                ...producto,
                imagen: ''
            }
        }        
    });

    // res.render('admin/productos', {
    //     layout: 'admin/layout',
    //     usuario: req.session.nombre,
    //     productos
    // });
    res.json(productos); // Paso a JSON para mandar al frontend con react.
    });

// get par alistar ofertas en frontend
router.get('/ofertas',async function (req,res,next) {

    var ofertas = await ofertasModel.getOfertas();       
    res.json(ofertas);
});

// get para listar servicios en frontend

router.get('/servicios', async function (req, res, next) {

    var servicios = await serviciosModel.getServicios();
    servicios = servicios.map(servicio => {
        if(servicio.img_id) {
            console.log("se cunmple la condicion de imagen");
            const imagen = cloudinary.url(servicio.img_id,{
                width : 480,
                height : 480,
                crop : 'fill'  // para que se adapte al tamaño
            });
           console.log(imagen);
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
  
    res.json(servicios); // Paso a JSON para mandar al frontend con react.
    // console.log(servicios);
});


router.get('/operaciones', async function (req, res, next) {

    var ventas = await ventasModel.buscarVenta(req.query.id);
    // console.log(ventas);
 
    ventas = ventas.map(venta => {
      
     if(venta.venta_estado == 'finalizado')  {
         const estado = true;
         return {
             ...venta,
             estado 
         }
     } else {
         return {
             ...venta,
             estado: false
         }
     }        
 });
 
     res.json(ventas);
 });

module.exports = router;
