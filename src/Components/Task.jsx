import React, { useState } from "react";

function Task({ task, setTask}) {
  const deletetask = () => {
    setTask((prev) => {
      return prev.filter((thistask) => {
        return thistask.id !== task.id;
      });
    });
  };
  const handleChange = (e) => {
    const {name, checked} = e.target
    setTask((prev) => {
      
    })
  }

  return (
    <tr className="w-full">
      <td>{task.task}</td>
      <td>{task.date}</td>
      <td>
        <input
          type="checkbox"
          className="mr-2"
          name="complete"
          checked={task.complete}
          onChange={() => {
            task.complete = !task.complete;
          }}
        />
        <button
          onClick={deletetask}
          className="border px-2 bg-red-500 text-white rounded-m "
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default Task;
