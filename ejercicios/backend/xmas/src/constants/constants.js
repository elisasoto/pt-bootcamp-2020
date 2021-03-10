// en este archivo exportamos nuestro puerto

const constants = {
    PORT: process.env.PORT || 3000,
    // Ejemplo de secreto guardado en .env
    hashSecret: process.env.HASH_SECRET || 'dev_secret'
  };
  
  module.exports = constants;