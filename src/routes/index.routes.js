//agrupando todas las rutas 
const express = require('express');
const app = express();

app.use('/usuarios', require('./usuario.routes'));
app.use('/citas', require('./citas.routes'))
app.use('/servicios', require('./servicios.routes'))
app.use('/tickets', require('./tickets.routes'))
app.use('/auth', require('./auth.routes'))
app.use('/roles', require('./rol.routes'))

module.exports = app;