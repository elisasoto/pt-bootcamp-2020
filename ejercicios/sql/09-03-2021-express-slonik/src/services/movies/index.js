const router = require("express").Router();

module.exports = (db) => {
  router.get("/", require("./allMoviesNotNull")(db));
  router.get("/mpaa", require("./mpaaRating")(db));
  router.get("/futuremovies", require("./futureMovies")(db));
  router.get("/budget", require("./productionBudget")(db));
  router.get("/type", require("./mostExpensiveMovies")(db));
  router.get("/imdb", require("./imdb")(db));
  router.get("/rotten", require("./rotten")(db));
  router.get("/bestrated", require("./bestRated")(db));
  router.get("/release", require("./launchedMovies")(db));
  router.get("/gross", require("./grossValue")(db));
  router.get("/usGross", require("./usGross")(db));
  router.get("/sonymovies", require("./sonyPicturesMovies")(db));
  router.get("/budget/type/:type", require("./notRatedBudget")(db));
  router.get("/type/:source", require("./remake")(db));
  router.get("/findletter/:letter", require("./letter")(db));
  return router;
};
