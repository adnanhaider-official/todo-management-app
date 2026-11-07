import TodoForm from "../components/TodoForm";

function Home() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-8 text-center text-3xl font-bold text-gray-800">
          My Todo App
        </h1>

        <TodoForm />
      </div>
    </div>
  );
}

export default Home;
