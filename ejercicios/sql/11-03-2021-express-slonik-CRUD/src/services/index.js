const router = require('express').Router()

module.exports = db => {

  router.use('/clients', require('./clients')(db))
  router.use('/rents', require('./rents')(db))
  router.use('/vehicles', require('./vehicles')(db))

  return router
}