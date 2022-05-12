export default class AppInterface {
  // <i class="fa-solid fa-ellipsis-vertical"></i>
  // <i class="fa-solid fa-trash"></i>
  // <i class="fa-solid fa-turn-down-left"></i>

  static length = 0;

  static populateToDoList = (tasks) => {
    // imporvements needed = get list from locat storage

    // sort the array of tasks
    tasks.sort((a, b) => a.index - b.index);

    const outerDiv = document.querySelector('.todo-list');

    tasks.forEach((task) => {
      const activityDiv = document.createElement('div');
      // create ellipsis
      const ellipsis = document.createElement('div');
      ellipsis.innerHTML = '<i class="fa-solid fa-ellipsis-vertical"></i>';
      ellipsis.classList.add('ellipsis');
      // create paragraph
      const par = document.createElement('p');
      par.textContent = task.description;
      par.classList.add('activity-desc');
      // create a checkbox
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';

      activityDiv.appendChild(checkbox);
      activityDiv.appendChild(par);
      activityDiv.appendChild(ellipsis);
      outerDiv.appendChild(activityDiv);
    });

    // for (let i = 0; i < tasks.length; i++) {
    // const activityDiv = document.createElement('div');
    // // create ellipsis
    // const ellipsis = document.createElement('div');
    // ellipsis.innerHTML = '<i class="fa-solid fa-ellipsis-vertical"></i>';
    // ellipsis.classList.add('ellipsis');
    // // create paragraph
    // const par = document.createElement('p');
    // par.textContent = tasks[i].description;
    // par.classList.add('activity-desc');
    // // create a checkbox
    // const checkbox = document.createElement('input');
    // checkbox.type = 'checkbox';

    // activityDiv.appendChild(checkbox);
    // activityDiv.appendChild(par);
    // activityDiv.appendChild(ellipsis);
    // outerDiv.appendChild(activityDiv);
    // }
  }

  // Add a todo task to the interface
  static addTaskToList = (task) => {
    const outerDiv = document.querySelector('.todo-list');

    const activityDiv = document.createElement('div');
    // create ellipsis
    const ellipsis = document.createElement('div');
    ellipsis.innerHTML = '<i class="fa-solid fa-ellipsis-vertical"></i>';
    ellipsis.classList.add('ellipsis');
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
    outerDiv.appendChild(activityDiv);
  }

  static incrementIndex = () => {
    this.length += 1;
    return this.length;
  }

  static decrementIndex = () => {
    this.length -= 1;
    return this.length;
  }
}