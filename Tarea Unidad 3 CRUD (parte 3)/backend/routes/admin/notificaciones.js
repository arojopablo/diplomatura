var express = require('express');
var router = express.Router();
var notificacionesModel = require('./../../models/notificacionesModel');

router.get('/', async function (req, res, next) {

    // console.log(novedades);    
    var ver_notificaciones = req.session.notificacion; 
    req.session.notificacion = ""; // borro notificaciones porque ya entro a leerlas .
    res.render('admin/notificaciones', {
        layout: 'admin/layout',
        usuario: req.session.nombre,
        notificacion: ver_notificaciones       
    });
});

module.exports = router;