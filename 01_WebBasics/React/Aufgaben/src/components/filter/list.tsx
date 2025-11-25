import ToDo from "./task.tsx";
import { useEffect, useState } from "react";

interface Task {
  tasknoun: string;
  taskverb: string;
  id: string;
  checked: boolean;
}
type Props = {
  search: string;
};

function List({ search }: Props) {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filteredTasks, setfilteredTasks] = useState<Task[]>([]);

  useEffect(() => {
    fetch("https://6909dc1b1a446bb9cc20522c.mockapi.io/todolist")
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
        tasks.map((task) => {
          task.checked = false;
        });
        setfilteredTasks(data);
      });
  }, []);
  useEffect(() => {
    setfilteredTasks(
      tasks.filter((task: Task) => task.tasknoun.includes(search)),
    );
  }, [search, tasks]);

  return (
    <div className="max-w-xl mx-auto mt-8 p-6 bg-white shadow-violet-300 shadow-2xl rounded-lg">
      <h1 className="text-3xl font-extrabold mb-4 text-gray-900 text-center">
        ToDo - Liste
      </h1>

      <div className="grid grid-cols-1 gap-2">
        {filteredTasks.map((task) => (
          <ToDo
            key={task.id}
            noun={task.tasknoun}
            verb={task.taskverb}
            checked={task.checked}
            toggle={() => {
              task.checked = !task.checked;
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default List;
