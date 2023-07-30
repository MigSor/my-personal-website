const todoList = document.querySelector("#todo-list");
const todoInput = document.querySelector("#todo-input");
const todoItem = document.querySelector("#todo-item");
function completed(e) {
  //   console.log(e.target);
  e.target.classList.toggle("completed");
  e.target.parentElement.classList.toggle("completed");
  saveTodoList();
}

function addItem(event) {
  event.preventDefault();
  let itemToAdd = todoInput.value;
  todoList.insertAdjacentHTML(
    "afterbegin",
    `
    <li id="todo-item">
    <span class="todo-name" onclick="completed(event)">${itemToAdd}</span>
    <button onclick="removeTodo(event)">X</button>
  </li>
  `
  );
  saveTodoList();
  todoInput.value = "";
  todoInput.focus();
}

function removeTodo(e) {
  e.target.parentElement.remove();
  saveTodoList();
}

function saveTodoList() {
  localStorage.setItem("data", todoList.innerHTML);
}

function showTodoList() {
  todoList.innerHTML = localStorage.getItem("data");
}
showTodoList();
