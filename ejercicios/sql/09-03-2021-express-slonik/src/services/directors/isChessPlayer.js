const { isChessPlayer } = require("../../queries/directors");

module.exports = (db) => async (req, res, next) => {
  try {
    const result = await isChessPlayer(db);

    if (!result) {
      next(new Error("something went wrong"));
      return;
    }

    const { rows, rowsCount } = result;

    res.status(200).json({
      success: true,
      len: rows.length,
      data: rows,
    });
  } catch (error) {
    console.info("> something went wrong: ", error.message);
  }
};
