var express = require('express');
var router = express.Router();
var productosModel = require('./../../models/productosModel');
var util = require('util');
var cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);

// listar
router.get('/', async (req, res, next) => {
  try {
    let cantidad_registros = await productosModel.getCantidad();
    console.log("cantidad de registros: " + cantidad_registros);
    // console.log(data); 
    if (cantidad_registros != undefined) {
      cantidad_paginas = Math.ceil(cantidad_registros / 15); // redondeo hacia arriba cantidad de paginas    
    }
    var paginas = [{pag:1}];
    for (let i=2;i<=cantidad_paginas;i++) {
      paginas[i]=({pag:i});
      console.log("i tiene:" + i);
    }
    
      var data = await productosModel.getProductos(0  );
        
    
    // console.log(cantidad_paginas);   
    console.log("array tiene",paginas);
    data = data.map(producto => {
      if(producto.imagen) {
          const img = cloudinary.image(producto.imagen,{
              width : 100,
              height : 100,
              crop : 'fill'  // para que se adapte al tamaño
          });
          return {
              ...producto,
              img 
          }
      } else {
          return {
              ...producto,
              img: ''
          }
      }        
  });

    
    if (data != undefined) {
      // tamaño_data = data.length;
      // console.log(tamaño_data);
      // console.log(data);
      res.render('admin/productos', {
        layout: 'admin/layout',
        data: data,
        usuario: req.session.nombre,
        notificacion: req.session.notificacion,
        paginas      
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


// paginar:

router.get('/:pagina', async (req, res, next) => {
  try {
    let cantidad_registros = await productosModel.getCantidad();
    console.log("cantidad de registros: " + cantidad_registros);
    // console.log(data); 
    if (cantidad_registros != undefined) {
      cantidad_paginas = Math.ceil(cantidad_registros / 15); // redondeo hacia arriba cantidad de paginas    
    }
    var paginas = [{pag:1}];
    for (let i=2;i<=cantidad_paginas;i++) {
      paginas[i]=({pag:i});
      console.log("i tiene:" + i);
    }

      var offset = (req.params.pagina-1) * 15;

      var data = await productosModel.getProductos(offset);
        
    
    // console.log(cantidad_paginas);   
    console.log("array tiene",paginas);
    data = data.map(producto => {
      if(producto.imagen) {
          const img = cloudinary.image(producto.imagen,{
              width : 100,
              height : 100,
              crop : 'fill'  // para que se adapte al tamaño
          });
          return {
              ...producto,
              img 
          }
      } else {
          return {
              ...producto,
              img: ''
          }
      }        
  });

    
    if (data != undefined) {
      // tamaño_data = data.length;
      // console.log(tamaño_data);
      // console.log(data);
      res.render('admin/productos', {
        layout: 'admin/layout',
        data: data,
        usuario: req.session.nombre,
        notificacion: req.session.notificacion,
        paginas      
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

router.post('/', async (req, res, next) => {
  try {

    var imagen = "";
    if (req.files && Object.keys(req.files).length > 0 ) {
        imagen_cargar = req.files.imagen;
        imagen = (await uploader(imagen_cargar.tempFilePath)).public_id;
    }

      if (req.body.nombre != "" && req.body.precio != "" && req.body.descripcion != "" && req.body.marca != "") {
        await productosModel.insertProducto({
            ...req.body,
            imagen
        });

      res.render('admin/nuevoProducto', {
        layout: 'admin/layout',
        // data: data,
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

// eliminar producto 
router.get('/eliminar/:id', async (req, res, next) => {
  
  var id = req.params.id;
  
  let producto = await productosModel.getProductoById(id);
  if (producto.imagen) {
      await(destroy(producto.imagen));
  }

  await productosModel.deleteproductodById(id);
  res.redirect('/admin/productos');
});

// Para modificar necesito traer el producto por id
router.get('/modificar/:id', async (req, res, next) => {
  var id = req.params.id;
  console.log(req.params.id);

  var producto = await productosModel.getProductoById(id);
  console.log(req.params.id);
  res.render('admin/modificarProducto', {
      layout: 'admin/layout',
      usuario: req.session.nombre,
      producto
  });
});

// modificar (update)

router.post('/modificar', async (req, res, next) => {
  try {

    // let img_id = req.body.img_original;
    let imagen = req.body.img_original;
    let borrar_img_vieja = false;
    if(req.body.img_delete == 1) {
        imagen = null;
        borrar_img_vieja = true;
    } else {
        if (req.files && Object.keys(req.files).length > 0 ) {
            // imagen = req.files.imagen;
            img = req.files.imagen;
            imagen = (await uploader(img.tempFilePath)).public_id;
            borrar_img_vieja = true;   
        }
    } 
    if (borrar_img_vieja && req.body.img_original) {
        await (destroy(req.body.img_original));
    }

      var obj = {
          nombre: req.body.nombre,
          descripcion: req.body.subtitulo,
          imagen,
          descripcion: req.body.descripcion,
          precio: req.body.precio,
          marca: req.body.marca,
          status: 'active',
          observaciones: req.body.observaciones
      }
      // console.log(obj);

      await productosModel.modificarProdocutoById(obj, req.body.id);
      res.redirect('/admin/productos');
  }
  catch (error) {
      console.log(error)
      res.render('admin/modificarProducto', {
          layout: 'admin/layout',
          usuario: req.session.nombre,
          error: true,
          message: 'No se modifico el producto'
      })
  }
});


module.exports = router;
