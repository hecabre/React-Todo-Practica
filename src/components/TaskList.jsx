import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
function TaskList() {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    return (
      <h1 className="text-white text-4x1 font-bold text-center">
        No hay tareas aun
      </h1>
    );
  }
  return (
    <div className="lg:grid lg:grid-cols-4 lg:gap-2 sm:grid sm:grid-cols-1">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
