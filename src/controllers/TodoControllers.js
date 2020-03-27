// - Create Todo (Create single Todo for each time) (`/api/createTodo`)
// - Update Toda & Mark this todo as completed (`/api/updateTodo`)
// - Get All Todo (`/api/todos`)
// - Get All completed todos(`/api/todos` with params : `completed: boolean`)
// - Get All activated todos(`/api/todos` with params : `completed: false`)
// - Delete Todo (`/api/deleteTodo`)
// - Clear Completed todos (`/api/clearCompleted`)

const todoModel = require('../models/todo')


// id, title, completed
exports.createTodo = (req, res) => {
  const todo = req.body;
  const inserted = todoModel.insert(todo);
  res.json(inserted)
};

exports.updateTodo = (req, res) => {
  
  const todo = req.body;
  todoModel.todos.find().exec((err, data) => {
    let a;
    data.forEach(data => {
      if (data._id == todo._id) {
        return a = true;
      }
    })

    if (a !== undefined && todo._id !== undefined) {
      todoModel.todos.findByIdAndUpdate(todo._id, {
        $set: todo
      }, (err, result) => {
        if (err) {
          console.log(err);
        }
        console.log("RESULT: " + result);
        res.send('Done !')
      })
    } else {
      res.send('Update fail !!')
    }

  })



};


exports.getTodoList = (req, res) => {
  const {
    completed
  } = req.body;
  if (completed === undefined) {
    todoModel.todos.find().exec((err, todo) => {
      res.json(todo)
    })
  } else {
    todoModel.todos.find().exec((err, todo) => {
      const filtedTodo = todo.filter(t => t.completed === completed)
      res.json(filtedTodo)
    })
  }

};
exports.deleteTodo = (req, res) => {
  const todo = req.body;
  todoModel.todos.findByIdAndRemove(todo._id, (err, result) => {
    if (err) {
      console.log(err);

    }
    console.log(result);
    res.send('Done !')

  });

  // todoModel.deletebyId(id);
  // res.json(todoModel.todos)
};


exports.clearCompleted = (req, res) => {
  todoModel.todos.deleteMany({
    completed: true
  }, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
    res.send('Done !')
  })
};