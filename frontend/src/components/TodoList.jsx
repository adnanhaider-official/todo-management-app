import TodoItem from "./TodoItem";

function TodoList({ todos, onDelete, onEdit }) {
  if (todos.length === 0) {
    return (
      <p className="py-8 text-center text-gray-500">
        No todos found. Add your first todo!
      </p>
    );
  }

  return (
    <div className="space-y-3">
      {todos.map((todo) => (
        <TodoItem
          key={todo._id}
          todo={todo}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}

export default TodoList;
