const { Router } = require('express');

const { readFile, writeFile } = require('../utils/fileReaderWriter');
const { toLower } = require('../utils/functions');

const router = Router();

router.get('/', (req, res, next) => {
    http://localhost:3000/scores  // http://localhost:3000/scores?score=6
  try {
    const allKidScores = readFile('../db/scores.json')(__dirname);
    const { score } = req.query

    const filterByScore = allKidScores.filter((element)=>{
        return element.score >= Number(score)
    })

    const noSearchParam = () => filterByScore.length? filterByScore: allKidScores

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
    //URL use: http://localhost:3000/scores/MOLPE
  try {
    const scoreList = readFile('../db/scores.json')(__dirname);
    const filterByName = scoreList.filter((element) => {
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
