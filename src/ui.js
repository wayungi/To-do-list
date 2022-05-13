export default class AppInterface {
  addTaskToToDosList = (task) => {
    const toDoTaskElement = this.toDoTask();
    const checkbox = this.createCheckBox();
    const inputElement = this.createTextInput(task.description);
    const optionsElement = this.createOptions();
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

  createCheckBox = () => {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    return checkbox;
  }

  createTextInput = inputValue => {
    const input = document.createElement('input');
    input.classList.add('text');
    input.value = inputValue;
    input.setAttribute('readonly', 'readonly');
    return input;
  }

  createOptions = () => {
    const edit = document.createElement('i');
    edit.classList.add('fa-solid','fa-pen-to-square');
    const save = document.createElement('i');
    save.classList.add('fa-solid', 'fa-floppy-disk');
    const trash = document.createElement('i');
    trash.classList.add('fa-solid', 'fa-trash');
    const ellipsis = document.createElement('i');
    ellipsis.classList.add('fa-solid', 'fa-ellipsis-vertical');
    const optionsEl = document.createElement('div');
    optionsEl.classList.add('options')
    optionsEl.appendChild(edit);
    optionsEl.appendChild(save);
    optionsEl.appendChild(trash);
    optionsEl.appendChild(ellipsis);
    return optionsEl;
  }





  static populateToDoList = (tasks) => {
    tasks.sort((a, b) => a.index - b.index);
    const outerDiv = document.querySelector('.todo-list');
    tasks.forEach((task) => {
      const taskContainer = this.createTaskContainer();

      const ellipsis = this.createEllipsisIcon();
      ellipsis.addEventListener('click', (e) => {
        ellipsis.classList.add('hide');
        console.log(e.target.parentElement);
        const deleteBtn = e.target.parentElement.querySelector('.delete-icon');
        deleteBtn.classList.remove('hide');
      });

      const trashCan = this.createTrashCanIcon();
      trashCan.addEventListener('click', (e) => {
        console.log(e.target.parentElement.parentElement);
        console.log('delete activity');
      });

      const par = this.createToDoTask(task.description);
      const checkbox = this.createCheckBox();
      const hiddenField =  this.createHiddenInputField(task.index)
      taskContainer.append(checkbox, par, ellipsis, trashCan, hiddenField);
      outerDiv.appendChild(taskContainer);
    });
  };

  static createEllipsisIcon = () => {
    const ellipsis = document.createElement('div');
    ellipsis.innerHTML = '<i class="fa-solid fa-ellipsis-vertical"></i>';
    ellipsis.classList.add('ellipsis');
    return ellipsis;
  };

  static createTrashCanIcon = () => {
    const div = document.createElement('div');
    div.innerHTML = '<i class="fa-solid fa-trash"></i>';
    div.classList.add('delete-icon', 'hide');
    return div;
  };

  static createToDoTask = (description) => {
    const par = document.createElement('p');
    par.textContent = description;
    par.classList.add('activity-desc');
    return par;
  }

  

  static createHiddenInputField = (index) => {
    const input = document.createElement('input');
    input.setAttribute('type', 'hidden');
    input.value = index;
    return input;
  }

  static createTaskContainer = () => {
    const taskContainer = document.createElement('div');
    taskContainer.classList.add('main-activity');
    return taskContainer
  }
  // Add a todo task to the interface
  static addTaskToList = (task) => {
    const outerDiv = document.querySelector('.todo-list');

    const activityDiv = document.createElement('div');
    // create ellipsis
    const ellipsis = document.createElement('div');
    ellipsis.innerHTML = '<i class="fa-solid fa-ellipsis-vertical"></i>';
    ellipsis.classList.add('ellipsis');
    // create delete icon
    const trashCan = document.createElement('div');
    trashCan.innerHTML = '<i class="fa-solid fa-trash"></i>';
    trashCan.classList.add('delete-icon', 'hide');
    // create the checkbox & appenf to li
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    // create activity description
    const par = document.createElement('p');
    par.textContent = task.description;
    par.classList.add('activity-desc');

    activityDiv.appendChild(checkbox);
    activityDiv.appendChild(par);
    activityDiv.appendChild(ellipsis);
    activityDiv.appendChild(trashCan);
    outerDiv.appendChild(activityDiv);

    this.attachListener(ellipsis,'click', this.func)

  }

}


