const app = require('./config/server');
require("./app/rutas/acceso")(app);

app.listen(app.get("port"), () => console.log("Servidor corriendo en puerto 4000"));