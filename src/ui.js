export default class AppInterface {

  static populateToDoList = (tasks) => {
    // imporvements needed = get list from locat storage
    const list = document.querySelector('.todo-list');
    for(let i=0; i<tasks.length; i++){
      const listItem = document.createElement('li');
      listItem.textContent = tasks[i].description;
      list.appendChild(listItem);
    }
  }


}