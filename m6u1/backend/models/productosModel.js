var pool = require ('./bd');

// listar
async function getProductos() {
    try {
        var query = "SELECT * FROM productos where status='active'";
        var rows = await pool.query(query);
        return rows; 
    }catch (error) {
        console.log(error);
    }
 }

//filtrar
 async function buscarProducto(termino) {
    try {
        var query="SELECT * from PRODUCTOS WHERE status = 'active' AND nombre LIKE ? OR descripcion LIKE ? OR marca LIKE ?";
        var rows = await pool.query(query, ['%' + termino + '%', '%' + termino + '%', '%' + termino + '%']);        
        return rows
    } catch(error) {
        console.log(error);
    }    
}

 // insertar
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
 

 module.exports = { getProductos, insertProducto, buscarProducto }
