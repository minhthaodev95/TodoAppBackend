const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const todos = new Schema({
  title: {
    type: String
  },
  completed: {
    type: Boolean
  }
})
let Todos = mongoose.model('todos', todos);


exports.insert = todo => {
  const tobeTodo = {
    ...todo,
    completed: false
  }
  Todos.create(tobeTodo);
  return tobeTodo;
};

// exports.updateById = todo => {
//   let todoIdx = Todos.findIndex(t => t.id === todo.id);
//   if (todoIdx !== -1) {
//     Todos[todoIdx] = {
//       ...Todos[todoIdx],
//       ...todo
//     };
//     return Todos[todoIdx];
//   } else {
//     return false;
//   }
// };

// exports.deletebyId = id => {
//   const todoIdx = Todos.findIndex(todo => todo.id === id); // indedx ò todo // -1
//   if (todoIdx === -1) {
//     return false;
//   }

//   Todos.splice(todoIdx, 1); // delete. Call mongodb
//   return true;
// }

// exports.clearCompleted = () => {
//   Todos.forEach(todo => {
//     if (todo.completed === true) {
//       const todoIdx = Todos.indexOf(todo);
//       Todos.splice(todoIdx, 1);
//     }
//   })
//   return true;

// }




exports.todos = Todos