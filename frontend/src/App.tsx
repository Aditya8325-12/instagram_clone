import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import SideBar from "./componets/SideBar";
import bg from "./assets/bg.png";
import Message from "./pages/Message";
import UserList from "./pages/UserList";
// import { userAuthStore } from "./store/userAuthStore";
const App = () => {
  // const { CheckAuth, Login } = userAuthStore();

  const location = useLocation();
  const excludepath = ["/login", "/signup"];

  useEffect(() => {}, []);
  return (
    <div
      className="w-full h-screen fixed  flex"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      {!excludepath.includes(location.pathname) && <SideBar />}

      <div className="w-full h-full  flex justify-center items-center relative">
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/login" Component={SignIn} />
          <Route path="/signup" Component={SignUp} />
          <Route path="/message" Component={Message} />
          <Route path="/userlist" Component={UserList} />
        </Routes>
        <div className="absolute top-0 right-0 ">
          <Toaster position="top-right" />
        </div>
      </div>
    </div>
  );
};

export default App;
