import React, { useContext, useState } from "react";
import { UserContext } from "../Context/UserContext";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";

function Login() {
  const { user, setUser, loading, setLoading } = useContext(UserContext);
  const navigate = useNavigate();

  const [userinfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleLogin = () => {
    setLoading(true);
    const token = uuid();
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userinfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLoading(false);
        setUser(() => {
          return {
            email: data.email,
            password: data.password,
            id: data.id,
            userToken: token,
          };
        });
      })
      .then(() => {
        navigate("/dashboard");
      });
  };

  return (
    <>
      {/* <section className="w-full h-full flex bg-blue-300 p-10"> */}
      <div className="w-1/2 bg-white p-20 flex flex-col items-center rounded-l-xl">
        <div className="bg-slate-300 grid place-items-center h-fit w-fit p-1 rounded ">
          <div className="bg-blue-500 p-2 rotate-45 "></div>
        </div>
        <h1 className="font-bold text-2xl">It's nice to see you again!</h1>
        <p className="text-slate-400">Log in to continue to your account</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="mt-7 flex flex-col "
        >
          <label htmlFor="email" className="font-bold py-2">
            Email address
          </label>
          <input
            type="email"
            name="email"
            placeholder="name@company.com"
            id="email"
            value={userinfo.email}
            onChange={handleChange}
            className="border py-2 px-32 pl-[10px] rounded-lg outline-none"
          />
          <label htmlFor="password" className="font-bold py-2">
            Password
          </label>
          <input
            type="password"
            placeholder="*********"
            name="password"
            id="password"
            value={userinfo.password}
            onChange={handleChange}
            className="border py-2 px-32 pl-[10px] rounded-lg outline-none"
          />

          <div className="mt-3 flex justify-between items-center">
            <div>
              <input type="checkbox" id="remember" className="mr-1" />
              <lable htmlFor="remember" className="cursor-pointer">
                Remember me
              </lable>
            </div>
            <a href="#" className="text-blue-700 font-medium">
              Forgot password?
            </a>
          </div>
          <button
            onClick={handleLogin}
            className="bg-blue-600 text-white font-normal p-2 my-3 rounded-lg"
          >
            {loading ? "Loading" : "Log in"}
          </button>
          <div className="flex items-center gap-2 justify-between">
            <button className="flex items-center gap-2 w-1/2 border px-5 py-2 rounded-lg">
              <img
                src="src/assets/google.png"
                alt="google"
                className="w-[24px]"
              />
              Google
            </button>
            <button className="flex items-center gap-2 w-1/2 border px-5 py-2 rounded-lg">
              <img
                src="src/assets/facebook.png"
                alt="facebook"
                className="w-[24px]"
              />
              Facebook
            </button>
          </div>
        </form>

        <p className="mt-9 font-semibold">
          Don't have an account?{" "}
          <a href="#" className="text-blue-700">
            Sign up here
          </a>
        </p>
      </div>

      <div className="w-1/2 bg-blue-800 rounded-r-xl">
        <img
          src="src/assets/side-bg.jpg"
          alt=""
          className="w-full h-full rounded-r-xl"
        />
      </div>
      {/* </section> */}
    </>
  );
}

export default Login;
