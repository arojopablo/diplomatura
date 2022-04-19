var pool = require('./bd');

// listar
async function getVentas() {
    var query="select * from ventas";
    var rows = await pool.query(query);
    return rows
}


// insert
async function insertVenta(obj) {
    try {        
        let fecha= new Date();
        var query = "INSERT INTO ventas set ?, fecha = ?";
        var rows = await pool.query(query, [obj, fecha])
        return rows;
    } catch(error) {
        console.log(error);
        throw error
    } // cierra catch
} // cierra insert


module.exports = { getVentas, insertVenta }