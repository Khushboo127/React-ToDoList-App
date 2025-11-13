function ToDoItem({ todo, onToggleComplete }) {
    return (
        <div className="todo-item">
            {/*  Added checkbox for toggling complete status */}
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggleComplete(todo.id)}
                className="checkbox"
            />
            {/*  Add strikethrough style for completed tasks */}
            <span
                className={todo.completed ? "completed" : ""}
            >
                {todo.text}
            </span>

            {/*  Added Delete button */}
            <button
                onClick={() => onDelete(todo.id)}
                className="delete-btn"
            >
                Delete
            </button>
        </div>
    )
}

export default ToDoItem