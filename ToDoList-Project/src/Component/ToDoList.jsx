import ToDoItem from "./ToDoItems"

function ToDoList({ todos }) {
    return (
        <div className="todo-list">
            {todos.map((todo) => (
                <ToDoItem key={todo.id} todo={todo} />
            ))}
        </div>
    )
}

export default ToDoList