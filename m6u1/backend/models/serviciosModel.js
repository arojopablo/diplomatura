var pool = require('./bd');

// listar
async function getServicios() {
    var query="select * from servicios";
    var rows = await pool.query(query);
    return rows
}


// insert
async function insertServicio(obj) {
    try {
        var query = "INSERT INTO servicios set ?";
        var rows = await pool.query(query, [obj])
        return rows;
    } catch(error) {
        console.log(error);
        throw error
    } // cierra catch
} // cierra insert


module.exports = { getServicios, insertServicio }
