export default class Storage {
  checkLocalStorage = () => {
    const tasksArray = localStorage.getItem('tasksArray');
    return tasksArray ? JSON.parse(tasksArray) : []
  }
}
