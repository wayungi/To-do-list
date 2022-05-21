const checkLocalStorage = () => {
  const tasksArray = localStorage.getItem('tasksArray');
  return tasksArray ? JSON.parse(tasksArray) : [];
};

const updateLocalStorage = (tasksArray) => {
  localStorage.setItem('tasksArray', JSON.stringify(tasksArray));
};

module.exports = { checkLocalStorage, updateLocalStorage }