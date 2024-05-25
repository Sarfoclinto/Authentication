import React, { Children, useContext } from "react";
import { UserContext } from "../Context/UserContext";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoutes() {
  const user = JSON.parse(sessionStorage.getItem("user"));
  const userToken = user?.userToken;
  return userToken ? <Outlet /> : <Navigate to="/login" replace />;
}

export default PrivateRoutes;
