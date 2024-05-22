import React, { useContext } from "react";
import { TaskContext } from "../Context/TaskContext";
import Task from "../Components/Task";

function Tasklist() {
  const { tasks, setTask } = useContext(TaskContext);

  return (
    <>
      {tasks.length > 0 ? (
        <table className="w-full">
          <thead className="w-full">
            <tr className="w-full">
              <th>Task</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="w-full">
            {tasks.map((task) => {
              return (
                <Task
                  task={task}
                  key={task.id}
                  tasks={tasks}
                  setTask={setTask}
                />
              );
            })}
          </tbody>
        </table>
      ) : (
        <div className="w-full text-black text-3xl font-bold">No Task...</div>
      )}
    </>
  );
}

export default Tasklist;
