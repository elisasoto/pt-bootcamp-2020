const { Router } = require('express');

const { readFile, writeFile } = require('../utils/fileReaderWriter');

const { toLower } = require('../utils/functions');

const router = Router();

router.get('/', (req, res, next) => {
  // http://localhost:3000/presents
  try {
    const presentsRead = readFile('../db/presents.json')(__dirname);
    res.status(200).json({
      success: true,
      length: presentsRead.length,
      data: presentsRead
    });
  } catch (error) {
    next(error);
  }
});

router.post('/', (req, res, next) => {
  // http://localhost:3000/presents
  try {
    const { name, presents } = req.body;

    const newPresent = {
      name,
      presents
    };

    const presentsRead = readFile('../db/presents.json')(__dirname);
    const myPresentsList = [...presentsRead, newPresent];
    writeFile('../db/presents.json', myPresentsList)(__dirname);

    res.status(200).json({
      success: true,
      length: myPresentsList.length,
      data: myPresentsList
    });
  } catch (error) {
    next(error);
  }
});

router.put('/addPresent/:name', (req, res, next) => {
  // URL http://localhost:3000/presents/addPresent/isabel
  try {
    const { present } = req.body;
    const presentsRead = readFile('../db/presents.json')(__dirname);
    const addedPresent = presentsRead.map((element) => {
      if (toLower(element.name) === toLower(req.params.name)) {
        return {
          name: element.name,
          presents: element.presents,
          present,
          score: element.score
        };
      }
      return element;
    });
    writeFile('../db/presents.json', addedPresent)(__dirname);
    res.status(200).json({
      success: true,
      length: addedPresent.length,
      data: addedPresent
    });
  } catch (error) {
    next(error);
  }
});

router.put('/finalList/:name', (req, res, next) => {
  // URL http://localhost:3000/presents/finalList/sol
  try {
    const presentsList = readFile('../db/presents.json')(__dirname);
    const pricesList = readFile('../db/prices.json')(__dirname);

    // // get presents of person with this name
    const { presents: filteredNamePresents = [] } =
      presentsList.find((element) => toLower(element.name) === toLower(req.params.name)) || {};

    // // get prices list of these presents
    const presentsPrices = filteredNamePresents.reduce((acc, item) => {
      const { price } = pricesList.find((price) => price.present === item) || {};
      acc = price ? [...acc, price] : acc;
      return acc;
    }, []);

    // calculate totla sum of the prices
    const sum = presentsPrices.reduce((accumulator, currentValue) => accumulator + currentValue);

    // max value of the presents
    function arrayMax(arr) {
      return arr.reduce(function (p, v) {
        return p > v ? p : v;
      });
    }

    // // find the position of the max value present
    const positionOfPresent = presentsPrices.indexOf(arrayMax(presentsPrices));

    // // return the final presents list

    const finalList = presentsList.filter((element) => {
      if (element.score > 8 && sum < 7000) {
        return toLower(element.name) === toLower(req.params.name);
      } else if (element.score >= 5 && element.score <= 7 && sum > 2000) {
        element.presents.splice(positionOfPresent, 1);
        element.presents;
        return toLower(element.name) === toLower(req.params.name);
      } else if (element.score <= 5 && sum > 300) {
        element.presents.splice(positionOfPresent, 1);
        element.presents;
        return toLower(element.name) === toLower(req.params.name);
      }

      return toLower(element.name) === toLower(req.params.name);
    });

    // return final array of new presents with the rest of the rewritten final list
    let finalArray = presentsList.map((item) => {
      if (toLower(item.name) === toLower(req.params.name)) {
        return finalList[0];
      }
      return item;
    });

    writeFile('../db/presents.json', finalArray)(__dirname);

    res.status(200).json({
      success: true,
      length: finalArray.length,
      data: finalArray
    });
  } catch (error) {
    next(error);
  }
});

router.put('/:name', (req, res, next) => {
  // http://localhost:3000/presents/:name
  // FIXME: TENGO QUE HACER SAVE CADA VEZ QUE CONSULTABA A UN NIÑO, SI NO NO SE SALVA EL ARRAY?
  // FIXME: LOS NOMBRES SE ME PUEDEN DUPLICAR BAJO ESTA SOLUCION. ¿COMO PREVENIR ESTO?
  try {
    const scorelist = readFile('../db/scores.json')(__dirname);
    const wishesList = readFile('../db/wishes.json')(__dirname);

    let newArray = wishesList.map((item, i) => Object.assign({}, item, scorelist[i]));

    const filterByName = newArray.filter((element, i) => {
      let newPerson = [];
      if (element.score >= 7) {
        return (newPerson = toLower(element.name) === toLower(req.params.name));
      } else if (element.score >= 5 && element.score <= 7) {
        element.presents.push('coal');
        return (newPerson = toLower(element.name) === toLower(req.params.name));
      } else if (element.score < 5) {
        element.presents[1] = 'coal';
        return (newPerson = toLower(element.name) === toLower(req.params.name));
      }
      return newPerson;
    });

    const presentsRead = readFile('../db/presents.json')(__dirname);
    let finalArray = presentsRead.map((item) => {
      if (toLower(item.name) === toLower(req.params.name)) {
        return filterByName[0];
      }
      return item;
    });

    writeFile('../db/presents.json', finalArray)(__dirname);

    res.status(200).json({
      success: true,
      length: finalArray.length,
      data: finalArray
    });
  } catch (error) {
    next(error);
  }
});

router.delete('/:name', (req, res, next) => {
  // URL: http://localhost:3000/presents/test
  try {
    const presentsRead = readFile('../db/presents.json')(__dirname);
    const deleteAKidByName = presentsRead.filter(
      (element) => toLower(element.name) !== toLower(req.params.name)
    );
    writeFile('../db/presents.json', deleteAKidByName)(__dirname);

    res.status(200).json({
      success: true,
      length: deleteAKidByName.length,
      data: deleteAKidByName
    });
  } catch (error) {
    next(error);
  }
});

// router.put('/addPresent/:name', (req,res,next))

module.exports = router;
