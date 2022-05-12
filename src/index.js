import './style.css';
import AppInterface from './ui.js';

const form = document.querySelector('.todo-form');
const inputActivity = document.querySelector('.add-item');

const toDoTasks = [
  {
    description:'Watch the chelsea match',
    completed: false,
    index: 0
  },
  {
    description:'Take a nap',
    completed: false,
    index: 1
  },
  {
    description:'Complete the todo app',
    completed: false,
    index: 2
  }
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
  const task = {
    description: activity,
    completed: false,
    index:AppInterface.incrementIndex()
  }

  // rough
  toDoTasks.push(task);
  console.log(toDoTasks);

})


