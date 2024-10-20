import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import "./index.css";

import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Layout from "./components/layout/Layout";
import Home from "./components/shared/Home";
import Jobs from "./components/shared/Jobs";
import { Toaster } from "@/components/ui/sonner";
import Browse from "./components/shared/Browse";
import Profile from "./components/shared/Profile";
import JobDesc from "./components/shared/JobDesc";

function App() {
  const Router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/signup",
          element: <Signup />,
        },
        {
          path: "/jobs",
          element: <Jobs />,
        },
        {
          path: "/description/:id",
          element: <JobDesc/>
        },
        {
          path: "/browse",
          element: <Browse />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={Router} />
      <Toaster />
    </div>
  );
}

export default App;
