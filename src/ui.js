export default class AppInterface {

  static length = 3;

  static populateToDoList = (tasks) => {
    // imporvements needed = get list from locat storage
    
    // sort the array of tasks
    tasks.sort((a, b) => { 
      return a.index - b.index
    });
    console.log(tasks);
    const list = document.querySelector('.todo-list');
    for(let i=0; i<tasks.length; i++){
      const listItem = document.createElement('li');
      listItem.textContent = tasks[i].description;
      list.appendChild(listItem);
    }
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