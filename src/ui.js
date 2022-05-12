export default class AppInterface {

  static populateToDoList = (tasks) => {
    const list = document.querySelector('.todo');
    for(let i=0; i<tasks.length; i++){
      const listItem = document.createElement('li');
      listItem.textContent = tasks[i].description;
      list.appendChild(listItem);
    }
  }

  
}