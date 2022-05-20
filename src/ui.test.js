import Storage from './storage.js';

const store =  new Storage();

const task1 = { description: 'write first test', completed: false, index: 1};
const task2 = { description: 'Debug first test',  completed: false, index: 2};
const task3 = { description: 'Finish up the test',  completed: true,  index: 3};



//add task to the todo list
describe('Add tasks to the todo list', () => {
  test('Todo list should have a length of 1', () => {
   //Act, 
   store.updateLocalStorage(task1);
   //Assert
   expect(store.checkLocalStorage().length).toEqual(1);
  });
});


//remove task from todo list