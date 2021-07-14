const { directorAndDistributor } = require("../../queries/directors-movies");

module.exports = (db) => async (req, res, next) => {
  try {
    const result = await directorAndDistributor(db);

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
