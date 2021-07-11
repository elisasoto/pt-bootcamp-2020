const { productionBudget } = require("../../queries/movies");

module.exports = (db) => async (req, res, next) => {
  const { less_than } = req.query;
  try {
    const result = await productionBudget(db, less_than);

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
