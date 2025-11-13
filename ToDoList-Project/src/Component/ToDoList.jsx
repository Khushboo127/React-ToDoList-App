import ToDoItem from "./ToDoItems"

function ToDoList({ todos, onToggleComplete }) {
    return (
        <div className="todo-list">
            {todos.map((todo) => (
                //  Passing onToggleComplete to ToDoItem
                <ToDoItem
                    key={todo.id}
                    todo={todo}
                    onToggleComplete={onToggleComplete}
                />
            ))}
        </div>
    )
}

export default ToDoList