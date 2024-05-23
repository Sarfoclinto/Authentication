import React from "react";

function Card({ title, task, value }) {
  return (
    <div id="card" className="w-1/5 bg-[#71357b] p-2 rounded-xl">
      <div id="heading" className="w-full flex justify-between items-center">
        <div id="images" className="flex relative items-center">
          <img
            src="src/assets/vege.png"
            alt=""
            className="w-1/6 rounded-full"
          />
          <img
            src="src/assets/vege.png"
            alt=""
            className="w-1/6 absolute left-4 rounded-full"
          />
          <img
            src="src/assets/vege.png"
            alt=""
            className="w-1/6 absolute left-8 rounded-full"
          />
        </div>
        <img src="src/assets/more.png" alt="" className="h-[20px] rotate-90" />
      </div>
      <h1 className="font-semibold text-white leading-5 my-4 w-3/5 mb-5">
        {title}
      </h1>
      <p className="text-white text-sm ">
        {task} task | {value}%{" "}
      </p>
      <progress
        class="h-2 [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-bar]:bg-slate-700 [&::-webkit-progress-value]:bg-white [&::-moz-progress-bar]:bg-green-400"
        value={`${value}`}
        max="100"
      ></progress>
    </div>
  );
}

export default Card;
