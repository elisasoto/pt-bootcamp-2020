const express = require('express')
const fs = require('fs')
const router = express.Router()
// const todosApi = 'src/db/todos.json'
const path = require('path')
const categoriesApi = path.join(__dirname, '../db/categories.json')
const todosApi = path.join(__dirname, '../db/todos.json')

const TODOS_PER_PAGE = 5
const getPages = (allTodos, amountPerPage) => Math.floor(allTodos.length / amountPerPage);
const getAsNumber = (value, defaultValue) => {
  const valueAsNumber = Number(value);
  return Number.isNaN(valueAsNumber) || valueAsNumber <= 0 ? defaultValue : valueAsNumber;
};

// ?page=1&amount=5
router.get('/', async (req, res, next) => {
  try {
    const { page, amount } = req.query
    const reqPage = getAsNumber(page, 1)
    const reqAmount = getAsNumber(amount, TODOS_PER_PAGE)

    const start = reqPage * reqAmount - reqAmount;
    const end = reqPage * reqAmount;
    const todoSlice = todosApi.slice(start, end)

    const pages = getPages(todosApi, reqAmount);
    const nextPage = reqPage + 1 > pages ? null : reqPage + 1;

    const readingTL = await fs.readFileSync(todosApi)
    const toJSON = JSON.parse(readingTL)

    const mapped = toJSON.filter((category) => category)
    console.info('> allrigth: ', mapped)

    res.status(200).json({
      data: {
        length: toJSON.length,
        data: toJSON
      },
      success: "true"
    })
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const readingTA = await fs.readFileSync(todosApi)
    const caToJson = JSON.parse(readingTA)
    const filteringTheId = caToJson.filter(todo => todo.id === +req.params.id)

    const filteringCa = caToJson.filter((category) => {
      console.info('> reqParams : ', req.params)
      return category.id === +req.params.id
    })
    console.info('> maybe: ', filteringCa)


    res.status(200).json({
      success: true,
      data: filteringTheId,
    })
  } catch (error) {
    next(error)
  }
})

// router.get('/categories', async (req, res, next) => {
//   try {
//     const readingCA = await fs.readFileSync(categoriesApi)
//     const caToJSON = JSON.parse(readingCA)
//     const filteringCA = caToJSON.filter((category) => {
//       console.info('> categoty: ', category)
//     })
//     res.status(200).json({
//       success: true,
//       data: caToJSON,
//     })
//   } catch (error) {
//     next(error)
//   }
// })

router.post('/todo', async (req, res, next) => {
  try {
    const { id, title, category, description } = req.body
    const readingList = await fs.readFileSync(todosApi)
    const readingListJson = JSON.parse(readingList)
    const addTodo = [...readingListJson, {
      id: readingListJson.length + 1,
      title,
      category,
      description
    }]
    await fs.writeFileSync(todosApi, JSON.stringify(addTodo))
    res.status(200).json({
      success: true,
      length: addTodo.length,
      data: addTodo
    })
  } catch (error) {
    next(error)
  }
})

router.post('/new-category', async (req, res, next) => {
  try {
    const { id, name, color } = req.body
    const readingList2 = await fs.readFileSync(categoriesApi)
    const readingListJson2 = JSON.parse(readingList2)
    const addCategory = [...readingListJson2, {
      id: readingListJson2.length + 1,
      name,
      color,
    }]
    await fs.writeFileSync(categoriesApi, JSON.stringify(addCategory))
    res.status(200).json({
      success: true,
      length: addCategory.length,
      data: addCategory
    })
  } catch (error) {
    next(error)
  }
})


// const obj1 = {
//   id: 1,
//   todo: "xx"
//   }

//   const obj2 = {
//   title: "loquesea",
//   hola: "xx"
//   }

//   const returnedTarget = Object.assign(obj1,obj2)

//   console.log(returnedTarget)

router.get('/category/:id', async (req, res, next) => {
  try {
    const readingFileC = await fs.readFileSync(categoriesApi)
    const fileC = JSON.parse(readingFileC)
    const filteringTheId = fileC.filter(category => category.id === +req.params.id)

    const filteringFileC = fileC.filter((category) => {
      // console.info('> reqParams : ', req.params)
      return category.id === +req.params.id
    })
    // console.info('> maybe: ', filteringFileC)


    res.status(200).json({
      success: true,
      data: filteringFileC,
    })
  } catch (error) {
    next(error)
  }
})


router.put('/todos/:id', (req, res, next) => {
  try {
    const { title, category, description } = req.body
    const readingPutList = fs.readFileSync(todosApi)
    const readingPutListJSON = JSON.parse(readingPutList)
    const filteringByID = readingPutListJSON.map((todo) => {
      if (todo.id === +req.params.id) {
        return {
          id: todo.id,
          title,
          category,
          description
        }
      }
      return todo
    })
    fs.writeFileSync(todosApi, JSON.stringify(filteringByID))
    res.status(200).json({
      success: true,
      length: filteringByID.length,
      data: filteringByID
    })
  } catch (error) {
    next(error)
  }
})

router.delete('/todos/delete/:id', (req, res, next) => {
  try {
    const readingPutList = fs.readFileSync(todosApi)
    const readingPutListJSON = JSON.parse(readingPutList)
    const filteringByID = readingPutListJSON.filter(
      todo => todo.id !== +req.params.id)
      res.status(200).json({
        success: true,
        length: filteringByID.length,
        data: filteringByID
      })
  } catch (error) {
    next(error)
  }
})

module.exports = router



// TODO: Hacer lo de anime.flv
// TODO: Función que lea y devuelva en json