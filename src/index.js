import './style.css';
import AppInterface from './ui.js';
import Storage from './storage.js';

const store = new Storage();

const form = document.querySelector('.todo-form');
const inputActivity = document.querySelector('.add-item');

const toDoTasks = [
  {
    description:'Watch the chelsea match',
    completed: false,
    index: 0
  },
  {
    description:'Complete the todo app',
    completed: false,
    index: 2
  },
  {
    description:'Take a nap',
    completed: false,
    index: 1
  },
]

console.log(toDoTasks);

// populate the todo list on page load
document.addEventListener('DOMContentLoaded', () => {
  AppInterface.populateToDoList(toDoTasks);
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const activity = inputActivity.value
  inputActivity.value = '';
  // create todo activity object
  const task = {
    description: activity,
    completed: false,
    index:AppInterface.incrementIndex()
  }

  // update the array
  toDoTasks.push(task);
  //Update the interface
  AppInterface.addTaskToList(task);
  //update local storage
  store.updateStorage(toDoTasks);

})


