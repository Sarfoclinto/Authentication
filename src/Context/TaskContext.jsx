import React, { createContext, useEffect, useState } from "react";

export const TaskContext = createContext();

const TaskContextProvider = (props) => {
  const [tasks, setTask] = useState(
    JSON.parse(sessionStorage.getItem("tasks")) || [
      {
        title: "Assignments",
        task: "Do homework",
        date: "2024-03-01",
        complete: false,
        id: 1,
        bg: "orange-li-bg",
      },
      {
        title: "Studies",
        task: "Learn API",
        date: "2024-05-11",
        complete: false,
        id: 2,
        bg: "purple-lin-bg",
      },
      {
        title: "Studies",
        task: "Learn react",
        date: "2024-11-11",
        complete: false,
        id: 3,
        bg: "blue-lin-bg",
      },
    ]
  );
  const [newTask, setNewTask] = useState({
    title: "",
    task: "",
    date: "",
    id: "",
    complete: false,
    bg: "blue-lin-bg"
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
