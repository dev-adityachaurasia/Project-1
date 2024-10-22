import { useContext, useState } from "react";
import google from "../assets/google.png";
import axios from "../utils/axios.jsx";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import userContext from "../context/Context.jsx";

const Login = () => {
  const navigate = useNavigate();
  const { setUsers } = useContext(userContext);

  const [loginCredencial, setloginCredencial] = useState({
    value: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false); // Added state to track password visibility

  const onChange = (e) => {
    setError("");
    setloginCredencial((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.post("/login", loginCredencial, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      if (res.data.success) {
        // Navigate after successful login
        setUsers(res.data.user);
        localStorage.setItem("token", "secretToken"); // Simulated token storage for demo purposes

        navigate("/home"); // Navigate after successful login with delay
      }
    } catch (err) {
      // Display server error if available
      setError(err.response?.data?.message || "Invalid credentials");
    }
  };

  return (
    <>
      <div className="flex items-center flex-col justify-center h-screen bg-cente">
        <div className="backdrop-blur-sm bg-white p-8 border-none w-[85vw] xl:border xl:border-solid md:border md:border-solid md:w-[50vh] lg:w-[60vh] xl:w-[45vh] sm:w-[60vw]">
          <form onSubmit={loginHandler}>
            <div className="text-center m-5">
              <h2 className="text-xl font-bold text-black">Login</h2>
            </div>
            <div className="justify-center items-center flex flex-col gap-4">
              {/* Username or Email Input */}
              <label className="w-full relative justify-center flex text-gray-400">
                <input
                  type="text"
                  name="value"
                  value={loginCredencial.value}
                  onChange={onChange}
                  className="w-full font-thin border border-black p-2 rounded-lg text-black"
                />
                <span
                  className={`absolute top-2 left-3 transition-all duration-200 ${
                    loginCredencial.value === "" ? "input-text" : "input-fill"
                  }`}
                >
                  Username or Email
                </span>
              </label>
              {/* Password Input */}
              <label className="w-full relative justify-center flex text-gray-400">
                <input
                  type={showPassword ? "text" : "password"} // Toggle password visibility
                  name="password"
                  value={loginCredencial.password}
                  onChange={onChange}
                  className="w-full font-thin border border-black p-2 rounded-lg text-black"
                />
                <span
                  className={`absolute top-2 left-3 transition-all duration-200 ${
                    loginCredencial.password === ""
                      ? "input-text"
                      : "input-fill"
                  }`}
                >
                  Password
                </span>
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)} // Toggle password visibility
                  className="absolute right-3 top-3 text-sm text-gray-600"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </label>
              {/* Login Button */}
              <button
                type="submit"
                disabled={
                  loginCredencial.password.length < 6 ||
                  loginCredencial.value === ""
                }
                className={`w-full border-none text-black p-2 rounded-lg transition duration-300 ${
                  loginCredencial.password.length >= 6 && loginCredencial.value
                    ? "bg-blue-600"
                    : "bg-[#78A8EB]"
                }`}
              >
                Login
              </button>
              {/* Display error if any */}
              {error && <div className="text-red-500">{error}</div>}
              {/* Divider */}
              <div className="flex items-center justify-center w-full space-x-2 my-4">
                <div className="border border-yellow-600 border-solid w-full"></div>
                <span className="text-black">Else</span>
                <div className="border border-yellow-600 w-full border-solid"></div>
              </div>
              {/* Google Login Button */}
              
              {/* Forgot Password Link */}
              <div className="text-center">
                <NavLink
                  to="/forget"
                  className="text-yellow-600 hover:underline no-underline"
                >
                  Forgot password?
                </NavLink>
              </div>
            </div>
          </form>
        </div>
        <div className="border m-4 border-solid bg-white px-8 py-4 w-[70vw] md:w-[60vh] lg:w-[60vh] xl:w-[45vh] sm:w-[60vw]">
          {/* Register Link */}
          <div className="text-center">
            <p className="text-black">
              Don't have an account?{" "}
              <NavLink
                to="/signup"
                className="text-yellow-600 no-underline hover:underline"
              >
                Sign In
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
