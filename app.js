'use strict'

let express = require('express');
let bodyParser = require('body-parser');

let app = express();

//cargar rutas
var user_routes = require('./routes/user')


app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//configurar cabeceras http


//crear las rutas base
//app.get('/pruebas', function(req, res){
//  res.status(200).send({message: 'Bienvenido al curso de desarrollo web'});
//});


app.use('/api', user_routes);

module.exports = app;
