var express = require('express');
var router = express.Router();
var productosModel = require('./../../models/productosModel');


// listar
router.get('/', async (req, res, next) => {
  try {

    var data = await productosModel.getProductos();
    // console.log(data);
    if (data != undefined) {
      res.render('admin/productos', {
        layout: 'admin/layout',
        data: data,
        usuario: req.session.nombre
      });
    } else {
      res.render('admin/login', {
        layout: 'admin/layout',
        error: true
      });
    }
  } catch (error) {
    console.log(error);
  }
});

//filtrar
router.post('/buscar', async (req, res, next) => {
  try {
    var termino = req.body.buscar
    var data = await productosModel.buscarProducto(termino);
    // console.log(data);
    if (data != undefined) {
      res.render('admin/productos', {
        layout: 'admin/layout',
        data: data,
        usuario: req.session.nombre
      });
    } else {
      res.render('admin/login', {
        layout: 'admin/layout',
        error: true
      });
    }
  } catch (error) {
    console.log(error);
  }
});



// nuevoproducto
router.get('/nuevoProducto', function (req, res, next) {
  res.render('admin/nuevoProducto', {
    layout: 'admin/layout',
    usuario: req.session.nombre
  });
});

// router.get('/insertProducto',(req,res,next) => {
//   res.render('admin/nuevoProducto', {
//     layout: 'admin/layout',
//     usuario: req.session.nombre
//   });
// })

// insertar
router.post('/', async (req, res, next) => {
  try {
    var nombre = req.body.nombre;
    var precio = req.body.precio;
    var descripcion = req.body.descripcion;
    var marca = req.body.marca;
    var imagen = "public/images/imagen.jpg";
    var data = await productosModel.insertProducto(nombre, precio, descripcion, marca, imagen);
    console.log("insert");
    if (data == undefined) {
      // res.redirect('/admin/productos');

      res.render('admin/nuevoProducto', {
        layout: 'admin/layout',
        data: data,
        usuario: req.session.nombre,
        alert: "producto cargado con exito"
      });
    } else {
      res.render('admin/login', {
        layout: 'admin/layout',
        error: true
      });
    }
  } catch (error) {
    console.log(error);
  }
});


module.exports = router;
