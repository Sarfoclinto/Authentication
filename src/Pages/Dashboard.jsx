import React, { useEffect, useContext } from "react";
import Card from "../Components/Card";
import CardNav from "../Components/CardNav";
import TaskCard from "../Components/TaskCard";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

function Dashboard() {
  

  return (
    <div id="dashboard" className=" w-full p-1 ">
      <CardNav />
      <div id="content">
        <div id="cards " className="flex w-full gap-6 ">
          <Card
            title="Web Development"
            task={10}
            value={96}
            bg="bg-[#71357b]"
          />
          <Card
            title="Mobile App Design"
            task={12}
            value={48}
            bg="bg-orange-500"
          />
          <Card
            title="Facebook Brand UI Kit"
            task={22}
            value={73}
            bg="bg-blue-700"
          />
          <Card title="Web Development" task={10} value={96} bg="bg-teal-400" />
        </div>

        <div id="task-statistics" className=" flex gap-x-5">
          <div id="tasks" className=" flex flex-col gap-3 w-1/2">
            <h1 className="font-bold text-purple-900 mt-3 text-xl">
              Tasks for today
            </h1>
            <TaskCard
              bg="orange-li-bg"
              title="Mobile App"
              task="Prepare Figma file"
              value="true"
            />
            <TaskCard
              bg="purple-lin-bg"
              title="UX wireframes"
              task="Design UX wireframes"
              value="true"
            />
            <TaskCard
              bg="blue-lin-bg"
              title="Mobile App"
              task="Search"
              value="true"
            />
          </div>
          <div id="statistics" className=" flex w-1/2"></div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
