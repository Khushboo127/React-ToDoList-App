import ToDoItem from "./ToDoItems"

function ToDoList({ todos, onToggleComplete }) {
    return (
        <div className="todo-list">
            {todos.map((todo) => (
                <>
                //  Passing onToggleComplete to ToDoItem
                    <ToDoItem
                        key={todo.id}
                        todo={todo}
                        onToggleComplete={onToggleComplete}

                    />
                //  Passing onDelete to ToDoItem
                    <ToDoItem
                        key={todo.id}
                        todo={todo}
                        onToggleComplete={onToggleComplete}
                        onDelete={onDelete}
                    />
                </>

            ))}
        </div>
    )
}

export default ToDoList