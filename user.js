'use strict'

function prueba (req, res) {
  res.status(200).send({
    message: 'Probando una accion del controlador de usuarios'
  })
}

module.exports = {
  prueba
}
