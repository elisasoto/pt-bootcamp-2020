const express = require('express');
const router = express.Router(); 

const toDosRouter = require('./todos');
const categoriesRouter = require('./categories');

router.use('/todos', toDosRouter);
router.use('/categories', categoriesRouter);

module.exports = router; 
