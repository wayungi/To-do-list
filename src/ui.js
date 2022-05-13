export default class AppInterface {
  





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

  static createCheckBox = () => {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    return checkbox;
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


