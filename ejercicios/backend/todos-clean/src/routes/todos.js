const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const toDosDB = path.join(__dirname, '../db/todos.json');
const categoriesDB = path.join(__dirname, '../', 'db', 'categories.json');

//1. Crear un endpoint GET que traiga todos los todos que tenga el servidor. Este enpoint limitará por defecto a 5 los todos que estamos recogiendo.
//3. TBD => Modificar los endpoints anteriores para que los todos que estamos trayendo tengan un campo category con la información de la categoría que tengan asignada.
//6. TBD => Modifica el endpoint inicial que trae todos los todos para gestionarlos por páginas (diviendo cada página por cada 5 todos), esto lo haremos usando req.query.
// 9. Modifica el primer endpoint para que pueda recibir un search param llamado category que permita filtrar todos los todos de la categoría que pedimos. Este campo category será un número con la id de la categoría que buscamos.
// url http://localhost:3000/todos
// url http://localhost:3000/todos?category="category"
// url http://localhost:3000/todos?category=1&page=1&limitPerPage=3

const TODOS_PER_PAGE = 5;
const getPages = (allTodos, limitPerPage) => Math.floor(allTodos.length / limitPerPage);
const getAsNumber = (value, defaultValue) => {
  const valueAsNumber = Number(value);
  return Number.isNaN(valueAsNumber) || valueAsNumber <= 0 ? defaultValue : valueAsNumber;
};

router.get('/', (req, res, next) => {
  try {
    const { category, page, limitPerPage } = req.query;
    /* if(!category || !page || !limitPerPage) {
      next(new Error('Set some query param'))
    } */
    const reqPage = getAsNumber(page, 1);
    const reqQty = getAsNumber(limitPerPage, TODOS_PER_PAGE);

    const startIndex = reqPage * reqQty - reqQty;
    const endIndex = reqPage * reqQty;
    const toDoList = fs.readFileSync(toDosDB);
    const categoriesList = fs.readFileSync(categoriesDB);
    const toDoJSON = JSON.parse(toDoList);
    const categoriesListJSON = JSON.parse(categoriesList);
    const todosList = toDoJSON.slice(startIndex, endIndex);

    const pages = getPages(toDoJSON, reqQty);
    const nextPage = reqPage + 1 > pages ? null : reqPage + 1;

    const filteredToDo = todosList.filter((element) => {
      console.log(element.category, category);
      return element.category === Number(category);
    });

    const anyParam = () => (filteredToDo.length ? filteredToDo : toDoJSON);

    res.status(200).json({
      success: 'true',
      length: anyParam().length,
      data: anyParam(), // dani si cambias aqui a filtered todo entonces podemos filtrar por category. Como hacemos para combinar todo? un if? una funcion? por otro lado como hacemos para traer todas las categorias si no buscamos por id? aqui el find no nos vale o si?
      next: `http://${req.headers.host}/todos?page=${nextPage}&amount=${reqQty}`
    });
  } catch (error) {
    next(error);
  }
});

// como regresar first 5 por defecto y si se usa query params entonces query params?
//4. Crear un endpoint de tipo POST que usando req.body reciba los campos necesarios para crear un nuevo todo, escribiéndolo en el archivo todos.json.
//5. Crea al menos 5 todos nuevos usando este endpoint.
//8. Crea al menos 2 todo usando las categorias nuevas
// url http://localhost:3000/todos

router.post('/', (req, res, next) => {
  try {
    const { title, category, description } = req.body;
    const toDoList = fs.readFileSync(toDosDB);
    const toDoJSON = JSON.parse(toDoList);

    const addTodo = [
      ...toDoJSON,
      {
        id: toDoJSON.length + 1,
        title,
        category,
        description
      }
    ];

    fs.writeFileSync(toDosDB, JSON.stringify(addTodo));

    res.status(200).json({
      success: true,
      length: addTodo.length,
      data: addTodo
    });
    console.log(toDoJSON);
  } catch (error) {
    next(error);
  }
});

// 7. Añadir un endpoint POST que me permita añadir nuevas categories al array de categorías.
// url http://localhost:3000/todos/add-category
router.post('/add-category', (req, res, next) => {
  try {
    const { name, color } = req.body; // lo que recibo en el req.body
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

//2. Crear un endpoint GET que traiga un solo todo dada su :id.
//3. Modificar los endpoints anteriores para que los todos que estamos trayendo tengan un campo category con la información de la categoría que tengan asignada.
// con query params // que es la mejor manera para buscar ids y elementos especificos
// http://localhost:3000/todos/11
router.get('/:id', (req, res, next) => {
  try {
    const toDoList = fs.readFileSync(toDosDB);
    const categoriesList = fs.readFileSync(categoriesDB);
    const toDoJSON = JSON.parse(toDoList);
    const categoriesListJSON = JSON.parse(categoriesList);

    //con filter esta ok si solo queremos hacer el punto 2, pero para el punto 3, es mejor utilizar find
    // const filteredToDo = toDoJSON.filter(
    //   (element) => element.id === Number(req.params.id)
    // );

    const foundItem = toDoJSON.find((element) => {
      return element.id === Number(req.params.id);
    });

    const item = categoriesListJSON.find((element) => foundItem.category === element.id);

    res.status(200).json({
      success: true,
      data: { ...foundItem, category: item }
    });
  } catch (error) {
    next(error);
  }
});

// url http://localhost:3000/todos/id?id=1
// con search-params, esta es la manera de hacerlo con search params sin embargo no es la manera más optima de realizarlo, para esto es mejor utilizar req.params
// router.get("/id", (req, res, next) => {
//   try {
//     const { id } = req.query;
//     const toDoList = fs.readFileSync(toDosDB);
//     const categoriesList = fs.readFileSync(categoriesDB);
//     const toDoJSON = JSON.parse(toDoList);
//     const categoriesListJSON = JSON.parse(categoriesList);

//     const foundItem = toDoJSON.find((element) => {
//       return element.id === Number(id);
//     });

//     const item = categoriesListJSON.find(({ id }) => foundItem.category === id);

//     res.status(200).json({
//       success: "true",
//       /* length: filteredToDo.length, */
//       data: { ...foundItem, category: item },
//     });
//   } catch (error) {
//     next(error);
//   }
// });

// 10. CREAR UN PUT // para modificar una entrada
// url http://localhost:3000/todos/11
router.put('/:id', (req, res, next) => {
  try {
    const { title, category, description } = req.body;
    const toDoList = fs.readFileSync(toDosDB);
    const toDoJSON = JSON.parse(toDoList);

    const filteredItem = toDoJSON.map((todo) => {
      if (todo.id === Number(req.params.id)) {
        return {
          id: todo.id,
          title,
          category,
          description
        };
      }
      return todo;
    });

    fs.writeFileSync(toDosDB, JSON.stringify(filteredItem));

    res.status(200).json({
      success: true,
      data: filteredItem
    });
  } catch (error) {
    next(error);
  }
});

// 11. CREAR UN DELETE
// http://localhost:3000/todos/5 elimine el test
router.delete('/:id', (req, res, next) => {
  try {
    const toDoList = fs.readFileSync(toDosDB);
    const toDoJSON = JSON.parse(toDoList);
    const filteringByID = toDoJSON.filter((todo) => todo.id !== Number(req.params.id));
    res.status(200).json({
      success: true,
      length: filteringByID.length,
      data: filteringByID
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
