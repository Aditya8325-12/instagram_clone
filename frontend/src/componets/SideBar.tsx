import { AiFillHome, AiOutlineHome } from "react-icons/ai";
import { FiMessageSquare, FiSearch } from "react-icons/fi";
import {
  BsCompass,
  BsCompassFill,
  BsHeart,
  BsHeartFill,
  BsPlusSquare,
} from "react-icons/bs";
import { FaSquarePlus } from "react-icons/fa6";
import { FaUser, FaRegUser, FaSearch } from "react-icons/fa";
import { IoChatbox } from "react-icons/io5";
import { IoIosMore } from "react-icons/io";
import { Link } from "react-router-dom";
import { useState } from "react";

const SideBar = () => {
  const menuItems = [
    {
      name: "Home",
      icon: <AiOutlineHome className="text-xl" />,
      activeIcon: <AiFillHome className="text-xl" />,
      link: "/",
    },
    {
      name: "user",
      icon: <FiSearch className="text-2xl" />,
      activeIcon: <FaSearch className="text-2xl" />,
      link: "/userlist",
    },
    {
      name: "Explore",
      icon: <BsCompass className="text-xl" />,
      activeIcon: <BsCompassFill className="text-xl" />,
      link: "/",
    },
    {
      name: "Messages",
      icon: <FiMessageSquare className="text-xl" />,
      activeIcon: <IoChatbox className="text-xl" />,
      link: "/message",
    },
    {
      name: "Notifications",
      icon: <BsHeart className="text-xl" />,
      activeIcon: <BsHeartFill className="text-xl" />,
      link: "/",
    },
    {
      name: "Create",
      icon: <BsPlusSquare className="text-xl" />,
      activeIcon: <FaSquarePlus className="text-xl" />,
      link: "/",
    },
    {
      name: "Profile",
      icon: <FaRegUser className="text-xl" />,
      activeIcon: <FaUser className="text-xl" />,
      link: "/profile",
    },
    {
      name: "More",
      icon: <IoIosMore className="text-xl" />,
      activeIcon: <IoIosMore className="text-2xl  " />,
      link: "/",
    },
  ];

  const [activepath, setactivepath] = useState(menuItems[0]);

  const excludepath = ["/message"];

  return (
    <div
      className={` ${
        !excludepath.includes(activepath.link) ? "w-3/12" : ""
      }   h-full bg-white d-flex justify-center items-center border-r`}
    >
      <ul className="px-2 py-3 gap-3  flex flex-col justify-center h-full">
        {menuItems.map((item, index) => {
          return (
            <li
              key={index}
              onClick={() => {
                setactivepath(item);
              }}
            >
              <Link
                className={` ${
                  !excludepath.includes(activepath.link)
                    ? "hover:bg-gray-400"
                    : ""
                } cursor-pointer py-2 rounded-sm flex justify-start items-center px-4`}
                to={item.link}
              >
                {activepath.name === item.name ? item.activeIcon : item.icon}
                {!excludepath.includes(activepath.link) && (
                  <span className="ml-4">{item.name}</span>
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideBar;
