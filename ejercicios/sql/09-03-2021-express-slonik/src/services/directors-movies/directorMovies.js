const { directorMovies } = require("../../queries/directors-movies");

module.exports = (db) => async (req, res, next) => {
  const { director } = req.params;
  try {
    const result = await directorMovies(db, director);

    if (!result) {
      next(new Error("something went wrong"));
      return;
    }

    const { rows } = result;

    res.status(200).json({
      success: true,
      len: rows.length,
      data: rows,
    });
  } catch (error) {
    console.info("> something went wrong: ", error.message);
  }
};
