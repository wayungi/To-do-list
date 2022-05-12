export default class Storage {

  //get array from storage
  //add array to storage
  //check if storage is empty

  checkStorage = () => {
    const todoList = localStorage.getItem('todoList');
    return todoList ? JSON.parse(todoList) : [];
  }
}