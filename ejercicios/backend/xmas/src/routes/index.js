const { Router } = require('express');

const wishesRouter = require('./wishes');
const scoresRouter = require('./scores');
const presentsRouter = require('./presents');
const createError = require('../utils/createError');

const router = Router();

router.use('/wishes', wishesRouter);
router.use('/scores', scoresRouter);
router.use('/presents', presentsRouter);

router.use('*', (req, res, next) => {
  try {
    createError('Not found', 404);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
