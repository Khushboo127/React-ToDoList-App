import { useState } from "react";
import Header from "./Component/Header";
import ToDoList from "./Component/ToDoList";

function App() {
  const [todos, setTodos] = useState([])

  return (
    <>
      <Header />
      <ToDoList todos={todos} />
    </>

  );
}

export default App;