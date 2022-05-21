import './style.css';
import { arrayLength, 
         addTaskToToDosList, 
         updateTasks, 
         toDoTask, 
         hiddenInputElement, 
         createCheckBox,
         createTextInput,
         createOptions, 
         updateLocalStorage, 
         getTasks,
         populateTasks, removeAllChecked } from './ui';

const form = document.querySelector('.todo-form');
const input = document.querySelector('.add-item');
const toDosList = document.querySelector('.todos');
const allCompleted = document.querySelector('#remove-completed-tasks');
const refresh = document.querySelector('.fa-rotate');

// on form submit
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const inputValue = input.value;
  if (inputValue) {
    input.value = '';
    const activity = { description: inputValue, completed: false, index: arrayLength() + 1 };
    const toDoTaskElement =  toDoTask();
    const hiddenInputEle = hiddenInputElement(activity.index);
    const checkbox = createCheckBox();
    const inputElement = createTextInput(activity.description);
    const optionsElement = createOptions();
    // create object conatining dom elements for the doto activity
    const elemObj = {
      toDoTaskElement,
      hiddenInputEle,
      checkbox,
      inputElement,
      optionsElement,
      toDosList
    }; 
    addTaskToToDosList(elemObj);
    const updatedArray = updateTasks(activity);
    updateLocalStorage(updatedArray);
  };
});

document.addEventListener('DOMContentLoaded', () => {
  //check local storage and add its elements to our tasks array & return the tasks array
  const tasks = populateTasks();
  if (tasks.length < 1) return;
  tasks.forEach((task) => {
    const activity = task
    const toDoTaskElement =  toDoTask();
    const hiddenInputEle = hiddenInputElement(activity.index);
    const checkbox = createCheckBox();
    const inputElement = createTextInput(activity.desecription);
    const optionsElement = createOptions();
    // create object conatining dom elements for the doto activity
    const elemObj = {
      toDoTaskElement,
      hiddenInputEle,
      checkbox,
      inputElement,
      optionsElement,
      toDosList
    }; 
    addTaskToToDosList(elemObj);
  });
});

allCompleted.addEventListener('click', () => {
  removeAllChecked();
});

refresh.addEventListener('click', () => {
  removeAllChecked();
});
