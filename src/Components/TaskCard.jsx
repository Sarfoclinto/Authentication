import React from "react";

function TaskCard({ bg ,title, task, value }) {
  return (
    <div className="w-3/5 flex flex-col rounded-lg ">
      <div
        className={`${bg} w-full p-3 rounded-xl  hover:shadow-none hover:border`}
      >
        <div className="flex items-center w-full justify-between">
          <h1 className="font-bold text-purple-950">{title}</h1>
          <input type="radio" className="rounded-full " id="" checked={true} />
        </div>
        <p className="text-slate-400 font-medium">{task}</p>
      </div>
      {/* <div className="purple-lin-bg">jj</div>
      <div className="blue-lin-bg">jj</div> */}
    </div>
  );
}

export default TaskCard;
