const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const categoriesDB = path.join(__dirname, '../', 'db', 'categories.json');

// por alguna razon este endpoint no funciona para hacer un put

// 7. Añadir un endpoint POST que me permita añadir nuevas categories al array de categorías.
// url http://localhost:3000/categories
router.post('/add', (req, res, next) => {
  try {
    const {name, color } = req.body  // lo que recibo en el req.body
    const categoriesList = fs.readFileSync(categoriesDB);
    const categoriesListJSON = JSON.parse(categoriesList);

    const addCategory = [
        ...categoriesListJSON,
        {
            id: categoriesListJSON.length + 1,
            name, 
            color 
        }
    ];

    fs.writeFileSync(categoriesDB, JSON.stringify(addCategory));

    res.status(200).json({
      success: true,
      length: addCategory.length,
      data: addCategory
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
