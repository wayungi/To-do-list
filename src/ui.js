let tasks = [];

const toDosList = document.querySelector('.todos');

const arrayLength = () => tasks.length;

const addTaskToToDosList = (elemObj) => {
  const { toDoTaskElement, hiddenInputEle, checkbox,inputElement, optionsElement, tasks,toDosList } = elemObj;
  // const toDoTaskElement = toDoTask();
  // const hiddenInputElement = hiddenInputElement(task.index);
  // const checkbox = createCheckBox(task.completed);
  //addCompleteListener(checkbox);
  // const inputElement = createTextInput(task.description);
  // const optionsElement = createOptions();

  toDoTaskElement.appendChild(hiddenInputEle);
  toDoTaskElement.appendChild(checkbox);
  toDoTaskElement.appendChild(inputElement);
  toDoTaskElement.appendChild(optionsElement);
  toDosList.appendChild(toDoTaskElement);
  return;
}

const updateTasks = (activity) => {
  tasks.push(activity);
  return tasks;
}

const toDoTask = () => {
  const todoTaskEl = document.createElement('div');
  todoTaskEl.classList.add('todo-task');
  return todoTaskEl;
}

const hiddenInputElement = (index) => {
  const input = document.createElement('input');
  input.setAttribute('type', 'hidden');
  input.setAttribute('name', 'index');
  input.setAttribute('value', index);
  return input;
}

const createCheckBox = (state) => {
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  if (state) {
    checkbox.setAttribute('checked', 'checked');
  }
  addCheckBoxListener(checkbox);
  addCompleteListener(checkbox);
  return checkbox;
}

const createTextInput = (inputValue) => {
  const input = document.createElement('input');
  input.classList.add('text', 'task-color');
  input.value = inputValue;
  input.setAttribute('readonly', 'readonly');
  input.setAttribute('name', 'my-task');
  return input;
}

const createOptions = () => {
  const edit = document.createElement('i');
  edit.classList.add('fa-solid', 'fa-pen-to-square');
  edit.classList.add('hidden');

  const save = document.createElement('i');
  save.classList.add('fa-solid', 'fa-floppy-disk');
  save.classList.add('hidden');

  const trash = document.createElement('i');
  trash.classList.add('fa-solid', 'fa-trash');
  trash.classList.add('hidden');

  const ellipsis = document.createElement('i');
  ellipsis.classList.add('fa-solid', 'fa-ellipsis-vertical');

  addEditListener(edit, save);
  addSaveListener(save, edit);
  addDeleteListener(trash);
  addDisplayModifier(ellipsis);

  const optionsEl = document.createElement('div');
  optionsEl.classList.add('options');
  optionsEl.appendChild(edit);
  optionsEl.appendChild(save);
  optionsEl.appendChild(trash);
  optionsEl.appendChild(ellipsis);
  return optionsEl;
};

const updateLocalStorage = (updatedArray) => {
  localStorage.setItem('tasks', JSON.stringify(updatedArray));
  return;
}

const addCheckBoxListener = (elem) => {
  elem.addEventListener('click', (e) => {
    const todoTask = e.target.parentElement;
    const index = +todoTask.querySelector('input[name="index"]').value;
    const elementIndex = index - 1;
    if (e.target.checked) {
      // toggle 'completed' field in task to true
      updateCompleted(elementIndex, true);
    } else {
      // toggle 'completed' field in task to false
      updateCompleted(elementIndex, false);
    }
    //update localStorage to reflect the checked status of task
    updateLocalStorage(tasks);
    console.log('checkbox clicked');
  });
};

const addEditListener = (edit, save) => {
  edit.addEventListener('click', (e) => {
    // hide edit icon & show save icon
    this.toggleVisibility(edit, save);
    // get the input field and make it editable with focus
    const todoTask = e.target.parentElement.parentElement;
    const inputFieldEl = todoTask.querySelector('input[name="my-task"]');
    inputFieldEl.removeAttribute('readonly');
    inputFieldEl.focus();
  });
};

const addSaveListener = (save, edit) => {
  save.addEventListener('click', (e) => {
    // hide save icon & display edit icon
    this.toggleVisibility(save, edit);
    // get the input field and make it uneditable
    const todoTask = e.target.parentElement.parentElement;
    const inputFieldEl = todoTask.querySelector('input[name="my-task"]');
    inputFieldEl.setAttribute('readonly', 'readonly');
    // get the parameters for the edit
    const hiddenInputEl = todoTask.querySelector('input[name="index"]');
    this.saveTaskEdit(inputFieldEl.value, hiddenInputEl.value);
  });
};

