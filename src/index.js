import './style.css';
import AppInterface from './ui.js';
import Storage from './storage.js';
import Task from './task.js';

const form = document.querySelector(".todo-form");
const input = document.querySelector('.add-item');
const toDosList = document.querySelector('.todos');
const store = new Storage();
const userInterface = new AppInterface();
let listLength = 0;

//on form submit
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const inputValue = input.value;
  if(inputValue){
    listLength = listLength + 1;
    const task = new Task(inputValue, false, listLength);
    const todo_task = userInterface.addTaskToToDosList(task);
    toDosList.appendChild(todo_task);
  }

});




// const toDoTasks = store.checkStorage();

// // populate the todo list on page load
// document.addEventListener('DOMContentLoaded', () => {
//   const taskArray = store.checkStorage();
//   if (taskArray.length > 0) {
//     AppInterface.populateToDoList(taskArray);
//   }
// });

// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const activity = inputActivity.value;

//   if (activity !== '') {
//     inputActivity.value = '';
//     // create todo activity object
//     listLength = listLength + 1;
//     const task = {
//       description: activity,
//       completed: false,
//       index: listLength,
//     };
//     // perfome updates
//     toDoTasks.push(task);
//     AppInterface.addTaskToList(task);
//     store.updateStorage(toDoTasks);
//   }
// });
