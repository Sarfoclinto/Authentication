import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Navigate,
} from "react-router-dom";
import Login from "./Pages/Login";
import { Children, useState } from "react";
import Dashboard from "./Pages/Dashboard";
import Sidebar from "./Components/Sidebar";
import Tasklist from "./Pages/Tasklist";
import Home from "./Pages/Home";
import TaskContextProvider from "./Context/TaskContext";
import UserContextProvider from "./Context/UserContext";
import Modal from "./Components/Modal";
import AddTask from "./Components/AddTask";

function App() {
  const [modal, setModal] = useState({
    active: false,
    mode: "addtask",
  });

  const closeModal = () => {
    setModal((prev) => {
      return { ...prev, active: false };
    });
  };

  const user = JSON.parse(sessionStorage.getItem("user"));
  const userToken = user?.userToken;

  return (
    <>
      <div id="app" className="w-full h-dvh p-10">
        <div
          id="content"
          className="bg-slate-300 w-full flex gap-x-3 h-full rounded-2xl p-5"
        >
          <UserContextProvider>
            <Sidebar setModal={setModal} />

            <TaskContextProvider>
              <Modal modalOpen={modal.active} closeModal={closeModal}>
                <AddTask setModal={setModal} />
              </Modal>
              <Router>
                <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route
                    exact
                    path="/dashboard"
                    element={
                      userToken ? <Dashboard /> : <Navigate replace to={"/"} />
                    }
                  />
                  <Route exact path="/tasklist" element={<Tasklist />} />
                </Routes>
              </Router>
            </TaskContextProvider>
          </UserContextProvider>
        </div>
      </div>
    </>
  );
}

export default App;
