import React from "react";

function CardNav() {
  return (
    <header className="flex justify-between items-center mb-5">
      <div id="profile" className="p-1">
        <h1 className="font-bold font-sans text-purple-950">Hello, Sherlock</h1>
        <p className="text-slate-500 font-medium">
          Today is Monday, 26th October 2024
        </p>
      </div>
      <div id="nav" className="p-1 flex items-center gap-3">
        <div className="bg-slate-500 w-fit h-fit p-2 rounded-lg cursor-pointer">
          <img src="src/assets/search.png" alt="" className="w-[15px]" />
        </div>
        <button className="bg-black text-white px-4 py-1 rounded-lg text-md">
          Add New Project
        </button>
      </div>
    </header>
  );
}

export default CardNav;
