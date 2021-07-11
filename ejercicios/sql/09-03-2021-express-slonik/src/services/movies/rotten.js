const { rottenTomatoes } = require("../../queries/movies");

module.exports = (db) => async (req, res, next) => {
  const { lower } = req.query;
  try {
    const result = await rottenTomatoes(db, lower);

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
