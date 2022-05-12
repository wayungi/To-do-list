export default class Storage {

  //get array from storage
  //add array to storage
  //check if storage is empty

  checkStorage = () => {
    const todoList = localStorage.getItem('todoList');
    return todoList ? JSON.parse(todoList) : [];
  }

  // Add a list to localstorage
  updateStorage = (list) => {
    localStorage.setItem('todoList', JSON.stringify(list));
  }
}