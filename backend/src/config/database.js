const mysql = require("mysql");
const conn = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "Abc12345",
    database: "jwt"
});

conn.connect(err => {
    if (err) {
        console.log("Error al conectarse al servidor de DB");
    } else {
        console.log("Conectado a la DB satisfactoriamente");
    }
});

module.exports = conn;