const { imdbVotes } = require("../../queries/directors-movies");

module.exports = (db) => async (req, res, next) => {
  const { type, limit } = req.query;
  try {
    const result = await imdbVotes(db, type, limit);

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
