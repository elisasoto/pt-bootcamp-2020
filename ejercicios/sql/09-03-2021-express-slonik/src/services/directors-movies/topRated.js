const { bestRottenAndImdb } = require("../../queries/directors-movies");

module.exports = (db) => async (req, res, next) => {
  const { limit } = req.query;
  try {
    const result = await bestRottenAndImdb(db, limit);

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
