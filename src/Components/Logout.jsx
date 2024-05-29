import React, { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import { useNavigate } from "react-router-dom";

function Logout({ setModal }) {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const handlelogout = () => {
    setUser({
      email: "",
      password: "",
      userToken: "",
    });
    setModal((prev) => {
      return { ...prev, active: false };
    });
    navigate("/login");
  };
  return (
    <div
      id="logout"
      className="hover:shadow-xl bg-white text-black w-fit h-fit flex flex-col gap-10 p-5 rounded-xl"
    >
      <div className="font-bold text-xl">Log Out?</div>
      <p  className="text-xl font-medium text-blue-500 text-center">
        Are you sure you want to log out of <br />{" "}
        <span className="text-black font-bold">{user.email}?</span>
      </p>
      <div className="flex justify-between">
        <button
          onClick={() => {
            setModal((prev) => {
              return { ...prev, active: false };
            });
          }}
          className="hover:bg-black hover:text-white bg-blue-300 text-lg font-bold px-10 py-1 rounded-md"
        >
          No
        </button>
        <button
          onClick={handlelogout}
          className="hover:bg-orange-100 hover bg-orange-300 text-lg font-bold px-10 py-1 rounded-md"
        >
          Yes
        </button>
      </div>
    </div>
  );
}

export default Logout;
