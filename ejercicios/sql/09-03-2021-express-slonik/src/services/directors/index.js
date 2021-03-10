const router = require('express').Router()

module.exports = db => {

  router.get('/names', require('./directorNames')(db))
  router.get('/queryname', require('./getQueryName')(db))
  
  return router
}