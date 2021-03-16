const { sql } = require("slonik");

const clients = async (db) => {
    try {
      return await db.query(sql`
      SELECT first_name, last_name, full_name, job_title, job_area, job_type, last_rent, country, vehicle, manufacturer, model, type, fuel, color, license_plate, stock, weekle_price
      FROM rents
      INNER JOIN clients ON (rents.client_id = clients.id)
      INNER JOIN vehicles ON (rents.vehicle_vin = vehicles.VIN)
      `);
    } catch (error) {
      console.info("> something went wrong", error.mesage);
      return null;
    }
  };

  const allRents = async (db) => {
    try {
      return await db.query(sql`
      SELECT full_name, last_rent
    FROM rents
    INNER JOIN clients ON (rents.client_id = clients.id)
    INNER JOIN vehicles ON (rents.vehicle_vin = vehicles.VIN)
    WHERE last_rent IS NOT NULL
      `);
    } catch (error) {
      console.info("> something went wrong", error.mesage);
      return null;
    }
  };
  
  const userByCountry = async (db) => {
    try {
      return await db.query(sql`
      SELECT full_name, country
      FROM rents
      INNER JOIN clients ON (rents.client_id = clients.id)
      INNER JOIN vehicles ON (rents.vehicle_vin = vehicles.VIN)      
      `);
    } catch (error) {
      console.info("> something went wrong", error.mesage);
      return null;
    }
  };
  

module.exports = {
    clients,
    allRents,
    userByCountry,
};