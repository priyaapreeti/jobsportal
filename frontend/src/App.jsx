import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import "./index.css";

import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Home from "./components/shared/Home";
import { Toaster } from "@/components/ui/sonner";
import Layout from "./components/auth/layout/Layout";

function App() {
  const Router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/signup",
          element: <Signup />,
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
