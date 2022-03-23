//agrupando todas las rutas 
const express = require('express');
const app = express();

app.use('/usuario', require('./usuario.routes'));


module.exports = app;