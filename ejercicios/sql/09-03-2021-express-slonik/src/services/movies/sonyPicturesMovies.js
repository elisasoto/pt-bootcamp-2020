const { sonyPicturesMovies } = require('../../queries/movies')

module.exports = db => async (req, res, next) => {
    try {
  
      const result = await sonyPicturesMovies(db)
  
      if(!result) {
        next(new Error('something went wrong'))
        return
      }
  
      const { rows, rowsCount } = result
  
      res.status(200).json({
        success: true,
        data: rows,
        len: rowsCount
      })
    } catch(error) {
      console.info('> something went wrong: ', error.message)
    }
  }