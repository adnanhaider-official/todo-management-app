import { useState, useEffect } from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import api from "../lib/axios";

function Home() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch All Todos
  const fetchTodos = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await api.get("/todos");

      setTodos(response.data.data);
    } catch (error) {
      setError(error.response?.data?.message || "Failed to fetch todos");
    } finally {
      setLoading(false);
    }
  };

  // Load todos when page opens
  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-8 text-center text-3xl font-bold text-gray-800">
          My Todo App
        </h1>

        <TodoForm />

        <h2 className="mb-4 mt-8 text-xl font-semibold">My Todos</h2>

        {error && <p className="mb-4 text-sm text-red-600">{error}</p>}

        {loading ? (
          <p className="text-center text-gray-500">Loading todos...</p>
        ) : (
          <TodoList todos={todos} />
        )}
      </div>
    </div>
  );
}

export default Home;
