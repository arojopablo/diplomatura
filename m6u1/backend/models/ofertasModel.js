var pool = require('./bd');

// listar
async function getOfertas() {
    var query="select * from ofertas";
    var rows = await pool.query(query);
    return rows
}


// insert
async function insertOferta(obj) {
    try {
        var query = "INSERT INTO ofertas set ?";
        var rows = await pool.query(query, [obj])
        return rows;
    } catch(error) {
        console.log(error);
        throw error
    } // cierra catch
} // cierra insert


module.exports = { getOfertas, insertOferta }