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
    WHERE name NOT LIKE '' AND nickname NOT LIKE ''
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
    WHERE nickname NOT LIKE ''
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
    WHERE nationality  'Canadiense'
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
    SELECT query_name, nationality, name, LENGTH(nationality) - LENGTH(REPLACE(nationality,' ','')) + 1 as nationality_count
    FROM directors    
    GROUP BY nationality, query_name, name
    HAVING LENGTH(nationality) - LENGTH(REPLACE(nationality,' ','')) + 1 > 1
    ORDER BY nationality_count DESC
      `);
  } catch (error) {
    console.info("> something went wrong", error.mesage);
    return null;
  }
};

const getMultipleRoles = async (db) => {
  try {
    return await db.query(sql`
    SELECT query_name, roles, array_length (string_to_array (roles, ','), 1) -1 as count_roles
    FROM directors
    WHERE roles NOT LIKE ''
    GROUP BY query_name, roles
    HAVING array_length (string_to_array (roles, ','), 1) -1 > 3
    ORDER BY count_roles DESC
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
  getTwoORMoreNat,
  getMultipleRoles,
};
