'use strict'
const router = require('express').Router()
const artistController = require('../controles/artist')
router
 .post('/artists', artistController.create)
 .get('/artists/:id?', artistController.read)
 .put('/artists/:id', artistController.update)
 .delete('/artists/:id', artistController.destroy)
module.exports = router