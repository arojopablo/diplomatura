var pool = require ('./bd');
var md5 = require('md5');


 // listar
 async function getClientes() {
    var query="select * from clientes";
    var rows = await pool.query(query);
    return rows
}

// seleccionar cliente por id

async function getClienteById(id) {
    try {
        var query = "SELECT * FROM clientes WHERE id_cliente = ? limit 1";
        var rows = await pool.query(query, [id]);
        return rows[0]; 
    }catch (error) {
        console.log(error);
    }
 }

// insert
async function insertCliente(obj) {
    try {       
        var query = "INSERT INTO clientes set ?";
        var rows = await pool.query(query, [obj])
        return rows;
    } catch(error) {
        console.log(error);
        throw error
    } // cierra catch
} // cierra insert

module.exports = { getClientes, insertCliente, getClienteById }
 