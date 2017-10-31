'user strict'

let express = require('express');
let UserController = require('../controles/UserController');

let api = express.Router();

api.get('/user', UserController.prueba);

module.exports = api;