const addDeleteListener = (elem) => {
  elem.addEventListener('click', (e) => {
    const todoTask = e.target.parentElement.parentElement;
    // index of element to be removed from array
    const index = todoTask.querySelector('input[name="index"]').value;
    todoTask.remove();
    this.deleteTask(index);
  });
};

// on clicking ellipsis, display edit and delete icons
const addDisplayModifier = (elem) => {
  elem.addEventListener('click', (e) => {
    e.target.classList.add('hidden');
    const parent = e.target.parentElement;
    // display edit & delete buttons
    parent.querySelector('.fa-pen-to-square').classList.remove('hidden');
    parent.querySelector('.fa-trash').classList.remove('hidden');
  });
};

// Fade tasks marked as completed
const addCompleteListener = (elem) => {
  elem.addEventListener('click', (e) => {
    const todoTask = e.target.parentElement;
    const inputFieldEl = todoTask.querySelector('input[name="my-task"]');
    if (e.target.checked) {
      inputFieldEl.classList.remove('task-color');
      inputFieldEl.classList.add('completed');
    } else {
      inputFieldEl.classList.add('task-color');
      inputFieldEl.classList.remove('completed');
    }
  });
  return;
};

// const removeAllChecked = () => {
//   const deleteTracker = [...tasksArray];
//   tasksArray = tasksArray.filter((task) => task.completed === false);
//   this.updateAllIndex();
//   store.updateLocalStorage(tasksArray);
//   // remove deleted elements from interface
//   const deleteTarget = deleteTracker.filter((task) => task.completed === true);
//   deleteTarget.forEach((task) => {
//     const { index } = task;
//     const victimTask = document.querySelector(`input[value="${index}"]`);
//     const { parentElement } = victimTask;
//     parentElement.remove();
//   });
// }

// const toggleVisibility =(hideThisEl, showThisEl) => {
//   hideThisEl.classList.add('hidden');
//   showThisEl.classList.remove('hidden');
// }

// get tasks from localStorage and populate out tasks array;
const populateTasks = () => {
  if(localStorage.getItem('tasks')) {
    const storage = JSON.parse(localStorage.getItem('tasks'));
    tasks = [...storage];
    return tasks;
  }
  return tasks;
};

const getTasks = () => {
  return tasks;
};

// const saveTaskEdit = (editedTask, taskIndex) => {
//   const index = +taskIndex;
//   const elementIndex = index - 1;
//   // update the task description
//   tasksArray[elementIndex].description = editedTask;
//   store.updateLocalStorage(tasksArray);
// }

// const deleteTask = (index) => {
//   const elementIndex = +index - 1;
//   tasksArray.splice(elementIndex, 1);
//   this.updateIndex(elementIndex);
//   return;
// }

// reduce the index of all elements after the element that was removed
// const updateIndex = (startIndex) => {
//   for (let i = startIndex; i < tasksArray.length; i += 1) {
//     tasksArray[i].index -= 1;
//   }
//   store.updateLocalStorage(tasksArray);
// }

// const updateAllIndex = () => {
//   let assignedIndex = 0;
//   tasksArray.forEach((task) => {
//     assignedIndex += 1;
//     task.index = assignedIndex;
//   });
// }

// Toggle the completed status of the task (true/false)
const updateCompleted = (elementIndex, state) => {
  tasks[elementIndex].completed = state;
  //store.updateLocalStorage(tasksArray);
  return;
};

module.exports = {
  arrayLength,
  addTaskToToDosList,
  updateTasks,
  updateLocalStorage,
  // updateCompleted,
  // updateAllIndex,
  // updateIndex,
  toDoTask,
  hiddenInputElement, 
  createCheckBox, 
  createTextInput, 
  createOptions,
  // addCheckBoxListener,
  // addEditListener,
  // addSaveListener,
  // addDeleteListener, 
  // addDisplayModifier, 
  // addCompleteListener, 
  // removeAllChecked,
  // toggleVisibility,
    getTasks,
    populateTasks,
  // saveTaskEdit, 
  // deleteTask
};
