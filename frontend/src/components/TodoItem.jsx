function TodoItem({ todo }) {
  return (
    <div className="flex flex-col gap-4 rounded-xl border bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h3 className="font-semibold text-gray-800">{todo.title}</h3>

        <p className="mt-1 text-sm text-gray-500">{todo.description}</p>
      </div>
    </div>
  );
}

export default TodoItem;
