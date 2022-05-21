import './style.css';
import { getTasksArrayLength, 
  addTaskToToDosList, 
  updatetasksArray,
  checkStorage,
  removeAllChecked } from './ui';
//import {} from './storage.js';

const form = document.querySelector('.todo-form');
const input = document.querySelector('.add-item');
//const toDosList = document.querySelector('.todos');
const allCompleted = document.querySelector('#remove-completed-tasks');
const refresh = document.querySelector('.fa-rotate');

// on form submit
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const inputValue = input.value;
  if (inputValue) {
    const length = getTasksArrayLength() + 1;
    const task = { description: inputValue, completed: false, index: length };
    addTaskToToDosList(task);
    input.value = '';
    updatetasksArray(task);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const tasksArray = checkStorage();
  if (tasksArray.length < 1) return;
  tasksArray.forEach((task) => {
    addTaskToToDosList(task);
  });
});

allCompleted.addEventListener('click', () => {
  removeAllChecked();
});

refresh.addEventListener('click', () => {
  removeAllChecked();
});
