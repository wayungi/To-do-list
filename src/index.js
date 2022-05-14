import './style.css';
import AppInterface from './ui.js';
import Task from './task.js';

const form = document.querySelector(".todo-form");
const input = document.querySelector('.add-item');
const toDosList = document.querySelector('.todos');
const allCompleted = document.querySelector('#remove-completed-tasks');
const refresh = document.querySelector('.fa-rotate');
const userInterface = new AppInterface();

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
    userInterface.updatetasksArray(task)
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const tasksArray = userInterface.checkStorage();
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


