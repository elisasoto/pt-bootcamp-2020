const express = require("express");
const fs = require("fs");
const router = express.Router();

const BEER_DB = "src/db/beers.json";

// SERVICIO QUE TRAE TODAS LAS CERVEZAS
/* router.get('/', (req,res)=> {
    fs.readFile(BEER_DB, function (err,data){
        if(!err){
            res.status(200).json({
                succes: true,
                length: data.length,
                data: JSON.parse(data)
            })
        }else {
            res.status(500).json({
                success: false, 
                message: 'something went wrong'
            })
        }
    })
}) */

// SERVICIO PARA TRAER LAS PRIMERAS 25 CERVEZAS
router.get("/", async (req, res) => {
  try {
    const beerslist = await fs.readFileSync(BEER_DB);
    const beersJSON = JSON.parse(beerslist);
    const first25 = beersJSON.slice(0, 25);
    res.status(200).json({
      succes: true,
      length: first25.length,
      data: first25,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "something went wrong",
    });
  }
});

// SERVICIO PARA OBTENER UNA CERVEZA ALEATORIA
router.get("/random", async (req, res) => {
  try {
    const beerslist = await fs.readFileSync(BEER_DB);
    const beersJSON = JSON.parse(beerslist);
    const randomBeer = beersJSON[Math.floor(Math.random() * beersJSON.length)];
    res.status(200).json({
      succes: true,
      data: randomBeer,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "something went wrong",
    });
  }
});

// SERVICIO PARA OBTENER UNA CERVEZA EN FUNCION DE SU ID
router.get("/:id", async (req, res) => {
  try {
    const beerslist = await fs.readFileSync(BEER_DB);
    const beersJSON = JSON.parse(beerslist);
    const filterdBeer = beersJSON.filter((beer) => {
      return beer.id === +req.params.id;
    });
    res.status(200).json({
      succes: true,
      data: filterdBeer,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "something went wrong",
    });
  }
});

// SERVICIO PARA OBTENER NUMERO DETERMINADO DE CERVEZAS EN UNA PAGINA DETERMINADA
router.get("/page/:page/per_page/:per_page", async (req, res) => {
  try {
    const { page, per_page } = req.params;
    const beerslist = await fs.readFileSync(BEER_DB);
    const beersJSON = JSON.parse(beerslist);
    const total = page * per_page;
    const pagination = beersJSON.slice(total - per_page, total);
    res.status(200).json({
      succes: true,
      length: pagination.length,
      next: `http://localhost:3000/beers/page/${Number(page) + 1}/per_page/${per_page}`,
      data: pagination,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "something went wrong",
    });
  }
});

// POST DE UNA NUEVA CERVEZA

router.post("/add", async (req, res) => {
  try {
    const { id, name, tagline, first_brewed, description, image_url } = req.body
    const beerslist = await fs.readFileSync(BEER_DB);
    const beersJSON = JSON.parse(beerslist);
    const newBeer = [...beersJSON, {
        id: beersJSON.length + 1,
        name,
        tagline,
        first_brewed,
        description,
        image_url
    }];
    await fs.writeFileSync(BEER_DB, JSON.stringify(newBeer));
    res.status(200).json({
      success: true,
      data: newBeer,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "something went wrong",
    });
  }
});

module.exports = router;