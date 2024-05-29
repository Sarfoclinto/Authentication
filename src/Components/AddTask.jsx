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
          title: newTask.title,
          task: newTask.task,
          date: newTask.date,
          id: id,
          checked: newTask.complete,
          bg: newTask.bg === "blue-lin-bg" ? "blue-lin-bg" : "purple-lin-bg",
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
        <label
          htmlFor="title"
          className="text-xl text-black font-semibold mb-1"
        >
          Title:
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={newTask.title}
          onChange={handleChange}
          className="w-4/5 text-xl px-20 py-3 pl-4 rounded-lg outline-none text-black"
          placeholder="Title"
        />
      </div>

      <div className="py-4 flex flex-col  ">
        <label htmlFor="task" className="text-xl text-black font-semibold mb-1">
          Task:
        </label>
        <input
          type="text"
          id="task"
          required
          name="task"
          value={newTask.task}
          onChange={handleChange}
          className="w-4/5 text-xl px-20 py-3 pl-4 rounded-lg outline-none text-black"
          placeholder="Task"
        />
      </div>
      <div className="py-4 flex flex-col self-start w-11/12">
        <label htmlFor="date" className="text-xl text-black font-semibold mb-1">
          Task Date:
        </label>
        <input
          type="date"
          id="date"
          name="date"
          value={newTask.date}
          required
          onChange={handleChange}
          className="w-4/5 text-xl p-3  rounded-lg outline-none text-black"
        />
      </div>
      <div>
        <div>
          <input
            type="checkbox"
            name="complete"
            required
            id="complete"
            checked={newTask.complete}
            onChange={handleChange}
          />
          <label htmlFor="complete" className="font-bold text-white">
            Complete:
          </label>
        </div>

        <div>
          <input
            type="checkbox"
            name="bg"
            id="bg"
            checked={newTask.bg}
            onChange={handleChange}
          />
          <label htmlFor="bg" className="font-bold text-white">
            Blue Background-Color:
          </label>
        </div>
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
