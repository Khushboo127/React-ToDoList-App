function ToDoItem({ todo, onToggleComplete, onDelete,
    onEdit,
    onSaveEdit,
    onCancelEdit,
    isEditing,
    editingText,
    setEditingText
}) {
    return (
        <div className="todo-item">
            {/*  Show input field if editing */}
            {isEditing ? (
                <>
                    <input
                        type="text"
                        value={editingText}
                        onChange={(e) => setEditingText(e.target.value)}
                        className="edit-input"
                    />
                    <button
                        onClick={() => onSaveEdit(todo.id)}
                        className="save-btn"
                    >
                        Save
                    </button>
                    <button
                        onClick={onCancelEdit}
                        className="cancel-btn"
                    >
                        Cancel
                    </button>
                </>
            ) : (
                <>
                    {/*  Show normal view if not editing */}
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => onToggleComplete(todo.id)}
                        className="checkbox"
                    />
                    <span className={todo.completed ? "completed" : ""}>
                        {todo.text}
                    </span>
                    <button
                        onClick={() => onEdit(todo.id, todo.text)}
                        className="edit-btn"
                    >
                        Edit
                    </button>
                    <button
                        onClick={() => onDelete(todo.id)}
                        className="delete-btn"
                    >
                        Delete
                    </button>
                </>
            )}
        </div>
    )
}
export default ToDoItem