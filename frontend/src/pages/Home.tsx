import Posts from "../componets/Posts";
import Status from "../componets/status";
import SuggestBar from "../componets/SuggestBar";
import { userAuthStore } from "../store/userAuthStore";
import { useEffect } from "react";
const Home = () => {
  const { CheckAuth } = userAuthStore();
  useEffect(() => {
    CheckAuth();
  }, []);

  return (
    <div className="w-full h-full bg-white overflow-auto flex justify-center">
      <div className="w-6/12 h-full ">
        <Status />
        <Posts />
      </div>
      <SuggestBar />
    </div>
  );
};

export default Home;
