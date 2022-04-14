var pool = require('./bd');

// listar
async function getNovedades() {
    var query="select * from novedades";
    var rows = await pool.query(query);
    return rows
}


// insert
async function insertNovedad(obj) {
    try {
        var query = "INSERT INTO novedades set ?";
        var rows = await pool.query(query, [obj])
        return rows;
    } catch(error) {
        console.log(error);
        throw error
    } // cierra catch
} // cierra insert


module.exports = { getNovedades, insertNovedad }





