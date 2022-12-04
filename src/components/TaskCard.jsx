import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);
  return (
    <section className="sm:my-2">
      <div className="bg-gray-800 text-white p-4 rounded-md sm:mb-3">
        <h1 className="text-xl font-bold capitalize text-center sm:text-center">
          {task.title}
        </h1>
        <p className="text-grey-500 text-sm sm:text-center">
          {task.description}
        </p>
        <button
          onClick={() => deleteTask(task.id)}
          className="bg-indigo-600 px-2 py-1 rounded-md mt-4 transition ease-in-out delay-50 hover:bg-indigo-500 sm:mx-auto sm:w-full"
        >
          Eliminar Tarea
        </button>
      </div>
    </section>
  );
}
export default TaskCard;
