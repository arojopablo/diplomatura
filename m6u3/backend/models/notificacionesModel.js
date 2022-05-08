var pool = require ('./bd');

async function getNotificaciones(id) {
    var query = "SELECT * From notificaciones where id_usuario = ? ";
    var rows = await pool.query(query,[id]);
    return rows;
}

module.exports = { getNotificaciones }
