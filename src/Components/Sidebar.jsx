import React, { act, useContext } from "react";
import Sidelinks from "./Sidelinks";
import { UserContext } from "../Context/UserContext";

function Sidebar({ setModal }) {
  const { user } = useContext(UserContext);
  return (
    <aside className="bg-slate-100 w-1/6 h-full min-w-fit flex flex-col items-center rounded-l-xl p-3">
      <a href="/">
        <div id="title" className="flex items-center gap-1">
          <img src="src/assets/chart-icon.png" alt="" className="w-[35px]" />
          <h3 className="font-semibold text-purple-700 text-2xl">Chaart</h3>
        </div>
      </a>

      <div
        id="profile"
        className="w-full flex gap-1 flex-col items-center my-10"
      >
        <img
          src="src/assets/profile-pic.jpeg"
          alt=""
          className="w-2/5 rounded-full "
        />
        <h3 className="font-bold">Hec Sherlock</h3>
        <p className="text-slate-400">
          {user?.email ? user.email : "emialaddress@yours.com"}
        </p>
      </div>

      <nav id="navbar">
        <ul className="flex flex-col gap-y-2">
          <Sidelinks name="Dashboard" img="home" to="dashboard" />
          <Sidelinks name="Tasklist" img="task" to="tasklist" />
          {user?.email && (
            <button
              onClick={() => {
                setModal({ active: true, mode: "logout" });
              }}
              className="flex items-center py-2 gap-x-2 cursor-pointer"
            >
              <img src={`src/assets/logout.png`} alt="" className="w-2/12" />
              <p className="text-purple-700 font-semibold text-base hover:text-black">
                Logout
              </p>
            </button>
          )}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
