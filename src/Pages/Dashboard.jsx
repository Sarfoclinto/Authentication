import React from "react";
import Card from "../Components/Card";
import CardNav from "../Components/CardNav";

function Dashboard() {
  return (
    <div id="dashboard" className="debug w-full p-1 ">
      <CardNav />
      <div id="content">
        <div id="cards">
          <Card title="Web Development" task={10} value={96} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
