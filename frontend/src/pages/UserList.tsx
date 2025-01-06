import { userAuthStore } from "../store/userAuthStore";
import { useState } from "react";
const UserList = () => {
  const { AllUserList, friend_list, addfriend, acceptFriendRequest } =
    userAuthStore();

  const [serchterm, setserchterm] = useState("");

  const filterResult = AllUserList.filter(
    (user) =>
      user.username.toLowerCase().includes(serchterm.toLowerCase()) ||
      user.email.toLowerCase().includes(serchterm.toLowerCase())
  );

  console.log("frieda", friend_list);
  const isinfriendList = (userid) => {
    console.log(userid);
    return friend_list.find((friend) => friend.friend_id === userid);
  };

  return (
    <div className="w-full h-full bg-white overflow-auto flex  justify-center ">
      <div className="w-6/12  h-full flex justify-start items-center  flex-col">
        <label
          className=" mt-10 w-10/12  relative bg-white  flex flex-col md:flex-row items-center justify-center border py-1 px-1 rounded-2xl gap-2 shadow-2xl focus-within:border-gray-300"
          htmlFor="search-bar"
        >
          <input
            id="search-bar"
            placeholder="enter username "
            className="px-3 py-1 w-full rounded-md flex-1 outline-none bg-white"
            onChange={(e) => {
              setserchterm(e.target.value);
            }}
          />
          <button className="w-full md:w-auto px-4 py-2 bg-black border-black text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-xl transition-all disabled:opacity-70">
            <div className="relative">
              {/* Loading animation change opacity to display */}
              <div className="flex items-center justify-center h-3 w-3 absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 transition-all">
                <svg
                  className="opacity-0 animate-spin w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx={12}
                    cy={12}
                    r={10}
                    stroke="currentColor"
                    strokeWidth={4}
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              </div>
              <div className="flex items-center transition-all opacity-1 valid:">
                <span className="text-sm font-semibold whitespace-nowrap truncate mx-auto">
                  Search
                </span>
              </div>
            </div>
          </button>
        </label>
        <hr className="py-10" />

        <div className="w-full flex flex-col gap-4 items-center">
          {filterResult.map((item, index) => {
            const friend = isinfriendList(item._id);
            return (
              <div
                key={index}
                className=" w-10/12 h-20 flex border rounded-md shadow-xl "
              >
                <div className="w-2/12  h-full p-3">
                  <img
                    className="w-full h-full rounded-full object-cover"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                    alt=""
                  />
                </div>
                <div className="w-5/12 text-sm p-2 h-full">
                  <h1>{item.username}</h1>
                  <p>{item.email}</p>
                </div>
                <div className="w-5/12 flex items-center justify-center gap-2 h-full ">
                  {friend ? (
                    <>
                      {friend.status === "pending" ? (
                        <>
                          <button
                            onClick={() => {
                              acceptFriendRequest(item._id);
                            }}
                            className="px-6 py-1  text-center text-white bg-blue-600 border border-blue-600 rounded active:text-blue-500 hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring"
                          >
                            accept
                          </button>

                          <button className="px-3 py-1  text-center text-blue-600 border border-blue-600 rounded hover:bg-blue-600 hover:text-white active:bg-indigo-500 focus:outline-none focus:ring">
                            Desline
                          </button>
                        </>
                      ) : friend.status === "requested" ? (
                        <>
                          <button className="px-6 py-1  text-center text-white bg-blue-600 border border-blue-600 rounded active:text-blue-500 hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring">
                            View
                          </button>

                          <button
                            disabled
                            className="px-3 py-1  disabled text-center text-blue-600 border border-blue-600 rounded hover:bg-blue-600 hover:text-white active:bg-indigo-500 focus:outline-none focus:ring"
                          >
                            requested
                          </button>
                        </>
                      ) : (
                        <>
                          <button className="px-6 py-1  text-center text-white bg-blue-600 border border-blue-600 rounded active:text-blue-500 hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring">
                            View
                          </button>

                          <button className="px-3 py-1  text-center text-blue-600 border border-blue-600 rounded hover:bg-blue-600 hover:text-white active:bg-indigo-500 focus:outline-none focus:ring">
                            Remove
                          </button>
                        </>
                      )}
                    </>
                  ) : (
                    <>
                      <button className="px-6 py-1  text-center text-white bg-blue-600 border border-blue-600 rounded active:text-blue-500 hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring">
                        view
                      </button>

                      <button
                        className="px-3 py-1  text-center text-blue-600 border border-blue-600 rounded hover:bg-blue-600 hover:text-white active:bg-indigo-500 focus:outline-none focus:ring"
                        onClick={() => {
                          addfriend(item._id);
                        }}
                      >
                        Add
                      </button>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UserList;
