import React from "react";
import Card from "../Components/Card";
import CardNav from "../Components/CardNav";

function Dashboard() {
  return (
    <div id="dashboard" className="debug w-full p-1 ">
      <CardNav />
      <div id="content">
        <div id="cards " className="flex w-full gap-6 ">
          <Card title="Web Development" task={10} value={96} bg="#71357b" />
          <Card title="Mobile App Design" task={12} value={48} bg="#71357b" />
          <Card
            title="Facebook Brand UI Kit"
            task={22}
            value={73}
            bg="#71357b"
          />
          <Card title="Web Development" task={10} value={96} bg="#71357b" />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
