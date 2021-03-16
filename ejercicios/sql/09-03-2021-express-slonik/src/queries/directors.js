const { sql } = require("slonik");

// Directors-movies-related queries

const getNotEmptyDirectorsName = async (db) => {
  try {
    return await db.query(sql`
    SELECT name
    FROM directors
    WHERE name IS NOT NULL
    `);
  } catch (error) {
    console.info("> something went wrong", error.mesage);
    return null;
  }
};

const getQueryname = async (db) => {
  try {
    return await db.query(sql`
    SELECT query_name, name, nickname
    FROM directors
    WHERE name IS NOT NULL
      `);
  } catch (error) {
    console.info("> something went wrong", error.mesage);
    return null;
  }
};

const getPicAndName = async (db) => {
  try {
    return await db.query(sql`
    SELECT nickname, pic
    FROM directors
    WHERE nickname > ''
      `);
  } catch (error) {
    console.info("> something went wrong", error.mesage);
    return null;
  }
};

const getCanadians = async (db) => {
  try {
    return await db.query(sql`
    SELECT query_name, nationality
    FROM directors
    WHERE nationality = 'Canadiense'
      `);
  } catch (error) {
    console.info("> something went wrong", error.mesage);
    return null;
  }
};

const getBritUS = async (db) => {
  try {
    return await db.query(sql`
    SELECT query_name, nationality
    FROM directors
    WHERE (nationality LIKE '%Brit%dounidense%')
      `);
  } catch (error) {
    console.info("> something went wrong", error.mesage);
    return null;
  }
};

const isChessPlayer = async (db) => {
  try {
    return await db.query(sql`
    SELECT query_name, nationality, roles
    FROM directors
    WHERE roles SIMILAR TO '%Aje%'
      `);
  } catch (error) {
    console.info("> something went wrong", error.mesage);
    return null;
  }
};


const getTwoORMoreNat = async (db) => {
  try {
    return await db.query(sql`
    SELECT query_name, nationality, name
    FROM directors
    WHERE (array_length(regexp_split_to_array(nationality, \s), 1) >= 2)
      `);
  } catch (error) {
    console.info("> something went wrong", error.mesage);
    return null;
  }
};





module.exports = {
  getNotEmptyDirectorsName,
  getQueryname,
  getPicAndName,
  getCanadians,
  getBritUS,
  isChessPlayer,
  getTwoORMoreNat
};
