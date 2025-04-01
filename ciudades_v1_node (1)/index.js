// Importar módulos
const express = require('express')
const app = express()
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// Importar rutas
const ciudadesAPI =require('./rutas/ciudades')
ciudadesAPI(app)

app.use(express.static('public'))


// Iniciar servidor
var server = app.listen(PORT, () => {
    console.log(`servidor escuchando en ${server.address().port}`)
})