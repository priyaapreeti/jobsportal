import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import "./index.css";

import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Layout from "./components/layout/Layout";
import Home from "./components/shared/Home";
import Jobs from "./components/shared/Jobs";
import { Toaster } from "@/components/ui/sonner";

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
          path: "/browse",
          element: <Login />,
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
