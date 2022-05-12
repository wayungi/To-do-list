import './style.css';
import AppInterface from './ui.js';


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


document.addEventListener('DOMContentLoaded', () => {
  AppInterface.populateToDoList(toDoTasks);
})
