const { bestRatedMovies } = require("../../queries/movies");

module.exports = (db) => async (req, res, next) => {
  const { top } = req.query;
  try {
    const result = await bestRatedMovies(db, top);

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
