const router = require('express').Router()

module.exports = db => {
  router.get('/', require('./allMoviesNotNull')(db))
  router.get('/sonymovies', require('./sonyPicturesMovies')(db))
  return router
}