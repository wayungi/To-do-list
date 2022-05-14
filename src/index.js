import './style.css';
import AppInterface from './ui.js';
import Storage from './storage.js';
import Task from './task.js';

const form = document.querySelector(".todo-form");
const input = document.querySelector('.add-item');
const toDosList = document.querySelector('.todos');
const allCompleted = document.querySelector('#remove-completed-tasks');
const refresh = document.querySelector('.fa-rotate');
const store = new Storage();
const userInterface = new AppInterface();
let listLength = 0;
let tasksArray = [];

//on form submit
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const inputValue = input.value;
  if(inputValue){
    listLength = listLength + 1;
    const task = new Task(inputValue, false, listLength);
    const todo_task = userInterface.addTaskToToDosList(task);
    toDosList.appendChild(todo_task);
    input.value = '';
  }
});

document.addEventListener('DOMContentLoaded', () => {

});

allCompleted.addEventListener('click', () => {
  userInterface.removeAllChecked();
})

refresh.addEventListener('click', () => {
  userInterface.removeAllChecked();
})


