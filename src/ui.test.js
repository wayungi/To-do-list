import AppInterface from "./ui.js";

document.body.innerHTML = `<div class="todos">`+`</div>`;


//add task to the todo list
describe('Add tasks to the todo list', () => {
  test('Todo list should have 1 item added', () => {

    document.body.innerHTML = `<div class="todos">`+`</div>`;
    const todo = document.querySelector('.todos');

    const task1 = { description: 'write first test', 
                    completed: false, 
                    index: 1
                   };
    const task2 = { description: 'Debug first test', 
                    completed: false, 
                    index: 2
    };
    const task3 = { description: 'Finish up the test', 
                    completed: true, 
                    index: 3
   };

   AppInterface.addTaskToToDosList(task1);
   AppInterface.addTaskToToDosList(task1);
   AppInterface.addTaskToToDosList(task1);

   const list = document.querySelectorAll('.todo-task');
   expect(list).toHaveLength(3);
  });
});


//remove task from todo list