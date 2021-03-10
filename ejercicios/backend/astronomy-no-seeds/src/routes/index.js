const { Router } = require('express')

const route = require('express').Router()

route.use('/landings', require('./landings'))


module.exports = route