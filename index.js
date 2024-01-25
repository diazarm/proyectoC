// Librerias
const express = require('express');
const productRouter = require('./src/routes/productRoute.js')
const cors = require('cors')
require('dotenv').config();

// Traemos la conexion de la base de datos al servidor
require('./src/config/database.js');

// Instanciamiento de express
const app = express();

//static
//app.use(express.static('public'))

//Middleware

//Servidor entiende en POST ---> JSON
app.use(cors()); //admitimos todos los dominios
app.use(express.json());

// Con esto usamos una router en nuestro servidor
app.use(productRouter);


// Levantamiento de servidor
app.listen(process.env.PORT, () => {
    console.log(`Servidor conectado en puerto: ${process.env.PORT}`)
})