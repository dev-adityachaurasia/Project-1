import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Forget from "./components/Forget";
import Login from "./components/Login";
import Signin from "./components/Signin";
import Home from "./components/Home";
import Uploader from "./components/Uploader";
import Papers from "./components/Papers";
import Results from "./components/Results";
import Events from "./components/Events";

// Create the router with nested routes
const App = () => {
  const isAuth = () => {
    let token = localStorage.getItem("token");
    if (!token) {
      return false;
    }
    return true;
  };
  console.log(isAuth());
  const router = createBrowserRouter([
    {
      path: "/",
      element: isAuth() ? <Navigate to="/home" /> : <Navigate to="/login" />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    { path: "/upload", element: <Uploader /> },
    { path: "/login", element: <Login /> },
    { path: "/results", element: <Papers /> },
    { path: "/question", element: <Results /> },
    { path: "/events", element: <Events /> },
    { path: "/signup", element: <Signin /> },
    { path: "/forget", element: <Forget /> },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
