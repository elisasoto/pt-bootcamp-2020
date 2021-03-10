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

//3
//SELECT nickname, pic
//FROM directors
//WHERE nickname > ''

//4
//SELECT query_name, nationality
//FROM directors
//WHERE nationality = 'Canadiense'

module.exports = { getNotEmptyDirectorsName, getQueryname };
