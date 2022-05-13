export default class AppInterface {
  static populateToDoList = (tasks) => {
    // sort the array of tasks
    tasks.sort((a, b) => a.index - b.index);
    const outerDiv = document.querySelector('.todo-list');
    tasks.forEach((task) => {

      const activityDiv = document.createElement('div');
      activityDiv.classList.add('main-activity');
      // create ellipsis
      const ellipsis = document.createElement('div');
      ellipsis.innerHTML = '<i class="fa-solid fa-ellipsis-vertical"></i>';
      ellipsis.classList.add('ellipsis');
      // create delete icon
      const trashCan = document.createElement('div');
      trashCan.innerHTML = '<i class="fa-solid fa-trash"></i>';
      trashCan.classList.add('delete-icon', 'hide');
      // create paragraph
      const par = document.createElement('p');
      par.textContent = task.description;
      par.classList.add('activity-desc');
      // create a checkbox
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      //create hidden field for element tracking purpose
      const hiddenField =  document.createElement('input');
      hiddenField.setAttribute('type', 'hidden');
      hiddenField.value = task.index;

      activityDiv.appendChild(checkbox);
      activityDiv.appendChild(par);
      activityDiv.appendChild(ellipsis);
      activityDiv.appendChild(trashCan);
      activityDiv.appendChild(hiddenField);
      outerDiv.appendChild(activityDiv);
      //attach eventlisteners to the ellipsis and trashCan
      this.attachListener(ellipsis,'click', this.enableDeleteBtn);
      this.attachListener(trashCan, 'click',this.deleteActivity )
    });
  }

  //Attach eventListener on creation of element
  static attachListener = (element, event, func) => {
    element.addEventListener(event, (e) => func(e));
  }

  // show delete icon and hide vertical elipsis
  static enableDeleteBtn = (e) => {
    // hide the clicked ellipsis
    e.target.classList.add('hide');
    //get the delete icon and make it display
    const parent = e.target.parentElement;
    const deleteBtn = parent.querySelector('.delete-icon');
    deleteBtn.classList.remove('hide');
  }

  static deleteActivity = (e) => {
    console.log(e.target.parentElement);
    console.log('delete activity');
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


