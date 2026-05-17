// All priority values
export type Priority = "Low" | "High";

// Todo interface
export interface TodoItem {
  id: number;
  task: string;
  completed: boolean;
  dueDate: Date;
  priority: Priority;
}

// TodoList class
export class TodoList {

    // store tasks which can only be accessed within the class
    private todos: TodoItem[] = [];

  // Auto-increment ID
    private nextId: number = 1;

  // Add todo item
    addTodo(
        task: string,
        dueDate: Date,
        priority: Priority
    ): void {

    // Validate task input
    if (!task.trim()) {
      throw new Error("Task cannot be empty");
    }

    // Create todo object
    const newTodo: TodoItem = {
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
  listTodos(): TodoItem[] {
    return this.todos;
  }
  
  // Mark todo as completed
  completeTodo(id: number): void {
    const todo = this.todos.find( (todo) => todo.id === id);
    
    if (!todo) {
      throw new Error("Todo not found");
    }
    todo.completed = true;
  }

  // Remove todo from the list
  removeTodo(id: number): void {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  // Update todo task description
  updateTodo(
    id: number,
    newTask: string
  ): void {
    
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
  searchTodos(keyword: string): TodoItem[] {
    
    return this.todos.filter((todo) => todo.task.toLowerCase().includes(keyword.toLowerCase()));
  }

  // Filter by completed status
  filterTodos(completed: boolean): TodoItem[] {
    
    return this.todos.filter((todo) => todo.completed === completed);
  }

  // Clear completed todos
  clearCompleted(): void {
    
    this.todos = this.todos.filter((todo) => !todo.completed);
  }
}