import './style.css';
import AppInterface from './ui.js';
import Storage from './storage.js';
import Task from './task.js';
import globalContext from './global.js';



const form = document.querySelector(".todo-form");
const input = document.querySelector('.add-item');
const toDosList = document.querySelector('.todos');
const allCompleted = document.querySelector('#remove-completed-tasks');
const refresh = document.querySelector('.fa-rotate');
const store = new Storage();
const userInterface = new AppInterface();
let tasksArray = globalContext.tasksArray

//on form submit
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const inputValue = input.value;
  if(inputValue){
    const task = new Task(inputValue, false, tasksArray.length+1);
    const todo_task = userInterface.addTaskToToDosList(task);
    toDosList.appendChild(todo_task);
    input.value = '';
    //  update tasksArray & localStorage
    tasksArray.push(task);
    console.log(tasksArray)
    store.updateLocalStorage(tasksArray);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  tasksArray = store.checkLocalStorage();
  if(tasksArray.length < 1) return;
  tasksArray.forEach(task => {
    const todo_task = userInterface.addTaskToToDosList(task);
    toDosList.appendChild(todo_task);
  });
});

allCompleted.addEventListener('click', () => {
  userInterface.removeAllChecked();
})

refresh.addEventListener('click', () => {
  userInterface.removeAllChecked();
})


