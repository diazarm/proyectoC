require('dotenv').config();
const mongoose = require('mongoose');

mongoose.set("strictQuery", true);


mongoose.connect(process.env.MONGODB)
    .then(() => console.log('Base de datos conectada con éxito!'))
    .catch(error => console.error('Error al conectar a la base de datos:', error));


