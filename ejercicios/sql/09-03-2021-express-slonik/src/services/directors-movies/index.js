const router = require("express").Router();

module.exports = (db) => {
  router.get("/movies/info", require("./directorAndDistributor")(db));
  router.get("/directors/movies", require("./countMoviesByDirector")(db));
  router.get("/imdb", require("./imdbVotes")(db));
  router.get("/director/:director", require("./directorMovies")(db));
  router.get("/top-profit/director", require("./usGrossValue")(db));
  router.get("/most-movies/director", require("./mostReleasedAfter2000")(db));
  router.get("/directors", require("./rottenAndGenre")(db));
  router.get("/background", require("./directorsNationalities")(db));
  router.get("/mpaa/:mpaa", require("./pg13")(db));
  router.get("/best-canadian", require("./bestCanadianDirector")(db));
  router.get("/top-rated", require("./topRated")(db));
  router.get("/based-on-game", require("./basedOnGame")(db));
  return router;
};
