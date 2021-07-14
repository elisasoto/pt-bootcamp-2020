const { directorMoviesAfter2000 } = require("../../queries/directors-movies");

module.exports = (db) => async (req, res, next) => {
  const { from } = req.query;
  try {
    const result = await directorMoviesAfter2000(db, from);

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
