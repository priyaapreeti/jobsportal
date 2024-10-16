import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import "./index.css";

import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Home from "./components/shared/Home"


function App() {
  const Router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/signup",
      element: <Signup/>,
    },

  ]);
  return (
    <div>
      {/* <Navbar/> */}
      <RouterProvider router={Router}/>
    </div>
  );
}

export default App;
