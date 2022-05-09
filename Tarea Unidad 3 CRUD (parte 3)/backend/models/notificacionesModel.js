var pool = require ('./bd');

async function getNotificaciones(id) {
    var query = "SELECT * From notificaciones where id_usuario = ? ";
    var rows = await pool.query(query,[id]);
    return rows;
}

async function getOpinionesWeb() { 
    var query = "SELECT * FROM notificaciones WHERE estado = 'web'";
    var rows = await pool.query(query);
    // console.log(rows);
    return rows
}

async function insertNotificacionWeb(opinion) {
    let obj =  {
        estado : 'web',
        notificacion: opinion,
        id_usuario: 1 
    }

    try {
        var query = "INSERT INTO notificaciones set ?";
        var rows = await pool.query(query, [obj])
        return rows;
    } catch(error) {
        console.log(error);
        throw error
    } // cierra catch
}

module.exports = { getNotificaciones, getOpinionesWeb, insertNotificacionWeb }
