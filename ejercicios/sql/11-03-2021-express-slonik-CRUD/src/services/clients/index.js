const router = require('express').Router()

module.exports = db => {

  router.get('/', async (req,res,next)=>{
    const userByCountry = await require('../../queries/clients').userByCountry(db)
    res.status(200).json({data: userByCountry.rows})
  })

  
  return router
}