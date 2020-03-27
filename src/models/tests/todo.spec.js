const {
  insert,
  updateById,
  deletebyId,
  findAll,
  todos
} = require('../todo')

describe('Test todo model', () => {
  it('should create todo & return inserted todo', () => {
    const inserted = insert({
      id: 1,
      title: 'First Todo'
    });
    expect(inserted).toEqual({
      id: 1,
      title: 'First Todo',
      completed: false
    });
    expect(todos.length).toEqual(1);
  });

  it('should update todo &/ return updated one', () => {
    // const inserted = insert({
    //   id: 1,
    //   title: 'First Todo'
    // })
    const updated = updateById({
      id: 1,
      title: 'Second Todo'
    })

    expect(updated.id).toEqual(1);
    expect(updated.title).toEqual('Second Todo');
    expect(updated.completed).toEqual(false);
  });
  it('Should return false if could not found todo item', () => {
    // insert({
    //   id: 1,
    //   title: 'First Todo'
    // });
    const updated = updateById({
      id: 2,
      title: 'Second Todo'
    });

    expect(updated).toEqual(false);
  });

  it('Should delete todo with id', () => {
    // insert({
    //   id: 1,
    //   title: 'First Todo'
    // });
    const deleted = deletebyId(1);
    expect(deleted).toEqual(true);
    expect(todos.length).toEqual(0);
  });

  it('Should return false if could not delete todo item', () => {
    insert({
      id: 1,
      title: 'First Todo'
    });
    const deleted = deletebyId(2);
    expect(deleted).toEqual(false);
    expect(todos.length).toEqual(1);
  });

  it('Should return  All Todos', () => {
    insert({
      id: 2,
      title: 'Second Todo'
    });
  
    const todoList = findAll();
    expect(todoList).toEqual(todos)
  });

  it('Should return all active todos', () => {
    insert({
      id: 3,
      title: 'Third Todo'
    });
    insert({
      id: 4,
      title: '4th Todo'
    });
    updateById({
      id: 2,
      completed: true
    })
    const todoList = findAll({
      completed: false
    });
    expect(todoList.length).toEqual(3)
  });

})