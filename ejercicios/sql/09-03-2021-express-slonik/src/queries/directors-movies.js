const { sql } = require("slonik");

// Directors-movies-related queries

const directorAndDistributor = async (db) => {
  try {
    return await db.query(sql`
    SELECT query_name, production_budget, distributor
    FROM movies 
    INNER JOIN directors ON (directors.id = movies.director)
    WHERE (distributor IS NOT NULL)
    `);
  } catch (error) {
    console.info("> something went wrong", error.mesage);
    return null;
  }
};

const countMoviesByDirector = async (db) => {
  try {
    return await db.query(sql`
    SELECT DISTINCT query_name, COUNT(title) AS total_Movies
    FROM movies 
    INNER JOIN directors ON (directors.id = movies.director)
    WHERE (title IS NOT NULL)
    GROUP BY query_name
    `);
  } catch (error) {
    console.info("> something went wrong", error.mesage);
    return null;
  }
};
const lessVotedIMDB = async (db) => {
  try {
    return await db.query(sql`
    SELECT query_name, title, imdb_votes
    FROM movies 
    INNER JOIN directors ON (directors.id = movies.director)
    ORDER BY imdb_votes ASC
    LIMIT 50
    `);
  } catch (error) {
    console.info("> something went wrong", error.mesage);
    return null;
  }
};

const nolanMovies = async (db) => {
  try {
    return await db.query(sql`
    SELECT query_name, distributor 
    FROM movies 
    INNER JOIN directors ON (directors.id = movies.director)
    WHERE query_name LIKE '%Nolan'
    `);
  } catch (error) {
    console.info("> something went wrong", error.mesage);
    return null;
  }
};
const bestDirectorUS = async (db) => {
  try {
    return await db.query(sql`
    SELECT DISTINCT name, us_gross
    FROM movies 
    INNER JOIN directors ON (directors.id = movies.director)
    WHERE us_gross IS NOT NULL
    ORDER BY us_gross DESC
    LIMIT 1
    `);
  } catch (error) {
    console.info("> something went wrong", error.mesage);
    return null;
  }
};
const directorMoviesAfter2000 = async (db) => {
  try {
    return await db.query(sql`
    SELECT DISTINCT query_name, COUNT(title) AS total_Movies
    FROM movies 
    INNER JOIN directors ON (directors.id = movies.director)
    WHERE (title IS NOT NULL) AND (release_date > '2000/01/01')
    GROUP BY query_name
    ORDER BY total_Movies DESC
    LIMIT 1
    `);
  } catch (error) {
    console.info("> something went wrong", error.mesage);
    return null;
  }
};
const dramaDirectos = async (db) => {
  try {
    return await db.query(sql`
    SELECT name, major_genre, rotten_tomatoes_rating
    FROM movies 
    INNER JOIN directors ON (directors.id = movies.director)
    WHERE (rotten_tomatoes_rating > 70) AND (major_genre = 'Drama')
    `);
  } catch (error) {
    console.info("> something went wrong", error.mesage);
    return null;
  }
};
const australianDirectors= async (db) => {
  try {
    return await db.query(sql`
    SELECT name, nationality, release_date, EXTRACT(YEAR FROM release_date)
    FROM movies 
    INNER JOIN directors ON (directors.id = movies.director)
    WHERE (nationality LIKE 'Aus%') 
    GROUP BY name, release_date, nationality
    HAVING EXTRACT(YEAR FROM release_date)<1995
    `);
  } catch (error) {
    console.info("> something went wrong", error.mesage);
    return null;
  }
};

const pg13= async (db) => {
  try {
    return await db.query(sql`
    SELECT name, title, release_date, mpaa_rating
    FROM movies 
    INNER JOIN directors ON (directors.id = movies.director)
    WHERE mpaa_rating = 'PG-13' 
    `);
  } catch (error) {
    console.info("> something went wrong", error.mesage);
    return null;
  }
};
const bestCanadianDirector= async (db) => {
  try {
    return await db.query(sql`
    SELECT name, AVG(imdb_rating)
    FROM movies 
    INNER JOIN directors ON (directors.id = movies.director)
    WHERE nationality = 'Canadiense'
    GROUP BY name
    ORDER BY avg DESC
    LIMIT 1
    `);
  } catch (error) {
    console.info("> something went wrong", error.mesage);
    return null;
  }
};

// LOS ROTTEN DAN 100?
const bestRottenAndImdb= async (db) => {
  try {
    return await db.query(sql`
    SELECT title, AVG(rotten_tomatoes_rating) AS rotten, AVG(imdb_rating) AS imdb
    FROM movies 
    INNER JOIN directors ON (directors.id = movies.director)
    WHERE (rotten_tomatoes_rating IS NOT NULL) AND (imdb_rating IS NOT NULL)
    GROUP BY title
    ORDER BY rotten DESC, imdb DESC
    LIMIT 20
    `);
  } catch (error) {
    console.info("> something went wrong", error.mesage);
    return null;
  }
};
const basedOnGame= async (db) => {
  try {
    return await db.query(sql`
    SELECT name, release_date
    FROM movies 
    INNER JOIN directors ON (directors.id = movies.director)
    WHERE (source = 'Based on Game') AND (us_gross < 500000)
    `);
  } catch (error) {
    console.info("> something went wrong", error.mesage);
    return null;
  }
};


module.exports = { 
    directorAndDistributor,  
    countMoviesByDirector,
    lessVotedIMDB,
    nolanMovies,
    bestDirectorUS,
    directorMoviesAfter2000,
    dramaDirectos,
    australianDirectors,
    pg13,
    bestCanadianDirector,
    bestRottenAndImdb,
    basedOnGame
    };
