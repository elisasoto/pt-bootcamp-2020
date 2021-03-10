const express = require('express')
const bodyParser = require('body-parser')
const { SERVER_PORT } = require('./constants')

const beersRoute = require('./routes/beers')

const app = express()

app.use(bodyParser.json())

app.use('/beers', beersRoute)

app.listen(SERVER_PORT, () => {
  console.info(`> server is listening on ${SERVER_PORT} port`)
})

