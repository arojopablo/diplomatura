var express = require('express');
var router = express.Router();
var clientesModel = require('./../../models/clientesModel');



router.get('/', async function (req, res, next) {
    var clientes = await clientesModel.getClientes();

    var root = false;
    if (req.session.rol == 'root') {
        root = true;
    }
    console.log("el rol es");
    console.log(req.session.rol);
    console.log(root);

    res.render('admin/clientes', {
        layout: 'admin/layout',
        usuario: req.session.nombre,
        notificacion: req.session.notificacion,
        root:root,
        clientes
    });
});


router.get('/agregar', function (req, res, next) {
    res.render('admin/nuevoCliente', {
        layout: 'admin/layout',
        usuario: req.session.nombre
    });
});


router.post('/agregar', async (req, res, next) => {
    try {
        console.log(req.body);
        //   console.log("gola");


        if (req.body.nombre != "" && req.body.apellido != "" && req.body.direccion != "" && req.body.telefono != "" && req.body.mail != "") {
            await clientesModel.insertCliente(req.body);
            res.redirect('/admin/clientes')
        } else {
            res.render('admin/nuevoCliente', {
                layout: 'admin/layout',
                error: true,
                usuario: req.session.nombre,
                notificacion: req.session.notificacion,
                message: "Todos los campos son requeridos"
            });
        }
    } catch (error) {
        console.log(error);
        res.render('admin/nuevoCliente', {
            layout: 'admin/layout',
            error: true,
            message: "no se cargo cliente"
        });
    }
});

/* Para eliminar */

router.get('/eliminar/:id', async (req, res, next) => {
    var id = req.params.id;
    await clientesModel.deleteClienteById(id);
    res.redirect('/admin/clientes');
});

// Para modificar necesito traer la novedad por id
router.get('/modificar/:id', async (req, res, next) => {
    var id = req.params.id;
    // console.log(req.params.id);    
    var cliente = await clientesModel.getClienteById(id);
    // console.log(req.params.id);
    // console.log(cliente);
    res.render('admin/modificarCliente', {
        layout: 'admin/layout',
        usuario: req.session.nombre,
        cliente
    });
});

// modificar (update)

router.post('/modificar', async (req, res, next) => {
    try {
        var obj = {
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            mail: req.body.mail,
            telefono: req.body.telefono,
            direccion: req.body.direccion
        }
        console.log(obj);

        await clientesModel.modificarClienteById(obj, req.body.id);
        res.redirect('/admin/clientes');
    }
    catch (error) {
        console.log(error)
        res.render('admin/modificarCliente', {
            layout: 'admin/layout',
            usuario: req.session.nombre,
            error: true,
            message: 'No se modifico el cliente'
        })
    }
});


module.exports = router;