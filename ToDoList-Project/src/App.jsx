import { useState } from "react";
import Header from "./Component/Header";
import ToDoList from "./Component/ToDoList";
import "./App.css";
function App() {
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState("")

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

  //  Added handleKeyPress for Enter key
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTodo()
    }
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

      {/*  Passing toggleComplete function as props */}
      <ToDoList
        todos={todos}
        onToggleComplete={toggleComplete}
      />
    </div>
  )
}

export default App