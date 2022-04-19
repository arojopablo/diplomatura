var express = require('express');
var router = express.Router();
var ventasModel = require('./../../models/ventasModel');
var productosModel = require('./../../models/productosModel');
var clientesModel = require('./../../models/clientesModel');


/* GET home page. */
router.get('/', async function (req, res, next) {
  var clientes = await clientesModel.getClientes();
  var productos = await productosModel.getProductos();
  res.render('admin/ventas', {
    layout: 'admin/layout',
    usuario: req.session.nombre,
    clientes,
    productos
  });
});

router.post('/agregar', async (req, res, next) => {
  try {
    console.log("imprimo req.body");
    console.log(req.body);
    // var cliente = clientesModel.getClienteById(id_cliente);
    if (req.body.id_cliente != "" && req.body.id_producto != "" && req.body.cantidad != "") {
      await ventasModel.insertVenta(req.body);
    //  res.redirect('/admin/ventas');
    var clientes = await clientesModel.getClientes();
    var productos = await productosModel.getProductos();
      res.render('admin/ventas', {
      layout: 'admin/layout',
      exito: true,
      usuario: req.session.nombre,
      clientes,
      productos,
      message: "Producto cargado con exito"
     });
    } else {
      var clientes = await clientesModel.getClientes();
      var productos = await productosModel.getProductos();
      res.render('admin/ventas', {
        layout: 'admin/layout',
        error: true,
        usuario: req.session.nombre,
        clientes,
        productos,
        message: "Todos los campos son requeridos"
      });
    }
  } catch (error) {
    var clientes = await clientesModel.getClientes();
    var productos = await productosModel.getProductos();
    console.log(error);
    res.render('admin/ventas', {
      layout: 'admin/layout',
      error: true,
      usuario: req.session.nombre,
      clientes,
      productos,
      message: "no se cargo Venta"
    });
  }
});


module.exports = router;