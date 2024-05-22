import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Login from "./Login";

function Home() {
  // const navigate = useNavigate();
  // useEffect(() => {
  //   navigate("/dashboard");
  // }, []);
  return <Login />;
}

export default Home;
