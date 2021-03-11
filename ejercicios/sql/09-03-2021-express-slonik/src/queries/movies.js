const { sql } = require('slonik')

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

const productionBudget = async (db) => {
  try {
    return await db.query(sql`
    SELECT title, production_budget, distributor
    FROM movies
    WHERE production_budget < 500000
    `);
  } catch (error) {
    console.info("> something went wrong", error.mesage);
    return null;
  }
};

const mostExpensiveMovies = async (db) => {
  try {
    return await db.query(sql`
    SELECT title, major_genre, production_budget
    FROM movies
    WHERE production_budget IS NOT NULL
    ORDER BY production_budget DESC
    LIMIT 10
    `);
  } catch (error) {
    console.info("> something went wrong", error.mesage);
    return null;
  }
};

const remake = async (db) => {
  try {
    return await db.query(sql`
    SELECT title, source
    FROM movies
    WHERE source = 'Remake'
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
const rottenTomatoes = async (db) => {
  try {
    return await db.query(sql`
    SELECT title, rotten_tomatoes_rating
    FROM movies
    WHERE rotten_tomatoes_rating IS NOT NULL
    ORDER BY rotten_tomatoes_rating ASC 
    LIMIT 100
    `);
  } catch (error) {
    console.info("> something went wrong", error.mesage);
    return null;
  }
};
const bestRatedMovies = async (db) => {
  try {
    return await db.query(sql`
    SELECT title, major_genre, imdb_rating, imdb_votes
    FROM movies
    WHERE imdb_rating IS NOT NULL
    ORDER BY imdb_rating DESC, imdb_votes DESC
    LIMIT 20
    `);
  } catch (error) {
    console.info("> something went wrong", error.mesage);
    return null;
  }
};
const notRatedProdBudget = async (db) => {
  try {
    return await db.query(sql`
    SELECT SUM(production_budget) AS NotRated_ProdBudget
    FROM movies
    WHERE (title IS NOT NULL) AND (mpaa_rating = 'Not Rated')
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
    WHERE release_date > '2021/03/01'
    `);
  } catch (error) {
    console.info("> something went wrong", error.mesage);
    return null;
  }
};
const moviesBetween50And80 = async (db) => {
  try {
    return await db.query(sql`
    SELECT title, us_gross, EXTRACT(YEAR FROM release_date) AS releaseYr
    FROM movies
    WHERE title IS NOT NULL
    GROUP BY  title, us_gross, release_date
    HAVING EXTRACT(YEAR FROM release_date) BETWEEN 1950 AND 1980
    ORDER BY releaseYr DESC
    `);
  } catch (error) {
    console.info("> something went wrong", error.mesage);
    return null;
  }
};
const usGrossWWGross = async (db) => {
  try {
    return await db.query(sql`
    SELECT title, us_gross, worldwide_gross
    FROM movies
    WHERE (us_gross = 0) AND (worldwide_gross = 0)
    `);
  } catch (error) {
    console.info("> something went wrong", error.mesage);
    return null;
  }
};
const lowestUSGross = async (db) => {
  try {
    return await db.query(sql`
    SELECT title, us_gross
    FROM movies
    WHERE us_gross >0
    ORDER BY us_gross ASC
    LIMIT 50
    `);
  } catch (error) {
    console.info("> something went wrong", error.mesage);
    return null;
  }
};
const titleStartsWithF = async (db) => {
  try {
    return await db.query(sql`
    SELECT title, source
    FROM movies
    WHERE title LIKE 'F%'
    `);
  } catch (error) {
    console.info("> something went wrong", error.mesage);
    return null;
  }
};
const sonyPicturesMovies= async (db) => {
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
    titleStartsWithF,
    sonyPicturesMovies, lowestUSGross, usGrossWWGross,moviesBetween50And80,futureMovies, mpaaRating,productionBudget,mostExpensiveMovies, remake, imdbNotNull, rottenTomatoes, bestRatedMovies, notRatedProdBudget
}
