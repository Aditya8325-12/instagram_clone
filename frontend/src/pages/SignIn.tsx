import { useState } from "react";
import toast from "react-hot-toast";
import { userAuthStore } from "../store/userAuthStore";
import { Link, useNavigate } from "react-router-dom";
const SignIn = () => {
  const [formdata, setformdata] = useState({
    username: "",
    password: "",
  });

  const { Login } = userAuthStore();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setformdata((prevdata) => ({
      ...prevdata,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formdata.username !== "" && formdata.password !== "") {
        const body = {
          username: formdata.username,
          password: formdata.password,
        };

        const res = await Login(body);
        if (res) {
          navigate("/");
        }
      } else {
        toast.error("plese fill the all value");
      }
    } catch (error) {
      console.log("test");
    } finally {
      setformdata({
        username: "",
        password: "",
      });
    }
  };

  return (
    <>
      <div className="w-4/12 px-4 ">
        <div className="relative mx-auto bg-white  overflow-hidden rounded-lg  border shadow-lg py-24 px-10 text-center sm:px-12 md:px-[60px] dark:bg-dark-2">
          <h1 className="text-center pb-8 font-bold text-lg"> Sign IN</h1>

          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <input
                type="text"
                name="username"
                value={formdata.username}
                onChange={handleChange}
                placeholder="username"
                className="w-full px-5 py-3 text-base bg-transparent border rounded-md outline-none border-stroke text-body-color dark:text-white dark:border-dark-3 focus:border-primary focus-visible:shadow-none"
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                name="password"
                value={formdata.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full px-5 py-3 text-base bg-transparent border rounded-md outline-none border-stroke text-body-color dark:text-white dark:border-dark-3 focus:border-primary focus-visible:shadow-none"
              />
            </div>
            <div className="mb-10">
              <input
                type="submit"
                defaultValue="Sign In"
                className="w-full px-5 py-3 text-base font-medium text-white transition border rounded-md cursor-pointer border-primary bg-primary hover:bg-opacity-90"
              />
            </div>
          </form>

          <p className="text-base text-body-color dark:text-dark-6">
            <span className="pr-0.5">Not a member yet?</span>
            <Link to="/signup" className="text-primary hover:underline">
              Sign Up
            </Link>
          </p>

          <div>
            <span className="absolute top-1 right-1">
              <svg
                width={40}
                height={40}
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="1.39737"
                  cy="38.6026"
                  r="1.39737"
                  transform="rotate(-90 1.39737 38.6026)"
                  fill="#3056D3"
                />
                <circle
                  cx="1.39737"
                  cy="1.99122"
                  r="1.39737"
                  transform="rotate(-90 1.39737 1.99122)"
                  fill="#3056D3"
                />
                <circle
                  cx="13.6943"
                  cy="38.6026"
                  r="1.39737"
                  transform="rotate(-90 13.6943 38.6026)"
                  fill="#3056D3"
                />
                <circle
                  cx="13.6943"
                  cy="1.99122"
                  r="1.39737"
                  transform="rotate(-90 13.6943 1.99122)"
                  fill="#3056D3"
                />
                <circle
                  cx="25.9911"
                  cy="38.6026"
                  r="1.39737"
                  transform="rotate(-90 25.9911 38.6026)"
                  fill="#3056D3"
                />
                <circle
                  cx="25.9911"
                  cy="1.99122"
                  r="1.39737"
                  transform="rotate(-90 25.9911 1.99122)"
                  fill="#3056D3"
                />
                <circle
                  cx="38.288"
                  cy="38.6026"
                  r="1.39737"
                  transform="rotate(-90 38.288 38.6026)"
                  fill="#3056D3"
                />
                <circle
                  cx="38.288"
                  cy="1.99122"
                  r="1.39737"
                  transform="rotate(-90 38.288 1.99122)"
                  fill="#3056D3"
                />
                <circle
                  cx="1.39737"
                  cy="26.3057"
                  r="1.39737"
                  transform="rotate(-90 1.39737 26.3057)"
                  fill="#3056D3"
                />
                <circle
                  cx="13.6943"
                  cy="26.3057"
                  r="1.39737"
                  transform="rotate(-90 13.6943 26.3057)"
                  fill="#3056D3"
                />
                <circle
                  cx="25.9911"
                  cy="26.3057"
                  r="1.39737"
                  transform="rotate(-90 25.9911 26.3057)"
                  fill="#3056D3"
                />
                <circle
                  cx="38.288"
                  cy="26.3057"
                  r="1.39737"
                  transform="rotate(-90 38.288 26.3057)"
                  fill="#3056D3"
                />
                <circle
                  cx="1.39737"
                  cy="14.0086"
                  r="1.39737"
                  transform="rotate(-90 1.39737 14.0086)"
                  fill="#3056D3"
                />
                <circle
                  cx="13.6943"
                  cy="14.0086"
                  r="1.39737"
                  transform="rotate(-90 13.6943 14.0086)"
                  fill="#3056D3"
                />
                <circle
                  cx="25.9911"
                  cy="14.0086"
                  r="1.39737"
                  transform="rotate(-90 25.9911 14.0086)"
                  fill="#3056D3"
                />
                <circle
                  cx="38.288"
                  cy="14.0086"
                  r="1.39737"
                  transform="rotate(-90 38.288 14.0086)"
                  fill="#3056D3"
                />
              </svg>
            </span>
            <span className="absolute left-1 bottom-1">
              <svg
                width={29}
                height={40}
                viewBox="0 0 29 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="2.288"
                  cy="25.9912"
                  r="1.39737"
                  transform="rotate(-90 2.288 25.9912)"
                  fill="#3056D3"
                />
                <circle
                  cx="14.5849"
                  cy="25.9911"
                  r="1.39737"
                  transform="rotate(-90 14.5849 25.9911)"
                  fill="#3056D3"
                />
                <circle
                  cx="26.7216"
                  cy="25.9911"
                  r="1.39737"
                  transform="rotate(-90 26.7216 25.9911)"
                  fill="#3056D3"
                />
                <circle
                  cx="2.288"
                  cy="13.6944"
                  r="1.39737"
                  transform="rotate(-90 2.288 13.6944)"
                  fill="#3056D3"
                />
                <circle
                  cx="14.5849"
                  cy="13.6943"
                  r="1.39737"
                  transform="rotate(-90 14.5849 13.6943)"
                  fill="#3056D3"
                />
                <circle
                  cx="26.7216"
                  cy="13.6943"
                  r="1.39737"
                  transform="rotate(-90 26.7216 13.6943)"
                  fill="#3056D3"
                />
                <circle
                  cx="2.288"
                  cy="38.0087"
                  r="1.39737"
                  transform="rotate(-90 2.288 38.0087)"
                  fill="#3056D3"
                />
                <circle
                  cx="2.288"
                  cy="1.39739"
                  r="1.39737"
                  transform="rotate(-90 2.288 1.39739)"
                  fill="#3056D3"
                />
                <circle
                  cx="14.5849"
                  cy="38.0089"
                  r="1.39737"
                  transform="rotate(-90 14.5849 38.0089)"
                  fill="#3056D3"
                />
                <circle
                  cx="26.7216"
                  cy="38.0089"
                  r="1.39737"
                  transform="rotate(-90 26.7216 38.0089)"
                  fill="#3056D3"
                />
                <circle
                  cx="14.5849"
                  cy="1.39761"
                  r="1.39737"
                  transform="rotate(-90 14.5849 1.39761)"
                  fill="#3056D3"
                />
                <circle
                  cx="26.7216"
                  cy="1.39761"
                  r="1.39737"
                  transform="rotate(-90 26.7216 1.39761)"
                  fill="#3056D3"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
