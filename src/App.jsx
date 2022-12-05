import React from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  return (
    <body className="bg-zinc-900">
      <main className="bg-zinc-900 h-screen">
        <div className="container mx-auto p-10">
          <TaskForm />
          <TaskList />
        </div>
      </main>
    </body>
  );
}

export default App;
