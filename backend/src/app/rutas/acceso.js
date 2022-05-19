const conn = require("../../config/database");
const jwt = require("jsonwebtoken");
const validarToken = require("../../config/jwt");
const secretKey = "estoesunapruebaparagenerarlallavedeJWTyparaponerunejemplodecomohacerlo";

module.exports = (app) => {
    app.get("/test", validarToken,(req, res) => {
        res.status(200).json({prueba: "Hola mundo"});
    });

    app.post("/login", (req, res) => {
        let consulta = `SELECT id, email, password, nombre FROM usuario WHERE 
                        email = '${req.body.usuario}' AND password = '${req.body.pass}'`;
        console.log(consulta);
        conn.query(consulta, (err, rows, cols) => {
            if (err) {
                res.status(500).json({status:0, mensaje: "Err Base de datos"});
            } else {
                if (rows.length > 0) {
                    const token = jwt.sign({usuario: req.body.usuario}, secretKey, { expiresIn: "2h"});
                    res.json({status: 1, mensaje: "usuario exitoso", key: token});
                } else {
                    res.status(400).json({status: 0, mensaje: "no se encontro usuario que coinsida con la clave"})
                }
            }
        })
    })

    app.get("/contactos",validarToken, (req, res) => {
        let consulta = `SELECT * FROM contacto`;
        conn.query(consulta, (err, rows, cols) => {
            if (err) {
                res.json({status:0, mensaje: "Error en consulta"});
            } else {
                res.json({status:1, mensaje: "Exito en consulta", data : rows});
            }
        });
    });
}