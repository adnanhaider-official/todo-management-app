function TodoItem({ todo, onDelete, onEdit }) {
  return (
    <div className="flex flex-col gap-4 rounded-xl border bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h3 className="font-semibold text-gray-800">{todo.title}</h3>

        <p className="mt-1 text-sm text-gray-500">{todo.description}</p>
      </div>
      <div className="flex gap-2">
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
