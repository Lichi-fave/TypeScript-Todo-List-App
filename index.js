import { TodoList } from "./todo.js";
// Create TodoList instance
const todoList = new TodoList();
// Select HTML elements
const taskInput = document.getElementById("taskInput");
const dateInput = document.getElementById("dateInput");
const priorityInput = document.getElementById("priorityInput");
const addBtn = document.getElementById("addBtn");
const searchInput = document.getElementById("searchInput");
const todoContainer = document.getElementById("todoContainer");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");
// Render todos to screen
function renderTodos(todos = todoList.listTodos()) {
    // clear existing todos
    todoContainer.innerHTML = "";
    // Loop through todos and create HTML elements
    todos.forEach((todo) => {
        // Create todo div to hold todo details and buttons
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo-item");
        // Add completed class if todo is completed
        if (todo.completed) {
            todoDiv.classList.add("completed");
        }
        // add todo details and buttons to todo div
        todoDiv.innerHTML = `
    
    <h3>${todo.task}</h3>
    
    <p><strong>Priority:</strong>${todo.priority}</p>
    
    <p><strong>Due Date:</strong>${new Date(todo.dueDate).toLocaleDateString()}</p>
    
    <p><strong>Status:</strong>${todo.completed ? "Completed" : "Pending"}</p>
    
    <button class="complete-btn">Complete</button>
    
    <button class="edit-btn">Edit</button>

    <button class="delete-btn">Delete</button>
    
    `;
        // Complete button
        const completeBtn = todoDiv.querySelector(".complete-btn");
        completeBtn.addEventListener("click", () => { todoList.completeTodo(todo.id); renderTodos(); });
        // Delete button
        const deleteBtn = todoDiv.querySelector(".delete-btn");
        deleteBtn.addEventListener("click", () => { todoList.removeTodo(todo.id); renderTodos(); });
        // Edit button
        const editBtn = todoDiv.querySelector(".edit-btn");
        editBtn.addEventListener("click", () => {
            const newTask = prompt("Enter new task:");
            if (newTask) {
                todoList.updateTodo(todo.id, newTask);
                renderTodos();
            }
        });
        // Add todo to container
        todoContainer.appendChild(todoDiv);
    });
}
// Add todo event listener button
addBtn.addEventListener("click", () => {
    try {
        const task = taskInput.value;
        const dueDate = new Date(dateInput.value);
        const priority = priorityInput.value;
        // add todo to list
        todoList.addTodo(task, dueDate, priority);
        // Clear input fields
        taskInput.value = "";
        dateInput.value = "";
        // Re-render todos
        renderTodos();
    }
    catch (error) {
        alert(error instanceof Error ? error.message : "Something went wrong");
    }
});
// Search functionality
searchInput.addEventListener("input", () => {
    const keyword = searchInput.value;
    // If search input is empty, show all todos
    if (!keyword.trim()) {
        renderTodos();
        return;
    }
    // Search todos
    const results = todoList.searchTodos(keyword);
    renderTodos(results);
});
// Clear completed todos
clearCompletedBtn.addEventListener("click", () => {
    todoList.clearCompleted();
    renderTodos();
});
// Initial render
renderTodos();
