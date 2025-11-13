import ToDoItem from "./ToDoItems"

function ToDoList({
    todos,
    onToggleComplete,
    onDelete,
    onEdit,
    onSaveEdit,
    onCancelEdit,
    editingId,
    editingText,
    setEditingText
}) {
    return (
        <div className="todo-list">
            {todos.map((todo) => (
                <>
                    <ToDoItem
                        key={todo.id}
                        todo={todo}
                        onToggleComplete={onToggleComplete}
                        onDelete={onDelete}
                        onEdit={onEdit}
                        onSaveEdit={onSaveEdit}
                        onCancelEdit={onCancelEdit}
                        isEditing={editingId === todo.id}
                        editingText={editingText}
                        setEditingText={setEditingText}
                    />
                </>

            ))}
        </div>
    )
}

export default ToDoList