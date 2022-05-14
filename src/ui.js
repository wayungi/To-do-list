import Storage from "./storage.js";
const store = new Storage();
let tasksArray = store.checkLocalStorage();

export default class AppInterface {
  addTaskToToDosList = (task) => {
    const toDoTaskElement = this.toDoTask();
    const hiddenInputElement = this.hiddenInputElement(task.index);
    const checkbox = this.createCheckBox(task.completed);
    this.addCompleteListener(checkbox);
    const inputElement = this.createTextInput(task.description);
    const optionsElement = this.createOptions();
    toDoTaskElement.appendChild(hiddenInputElement);
    toDoTaskElement.appendChild(checkbox);
    toDoTaskElement.appendChild(inputElement);
    toDoTaskElement.appendChild(optionsElement);
    return toDoTaskElement;
  }

  toDoTask = () => {
    const todoTaskEl = document.createElement('div');
    todoTaskEl.classList.add('todo-task');
    return todoTaskEl;
  }

  hiddenInputElement = index => {
    const input = document.createElement('input');
    input.setAttribute('type','hidden');
    input.setAttribute('name','index');
    input.setAttribute('value', index);
    return input;
  }

  createCheckBox = state => {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    state ? checkbox.setAttribute('checked','checked') : '';
    this.addCheckBoxListener(checkbox);
    return checkbox;
  }

  createTextInput = inputValue => {
    const input = document.createElement('input');
    input.classList.add('text', 'task-color');
    input.value = inputValue;
    input.setAttribute('readonly', 'readonly');
    input.setAttribute('name', 'my-task');
    return input;
  }

  createOptions = () => {
    const edit = document.createElement('i');
    edit.classList.add('fa-solid','fa-pen-to-square');
    edit.classList.add('hidden');
    
    const save = document.createElement('i');
    save.classList.add('fa-solid', 'fa-floppy-disk');
    save.classList.add('hidden');
    
    const trash = document.createElement('i');
    trash.classList.add('fa-solid', 'fa-trash');
    trash.classList.add('hidden');
    
    const ellipsis = document.createElement('i');
    ellipsis.classList.add('fa-solid', 'fa-ellipsis-vertical');

    this.addEditListener(edit, save);
    this.addSaveListener(save, edit);
    this.addDeleteListener(trash);
    this.addDisplayModifier(ellipsis);

    const optionsEl = document.createElement('div');
    optionsEl.classList.add('options')
    optionsEl.appendChild(edit);
    optionsEl.appendChild(save);
    optionsEl.appendChild(trash);
    optionsEl.appendChild(ellipsis);
    return optionsEl;
  };

  addCheckBoxListener = (elem) => {
    elem.addEventListener('click', e => {
      const todo_task = e.target.parentElement;
      const index = +todo_task.querySelector('input[name="index"]').value;
      const elementIndex = index - 1;
      if(e.target.checked) {
        this.updateCompleted(elementIndex, true);
      }else{
        this.updateCompleted(elementIndex, false);
      }
      return;
    });
  };


  addEditListener = (edit, save) => {
    edit.addEventListener('click', (e) => {
      //hide edit icon & show save icon
      this. toggleVisibility(edit, save);
      //get the input field and make it editable with focus
      const todo_task = e.target.parentElement.parentElement;
      const inputFieldEl = todo_task.querySelector('input[name="my-task"]');
      inputFieldEl.removeAttribute('readonly');
      inputFieldEl.focus();
      return;
    });
  };

  addSaveListener = (save, edit) => {
    save.addEventListener('click', (e) => {
      //hide save icon & display edit icon
      this.toggleVisibility(save, edit);
      //get the input field and make it uneditable
      const todo_task = e.target.parentElement.parentElement;
      const inputFieldEl = todo_task.querySelector('input[name="my-task"]');
      inputFieldEl.setAttribute('readonly', 'readonly');
      // get the parameters for the edit
      const hiddenInputEl = todo_task.querySelector('input[name="index"]');
      this.saveTaskEdit(inputFieldEl.value, hiddenInputEl.value);
      return;
    });
  };

  addDeleteListener = elem => {
    elem.addEventListener('click', (e) => {
      const todo_task = e.target.parentElement.parentElement;
      // index of element to be removed from array 
      const index = todo_task.querySelector('input[name="index"]').value;
      todo_task.remove();
      this.deleteTask(index);
      return;
    });
  };

  //on clicking ellipsis, display edit and delete icons
  addDisplayModifier = elem => {
    elem.addEventListener('click', (e) => {
      e.target.classList.add('hidden');
      const parent = e.target.parentElement;
      // display edit & delete buttons
      parent.querySelector('.fa-pen-to-square').classList.remove('hidden');
      parent.querySelector('.fa-trash').classList.remove('hidden');
      return;
    });
  };

  addCompleteListener = elem => {
    elem.addEventListener('click', (e) => {
      const todo_task = e.target.parentElement;
      const inputFieldEl = todo_task.querySelector('input[name="my-task"]');
      if(e.target.checked) {
        inputFieldEl.classList.remove('task-color');
        inputFieldEl.classList.add('completed');
      }else{
        inputFieldEl.classList.add('task-color');
        inputFieldEl.classList.remove('completed');
      };
    });
  };

  removeAllChecked = (toDosList) => {
    tasksArray = tasksArray.filter(task => task.completed === false);
    this.updateAllIndex();
    store.updateLocalStorage(tasksArray);
    //clear all elements in the todo list
    toDosList.innerHTML = '';
    //repopulate the todo list
    tasksArray.forEach(task => this.addTaskToToDosList(task));
    location.reload();
    return;
  }

  toggleVisibility =(hideThisEl, showThisEl) => {
    hideThisEl.classList.add('hidden');
    showThisEl.classList.remove('hidden');
    return;
  }

  updatetasksArray = task => {
    tasksArray.push(task);
    store.updateLocalStorage(tasksArray);
    return;
  }

  checkStorage = () => {
    const tasksArray = store.checkLocalStorage();
    return tasksArray;
  }

  saveTaskEdit(editedTask, taskIndex) {
    const index = +taskIndex
    // update the task description
    tasksArray[index-1].description = editedTask;
    store.updateLocalStorage(tasksArray);
    return;
  }

  deleteTask = (index) => {
    const elementIndex = +index - 1;
    tasksArray.splice(elementIndex, 1);
    this.updateIndex(elementIndex);
    return;
  }

  // reduce the index of all elements after the element that was removed
  updateIndex = startIndex => {
    for(let i=startIndex; i < tasksArray.length; i=i+1){
      tasksArray[i].index = tasksArray[i].index -1;
    }
    store.updateLocalStorage(tasksArray);
    return;
  }

  updateAllIndex = () => {
    let assignedIndex = 0;
    tasksArray.forEach(task => {
      assignedIndex = assignedIndex + 1;
      task.index = assignedIndex;
    })
    return;
  }

  getTasksArrayLength = () => {
    return tasksArray.length;
  }

  updateCompleted = (elementIndex, state) => {
    tasksArray[elementIndex].completed = state;
    store.updateLocalStorage(tasksArray);
    return;
  }
}
