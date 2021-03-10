const express = require('express')
const app = express()
const appRouter = require('./routes')
const PORT = 4000;


app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/', appRouter)

app.use((error, req, res, next) => {
  console.log(error)
  res.status(500).send(error.message)
})


app.listen(PORT, () => { 
  console.log(`Listening in http://localhost:${PORT}`) 
})

