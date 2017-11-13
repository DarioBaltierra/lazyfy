'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const os = require('os');

const app = express();

//cargar rutas
const user_routes = require('./routes/user')
const artist_routes = require('./routes/artist')
const album_routes = require('./routes/album')
const song_routes = require('./routes/song')




app
 .use(cors())
 .use(bodyParser.urlencoded({extended:false}))
 .use(bodyParser.json())
 .use('/uploads', express.static(os.tmpdir()))
 .use('/api', user_routes)
 .use('/api', artist_routes)
 .use('/api', album_routes)
  .use('/api', song_routes)

//configurar cabeceras http


//crear las rutas base
//app.get('/pruebas', function(req, res){
//  res.status(200).send({message: 'Bienvenido al curso de desarrollo web'});
//});


app.use('/api', user_routes);

module.exports = app;
