const express = require('express')
const router = express.Router();
const {
  createTodo,
  updateTodo,
  getTodoList,
  deleteTodo,
  clearCompleted
} = require('../controllers/TodoControllers')

// - Create Todo (Create single Todo for each time) (`/api/createTodo`)
// - Update Toda & Mark this todo as completed (`/api/updateTodo`)
// - Get All Todo (`/api/todos`)
// - Get All completed todos(`/api/todos` with params : `completed: boolean`)
// - Get All activated todos(`/api/todos` with params : `completed: false`)
// - Delete Todo (`/api/deleteTodo`)
// - Clear Completed todos (`/api/clearCompleted`)


// definde the home page route
router.post('/createTodo', createTodo);
router.post('/updateTodo', updateTodo);
router.post('/todos', getTodoList);
router.post('/deleteTodo', deleteTodo);
router.post('/clearCompleted', clearCompleted);


module.exports = router;