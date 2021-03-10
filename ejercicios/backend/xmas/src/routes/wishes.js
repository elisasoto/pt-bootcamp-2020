const { Router } = require('express');

const { readFile, writeFile } = require('../utils/fileReaderWriter');
const { toLower } = require('../utils/functions');

const router = Router();

router.get('/', (req, res, next) => {
  // URL use = http://localhost:3000/wishes/?present=computer // http://localhost:3000/wishes
  try {
    const kidWishes = readFile('../db/wishes.json')(__dirname);
    const { present }  = req.query
    const filteredPresent = kidWishes.filter((element)=>element.presents.includes(present))

    const noSearchParam = () => filteredPresent.length? filteredPresent: kidWishes

    res.status(200).json({
      ok: true,
      length: noSearchParam().length,
      data: noSearchParam()
    });
  } catch (error) {
    next(error);
  }
});

router.get('/:name', (req, res, next) => {
  //URL use = http://localhost:3000/wishes/MOLPE
  try {
    const kidlist = readFile('../db/wishes.json')(__dirname);
    const scorelist = readFile('../db/scores.json')(__dirname);
    const scoresAndWishes = kidlist.map((element, i)=> Object.assign({}, element, scorelist[i]));
    const filterByName = scoresAndWishes.filter((element) => {
      return toLower(element.name) === toLower(req.params.name);
    });

    res.status(200).json({
      ok: true,
      data: filterByName
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
