const router = require('express').Router()

module.exports = db => {

  router.get('/names', require('./directorNames')(db))
  router.get('/queryname', require('./getQueryName')(db))
  router.get('/pic', require('./getPicAndName')(db))
  router.get('/canadians', require('./getCanadians')(db))
  router.get('/britus', require('./getBritUS')(db))
  router.get('/chessplayer', require('./isChessPlayer')(db))
  router.get('/doublenationalities', require('./getTwoORMoreNat')(db))
  
  return router
}