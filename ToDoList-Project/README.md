#GitHub Profile: - https://github.com/Khushboo127

# React To-Do List Application

A modern, fully-functional to-do list application built with React and Vite. This application allows users to create, manage, and organize their tasks efficiently.

## Features

✅ **Add Tasks** - Create new to-do items quickly with validation
✅ **Complete Tasks** - Mark tasks as completed with a checkbox
✅ **Edit Tasks** - Modify existing task text inline
✅ **Delete Tasks** - Remove tasks you no longer need
✅ **Task Statistics** - View total and completed task counts
✅ **Enter Key Support** - Press Enter to quickly add tasks
✅ **Responsive Design** - Works seamlessly on desktop and mobile
✅ **Professional Styling** - Modern UI with smooth animations and transitions

## Project Structure

\`\`\`
react-todo-app/
├── src/
│   ├── components/
│   │   ├── Header.jsx         # App title header
│   │   ├── ToDoList.jsx       # List container with map rendering
│   │   └── ToDoItem.jsx       # Individual todo item component
│   ├── App.jsx                # Main component with state management
│   ├── App.css                # Component styles
│   ├── index.css              # Global styles
│   └── main.jsx               # React entry point
├── index.html                 # HTML entry point
├── package.json               # Dependencies
├── vite.config.js             # Vite configuration
├── .gitignore                 # Git ignore file
└── README.md                  # This file
\`\`\`

## Components

### App Component
- **Responsibility:** Main component that manages all state
- **State Variables:**
  - `todos`: Array of all tasks
  - `inputValue`: Current input field value
  - `editingId`: ID of todo being edited
  - `editingText`: Text being edited
- **Functions:** addTodo, toggleComplete, deleteTodo, startEdit, saveEdit, cancelEdit

### Header Component
- **Responsibility:** Display application title
- **Props:** None
- **Returns:** Styled header with h1 title

### ToDoList Component
- **Responsibility:** Render list of todos using map()
- **Props:** todos array, event handler functions
- **Returns:** Mapped array of ToDoItem components with unique keys

### ToDoItem Component
- **Responsibility:** Display individual todo item
- **Props:** todo object, event handlers
- **Returns:** Todo item with checkbox, text, and action buttons

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Steps

1. **Clone the repository** (after creating on GitHub)
\`\`\`bash
git clone https://github.com/yourusername/react-todo-app.git
cd react-todo-app
\`\`\`

2. **Install dependencies**
\`\`\`bash
npm install
\`\`\`

3. **Start the development server**
\`\`\`bash
npm run dev
\`\`\`

4. **Open in browser**
Navigate to `http://localhost:5173` (or the URL shown in terminal)

## Usage

### Adding a Task
1. Type your task in the input field
2. Click "Add Task" button or press Enter
3. Task appears in the list

### Completing a Task
1. Click the checkbox next to any task
2. Completed tasks show a strikethrough
3. Click again to mark as incomplete

### Editing a Task
1. Click the "Edit" button on any task
2. Modify the text in the input field
3. Click "Save" to confirm or "Cancel" to discard changes

### Deleting a Task
1. Click the "Delete" button on any task
2. Task is immediately removed from the list

### Viewing Statistics
- View total number of tasks at the bottom
- View number of completed tasks at the bottom

## Event Handlers

| Function | Trigger | Action |
|----------|---------|--------|
| addTodo | Click button or press Enter | Adds new task to list |
| toggleComplete | Click checkbox | Toggles completed status |
| deleteTodo | Click delete button | Removes task from list |
| startEdit | Click edit button | Enters edit mode |
| saveEdit | Click save button | Saves edited text |
| cancelEdit | Click cancel button | Exits edit mode without saving |

## Technologies Used

- **React** - UI library for building components
- **Vite** - Lightning-fast build tool and dev server
- **CSS3** - Styling and animations
- **JavaScript ES6+** - Modern JavaScript features
