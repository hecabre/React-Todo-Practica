import { useState } from "react";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <section className="max-w-md mx-auto ">
      <form onSubmit={handleSubmit} className="bg-stone-800 p-10 mb-4 rounded-md">
        <h1 className="text-2xl font-bold text-white mb-3 text-center">Crea tu tarea</h1>
        <input
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="bg-zinc-600 p-3 w-full mb-4 rounded-md"
          autoFocus
        />
        <textarea
          placeholder="Escribe la descripcion de la tarea"
          onChange={(e) => setDescription(e.target.value)}
          className="bg-zinc-600 p-3 w-full mb-4 rounded-md"
          value={description}
        ></textarea>
        <button className="bg-rose-600 px-3 py-1 text-white rounded-lg border-none sm:w-full">Guardar</button>
      </form>
    </section>
  );
}

export default TaskForm;
