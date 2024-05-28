import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import { useState } from "react";
import Dashboard from "./Pages/Dashboard";
import Sidebar from "./Components/Sidebar";
import Tasklist from "./Pages/Tasklist";
import TaskContextProvider from "./Context/TaskContext";
import UserContextProvider from "./Context/UserContext";
import Modal from "./Components/Modal";
import AddTask from "./Components/AddTask";
import PrivateRoutes from "./Components/PrivateRoutes";

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

  return (
    <Router>
      <div id="app" className="w-full h-dvh p-10">
        <div
          id="content"
          className=" w-full flex gap-x-3 h-full rounded-2xl p-5"
        >
          <UserContextProvider>
            <Sidebar setModal={setModal} />
            <TaskContextProvider>
              <Modal modalOpen={modal.active} closeModal={closeModal}>
                <AddTask setModal={setModal} />
              </Modal>

              <Routes>
                <Route exact path="/login" element={<Login />} />
                <Route path="/" element={<PrivateRoutes />}>
                  <Route path="dashboard" element={<Dashboard />} />
                  <Route
                    path="tasklist"
                    element={<Tasklist setModal={setModal} />}
                  />
                </Route>
              </Routes>
            </TaskContextProvider>
          </UserContextProvider>
        </div>
      </div>
    </Router>
  );
}

export default App;
