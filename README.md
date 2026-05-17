# Todo List Application

## Overview

This task is a simple Todo List application built with TypeScript, html and css. The application helps users manage tasks by allowing them to add, complete, edit, search and delete todos through a simple user interface.

---

# Task Requirements

The original task was to:

1. Create a `TodoItem` interface with:
   - `id`
   - `task`
   - `completed`

2. Implement a `TodoList` class with methods to:
   - Add todo items
   - Complete todo items
   - Remove todo items
   - List all todo items

3. Maintain an array of `TodoItem` objects.

4. Add a method to filter todos by completed status.

5. Implement a method to update a todo task description.

6. Add a method to clear completed todos.

7. Extend the `TodoItem` interface to include a `dueDate` property of type `Date`.

---

# Features I Added

Apart from the required features, I also added:

- Task priority levels (`Low`, `High`)
- Search functionality
- Edit functionality
- A simple user interface using html and css
- Dynamic rendering of tasks on the page
- Error handling for empty task inputs

---

# Features of the Application

## Add Todo
Users can add a task with:
- Task name
- Due date
- Priority level

---

## Complete Todo
Users can mark tasks as completed.

Completed tasks are displayed differently on the screen.

---

## Edit Todo
Users can edit an existing task.

---

## Delete Todo
Users can remove tasks from the list.

---

## Search Todo
Users can search for tasks using keywords.

The search is not case-sensitive.

---

## Filter Todos
Todos can be filtered based on whether they are completed or not.

---

## Clear Completed Todos
Users can remove all completed tasks at once.

---

# Technologies Used

- TypeScript
- HTML
- CSS
- DOM Manipulation

---

# Project Structure

```txt
TodoApp/
│
├── index.html
├── style.css
├── todo.ts
├── index.ts
├── todo.js
├── index.js
├── README.md
```

---

# How To Run The Project

## Step 1
Compile the TypeScript files:

```bash
tsc -w index.ts todo.ts --target ES6 --module ES6
```

This generates:
- `todo.js`
- `index.js`

---

## Step 2
Open `index.html` in your browser or use Live Server in VS Code.

---

# What I Learned

While building this project, I learned how to:

- Use TypeScript interfaces
- Work with classes and objects
- Use access modifiers like `private`
- Manipulate arrays using methods like:
  - `find()`
  - `filter()`
  - `includes()`
- Handle errors properly
- Manipulate the DOM using TypeScript
- Connect application logic to a user interface

I also learned how frontend applications update the UI dynamically whenever the data changes.

---
