import React, { createContext, useEffect, useState } from "react";

export const TaskContext = createContext();

const TaskContextProvider = (props) => {
  const [tasks, setTask] = useState(
    JSON.parse(sessionStorage.getItem("tasks")) || [
      { task: "Do homework", date: "2024-03-01", complete: false, id: 1 },
      { task: "Learn API", date: "2024-05-11", complete: false, id: 2 },
      { task: "Learn react", date: "2024-11-11", complete: false, id: 3 },
    ]
  );
  const [newTask, setNewTask] = useState({
    task: "",
    date: "",
    id: "",
    complete: false,
  });

  const handleComplete = (e) => {
    setTask((prev) => {
      return {
        ...prev,
        complete: e.target.checked,
      };
    });
  };

  useEffect(() => {
    sessionStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  return (
    <TaskContext.Provider value={{ tasks, setTask, newTask, setNewTask }}>
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskContextProvider;
