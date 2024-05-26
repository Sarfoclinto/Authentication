import React, { useContext } from "react";
import { TaskContext } from "../Context/TaskContext";
import Task from "../Components/Task";

function Tasklist({ setModal }) {
  const { tasks, setTask } = useContext(TaskContext);

  return (
    <>
      {tasks.length > 0 ? (
        <table className="w-full">
          <thead className="w-full">
            <tr className="w-full">
              <th>Task</th>
              <th>Date</th>
              <th className="flex justify-center items-center border-0 gap-10">
                Action
                <button
                  className=""
                  onClick={() => {
                    setModal((prev) => {
                      return { ...prev, active: true };
                    });
                  }}
                >
                  <img src={"src/assets/add.png"} alt="" className="w-[34px]" />
                </button>
              </th>
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
        <div className="w-full text-black text-3xl font-bold h-fit flex justify-between items-center">
          <div>No Task...</div>
          <button
            onClick={() => {
              setModal((prev) => {
                return { ...prev, active: true };
              });
            }}
          >
            <img src={"src/assets/add.png"} alt="" className="w-4/5" />
          </button>
        </div>
      )}
    </>
  );
}

export default Tasklist;
