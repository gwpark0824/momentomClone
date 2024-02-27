const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");
let toDos = [];
const savedTodos = localStorage.getItem("todos");

function savetoDos () {
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function paintTodo (newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    span.innerText = newTodo.text;
    button.innerText = "❌"
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function deleteTodo (event) {
    const targetli = event.target.parentElement;
    targetli.remove();
    toDos = toDos.filter((item) => item.id !== parseInt(targetli.id));
    savetoDos();
}

function onTodoSubmit (event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObject = {
        text: newTodo,
        id: Date.now()
    };
    toDos.push(newTodoObject);
    paintTodo(newTodoObject);
    savetoDos();
}

todoForm.addEventListener("submit", onTodoSubmit);
localStorage.getItem("todos")

if(savedTodos !== null){
    const parsedTodos = JSON.parse(savedTodos);
    toDos = parsedTodos
    parsedTodos.forEach(paintTodo);
}