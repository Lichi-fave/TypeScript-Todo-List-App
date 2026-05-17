// TodoList class
export class TodoList {
    constructor() {
        // store tasks which can only be accessed within the class
        this.todos = [];
        // Auto-increment ID
        this.nextId = 1;
    }
    // Add todo item
    addTodo(task, dueDate, priority) {
        // Validate task input
        if (!task.trim()) {
            throw new Error("Task cannot be empty");
        }
        // Create todo object
        const newTodo = {
            id: this.nextId++,
            task,
            completed: false,
            dueDate,
            priority
        };
        // add new todo to the list
        this.todos.push(newTodo);
    }
    // Get all todos
    listTodos() {
        return this.todos;
    }
    // Mark todo as completed
    completeTodo(id) {
        const todo = this.todos.find((todo) => todo.id === id);
        if (!todo) {
            throw new Error("Todo not found");
        }
        todo.completed = true;
    }
    // Remove todo from the list
    removeTodo(id) {
        this.todos = this.todos.filter((todo) => todo.id !== id);
    }
    // Update todo task description
    updateTodo(id, newTask) {
        const todo = this.todos.find((todo) => todo.id === id);
        if (!todo) {
            throw new Error("Todo not found");
        }
        if (!newTask.trim()) {
            throw new Error("Task cannot be empty");
        }
        todo.task = newTask;
    }
    // Search todos
    searchTodos(keyword) {
        return this.todos.filter((todo) => todo.task.toLowerCase().includes(keyword.toLowerCase()));
    }
    // Filter by completed status
    filterTodos(completed) {
        return this.todos.filter((todo) => todo.completed === completed);
    }
    // Clear completed todos
    clearCompleted() {
        this.todos = this.todos.filter((todo) => !todo.completed);
    }
}
