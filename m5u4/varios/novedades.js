var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var admin = false;
  if (req.session.rol == "root") {admin = true}
  res.render('admin/novedades', { 
    layout: "admin/layout",
    usuario: req.session.nombre,
    rol: admin
   });
});

module.exports = router;
