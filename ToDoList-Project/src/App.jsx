import { useState } from "react";
import Header from "./Component/Header";
import ToDoList from "./Component/ToDoList";
import "./App.css";
function App() {
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState("")

  //  Added editing state management
  const [editingId, setEditingId] = useState(null)
  const [editingText, setEditingText] = useState("")

  //  Added addTodo function with validation
  const addTodo = () => {
    if (inputValue.trim() === "") {
      alert("Please enter a task!")
      return
    }

    const newTodo = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    }

    setTodos([...todos, newTodo])
    setInputValue("")
  }

  //  Added toggleComplete function
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  //  Added handleKeyPress for Enter key
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTodo()
    }
  }
  //  Added startEdit function
  const startEdit = (id, text) => {
    setEditingId(id)
    setEditingText(text)
  }

  //  Added saveEdit function
  const saveEdit = (id) => {
    if (editingText.trim() === "") {
      alert("Task cannot be empty!")
      return
    }

    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: editingText } : todo
      )
    )
    setEditingId(null)
    setEditingText("")
  }

  //  Added cancelEdit function
  const cancelEdit = () => {
    setEditingId(null)
    setEditingText("")
  }
  return (
    <div className="app-container">
      <Header />

      <div className="input-section">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Add a new task..."
          className="input-field"
        />
        {/*  Added Add Task button */}
        <button onClick={addTodo} className="add-btn">
          Add Task
        </button>
      </div>
      <ToDoList
        todos={todos}
        onToggleComplete={toggleComplete}
        onDelete={deleteTodo}
        onEdit={startEdit}
        onSaveEdit={saveEdit}
        onCancelEdit={cancelEdit}
        editingId={editingId}
        editingText={editingText}
        setEditingText={setEditingText}
      />
    </div>
  )
}

export default App