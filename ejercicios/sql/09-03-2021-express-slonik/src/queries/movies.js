const { sql } = require("slonik");

// Movies-related queries

const allMoviesNotNull = async (db) => {
  try {
    return await db.query(sql`
    SELECT title
    FROM movies
    WHERE title IS NOT NULL
    `);
  } catch (error) {
    console.info("> something went wrong", error.mesage);
    return null;
  }
};

const mpaaRating = async (db) => {
  try {
    return await db.query(sql`
    SELECT mpaa_rating
    FROM movies
    WHERE mpaa_rating IS NOT NULL
    `);
  } catch (error) {
    console.info("> something went wrong", error.mesage);
    return null;
  }
};

const productionBudget = async (db, less_than) => {
  try {
    return await db.query(sql`
    SELECT title, production_budget, distributor
    FROM movies
    WHERE production_budget < ${less_than}
    ORDER BY production_budget DESC
    `);
  } catch (error) {
    console.info("> something went wrong", error.mesage);
    return null;
  }
};

const mostExpensiveMovies = async (db, top) => {
  try {
    return await db.query(sql`
    SELECT title, major_genre, production_budget
    FROM movies
    WHERE production_budget IS NOT NULL
    ORDER BY production_budget DESC
    LIMIT ${top}
    `);
  } catch (error) {
    console.info("> something went wrong", error.mesage);
    return null;
  }
};

const remake = async (db, source) => {
  try {
    return await db.query(sql`
    SELECT title, source
    FROM movies
    WHERE source LIKE ${source}
    `);
  } catch (error) {
    console.info("> something went wrong", error.mesage);
    return null;
  }
};
const imdbNotNull = async (db) => {
  try {
    return await db.query(sql`
    SELECT title, distributor, imdb_rating 
    FROM movies
    WHERE imdb_rating IS NOT NULL
    `);
  } catch (error) {
    console.info("> something went wrong", error.mesage);
    return null;
  }
};
const rottenTomatoes = async (db, lower) => {
  try {
    return await db.query(sql`
    SELECT title, rotten_tomatoes_rating
    FROM movies
    WHERE rotten_tomatoes_rating IS NOT NULL
    ORDER BY rotten_tomatoes_rating ASC 
    LIMIT ${lower}
    `);
  } catch (error) {
    console.info("> something went wrong", error.mesage);
    return null;
  }
};
const bestRatedMovies = async (db, top) => {
  try {
    return await db.query(sql`
    SELECT title, major_genre, imdb_rating, imdb_votes
    FROM movies
    WHERE imdb_rating IS NOT NULL
    ORDER BY imdb_rating DESC, imdb_votes DESC
    LIMIT ${top}
    `);
  } catch (error) {
    console.info("> something went wrong", error.mesage);
    return null;
  }
};
const notRatedProdBudget = async (db, type) => {
  try {
    return await db.query(sql`
    SELECT SUM(production_budget) AS NotRated_ProdBudget
    FROM movies
    WHERE (title IS NOT NULL) AND (mpaa_rating = ${type})
    `);
  } catch (error) {
    console.info("> something went wrong", error.mesage);
    return null;
  }
};
const futureMovies = async (db) => {
  try {
    return await db.query(sql`
    SELECT title, release_date
    FROM movies
    WHERE release_date > CURRENT_DATE
    `);
  } catch (error) {
    console.info("> something went wrong", error.mesage);
    return null;
  }
};
const releasedMovies = async (db, from, to) => {
  try {
    return await db.query(sql`
    SELECT title, us_gross, EXTRACT(YEAR FROM release_date) AS releaseYr
    FROM movies
    WHERE title IS NOT NULL
    GROUP BY  title, us_gross, release_date
    HAVING EXTRACT(YEAR FROM release_date) BETWEEN ${from} AND ${to}
    ORDER BY releaseYr DESC
    `);
  } catch (error) {
    console.info("> something went wrong", error.mesage);
    return null;
  }
};
const usGrossWWGross = async (db, gross_value) => {
  try {
    return await db.query(sql`
    SELECT title, us_gross, worldwide_gross
    FROM movies
    WHERE (us_gross = ${gross_value}) OR (worldwide_gross = ${gross_value})
    `);
  } catch (error) {
    console.info("> something went wrong", error.mesage);
    return null;
  }
};
const lowestUSGross = async (db, lower) => {
  try {
    return await db.query(sql`
    SELECT title, us_gross
    FROM movies
    WHERE us_gross > 0
    ORDER BY us_gross ASC
    LIMIT ${lower}
    `);
  } catch (error) {
    console.info("> something went wrong", error.mesage);
    return null;
  }
};
const titleStartsWith = async (db, letter) => {
  const search = `${letter}%`;
  try {
    return await db.query(sql`
    SELECT title, source
    FROM movies
    WHERE title LIKE ${search}
    `);
  } catch (error) {
    console.info("> something went wrong", error.mesage);
    return null;
  }
};
const sonyPicturesMovies = async (db) => {
  try {
    return await db.query(sql`
    SELECT distributor, production_budget, creative_type, major_genre
    FROM movies
    WHERE (production_budget > 10000000) AND (distributor = 'Sony Pictures')
    `);
  } catch (error) {
    console.info("> something went wrong", error.mesage);
    return null;
  }
};

module.exports = {
  allMoviesNotNull,
  titleStartsWith,
  sonyPicturesMovies,
  lowestUSGross,
  usGrossWWGross,
  releasedMovies,
  futureMovies,
  mpaaRating,
  productionBudget,
  mostExpensiveMovies,
  remake,
  imdbNotNull,
  rottenTomatoes,
  bestRatedMovies,
  notRatedProdBudget,
};
