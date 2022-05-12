export default class AppInterface {

  static length = 3;

  static populateToDoList = (tasks) => {
    // imporvements needed = get list from locat storage

    // sort the array of tasks
    tasks.sort((a, b) => { 
      return a.index - b.index
    });
    const list = document.querySelector('.todo-list');
    for(let i=0; i<tasks.length; i++){
      const listItem = document.createElement('li');
      // create a checkbox
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      listItem.textContent = tasks[i].description;

      list.appendChild(checkbox);
      list.appendChild(listItem);
    }
  }

  // Add a todo task to the interface
  static addTaskToList = (task) => {
    const list = document.querySelector('.todo-list');
    const listItem = document.createElement('li');
    listItem.textContent = task.description;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    
    list.appendChild(checkbox);
    list.appendChild(listItem);
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