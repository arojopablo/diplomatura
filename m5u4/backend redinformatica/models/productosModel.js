var pool = require ('./bd');

async function getProductos() {
    try {
        var query = "SELECT * FROM productos where status='active'";
        var rows = await pool.query(query);
        return rows; 
    }catch (error) {
        console.log(error);
    }
 }

 async function insertProducto(nombre,precio,descripcion,marca,imagen) {
    try {
//   var {nombre, descripcion, precio, marca} = req.body;
// var nombre = "real madrid";
// var descripcion  = "Decricion produycto Y";
// var precio = 100;
// var marca = "Y MARCA";
// var imagen = "/images/imagenY.jpg";

  pool.query("INSERT INTO productos set nombre = ?, descripcion = ?, precio = ?, marca = ?, imagen = ?  ", [nombre,descripcion,precio,marca,imagen]).then(function(resultados){
  console.log(resultados);
})   
       if (resultados!=undefined){
        return resultados; 
       }         
    }catch (error) {
        console.log(error);
    }
 }

 module.exports = { getProductos, insertProducto }
// var pool = require ('./bd');

// function getProductos() {
//     pool.query("SELECT * FROM productos limit 2").then(function(resultados){
   
//         return resultados
    
//       })
//  }

//  module.exports = { getProductos }
 