const todoList = [{
  name: 'Learn React',
  dueDate: '2025-07-10'
}, {
  name: 'Learn Node.js',
  dueDate: '2025-09-10'
}];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const { name, dueDate } = todoObject;
    const html = `
      <div style="color: white;">${name}</div>
      <div style="color: white;">${dueDate}</div>
      <button onclick="
        todoList.splice(${i}, 1);
        renderTodoList();
      " class="delete-todo-button">Delete</button> 
    `;
    todoListHTML += html;
  }

  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value.trim();
  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;
  if (!name || !dueDate) {
    alert('Please enter Both Name and Date');
    return;
  }
  todoList.push({
    name,
    dueDate
  });
  inputElement.value = '';
  renderTodoList();
}