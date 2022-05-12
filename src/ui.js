export default class AppInterface {

  static length = 0;

  static populateToDoList = (tasks) => {
    // imporvements needed = get list from locat storage

    // sort the array of tasks
    tasks.sort((a, b) => { 
      return a.index - b.index
    });

    const outerDiv = document.querySelector('.todo-list');
    for(let i=0; i<tasks.length; i++){

      const activityDiv = document.createElement('div');

      const par = document.createElement('p');
      par.textContent = tasks[i].description;

      // create a checkbox
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';

      activityDiv.appendChild(checkbox);
      activityDiv.appendChild(par);
      outerDiv.appendChild(activityDiv);
    }
  }

  // Add a todo task to the interface
  static addTaskToList = (task) => {
    const outerDiv = document.querySelector('.todo-list');
    const activityDiv = document.createElement('div');
    // create the checkbox & appenf to li
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    const par = document.createElement('p');
    par.textContent = task.description;
    activityDiv.appendChild(checkbox);
    activityDiv.appendChild(par);
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