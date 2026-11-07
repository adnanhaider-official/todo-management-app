function TodoItem({ todo, onDelete, onEdit, onToggle }) {
  return (
    <div className="flex flex-col gap-4 rounded-xl border bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h3 className="font-semibold text-gray-800">{todo.title}</h3>

        <p className="mt-1 text-sm text-gray-500">{todo.description}</p>

        <p className="mt-2 text-xs font-medium">
          {todo.completed ? (
            <span className="text-green-700">Completed</span>
          ) : (
            <span className="text-orange-700">Pending</span>
          )}
        </p>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => onToggle(todo)}
          className={`rounded-lg px-4 py-2 text-sm ${
            todo.completed
              ? "bg-orange-100 text-orange-700"
              : "bg-green-100 text-green-700"
          }`}
        >
          {todo.completed ? "Undo" : "Complete"}
        </button>
        <button
          onClick={() => onEdit(todo)}
          className="rounded-lg bg-blue-100 px-4 py-2 text-sm text-blue-700"
        >
          Edit
        </button>

        <button
          onClick={() => onDelete(todo._id)}
          className="rounded-lg bg-red-100 px-4 py-2 text-sm text-red-700"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
