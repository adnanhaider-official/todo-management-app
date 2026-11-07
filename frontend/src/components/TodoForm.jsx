import { useState } from "react";
import api from "../lib/axios";

function TodoForm({ onTodoSaved }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Add or update todo
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !description.trim()) {
      setError("Please fill all fields");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const response = await api.post("/todos", {
        title,
        description,
      });

      onTodoSaved(response.data.data);

      setTitle("");
      setDescription("");
    } catch (error) {
      setError(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-xl border bg-white p-5 shadow-sm">
      <h2 className="mb-4 text-xl font-semibold">Add New Todo</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Enter todo title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full rounded-lg border p-3 outline-none focus:border-blue-500"
        />

        <textarea
          placeholder="Enter todo description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="3"
          className="w-full rounded-lg border p-3 outline-none focus:border-blue-500"
        />

        {error && <p className="text-sm text-red-600">{error}</p>}

        <div className="flex gap-2">
          <button
            type="submit"
            disabled={loading}
            className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? "Please wait..." : "Add Todo"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default TodoForm;
