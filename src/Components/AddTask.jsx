import React, { useContext } from "react";
import { TaskContext } from "../Context/TaskContext";
import { v4 as uuid } from "uuid";

function AddTask({ setModal }) {
  const { newTask, setTask, setNewTask } = useContext(TaskContext);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewTask((prev) => {
      return {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  const handleAdd = async () => {
    const id = uuid();
    await setTask((prev) => {
      return [
        ...prev,
        {
          task: newTask.task,
          date: newTask.date,
          id: id,
          checked: newTask.complete,
        },
      ];
    });
    await setModal((prev) => {
      return { ...prev, active: false };
    });

    setNewTask(() => {
      return {
        task: "",
        date: "",
      };
    });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="w-full h-1/2 flex flex-col items-center"
    >
      <div className="py-4 flex flex-col  ">
        <label htmlFor="task" className="text-xl text-black font-semibold mb-1">
          Task:
        </label>
        <input
          type="text"
          id="task"
          name="task"
          value={newTask.task}
          onChange={handleChange}
          className="w-4/5 text-xl px-20 py-3 pl-4 rounded-lg outline-none text-black"
          placeholder="Task"
        />
      </div>
      <div className="py-4 flex flex-col self-start">
        <label htmlFor="date" className="text-xl text-black font-semibold mb-1">
          Task Date:
        </label>
        <input
          type="date"
          id="date"
          name="date"
          value={newTask.date}
          onChange={handleChange}
          className="w-4/5 text-xl p-3  rounded-lg outline-none text-black"
        />
      </div>
      <div>
        <input
          type="checkbox"
          name="complete"
          id="complete"
          checked={newTask.complete}
          onChange={handleChange}
        />
        <label htmlFor="complete" className="font-bold text-white">
          Complete:
        </label>
      </div>
      <button
        onClick={handleAdd}
        className="border px-20 py-2 rounded-lg hover:shadow-xl active:text-lg active:pl-3"
      >
        Add Task
      </button>
    </form>
  );
}

export default AddTask;
