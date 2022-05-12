export default class Storage {
  checkStorage = () => {
    const todoList = localStorage.getItem('todoList');
    return todoList ? JSON.parse(todoList) : [];
  }

  // Add a list to localstorage
  updateStorage = (list) => {
    localStorage.setItem('todoList', JSON.stringify(list));
  }
}
