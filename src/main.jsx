import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import TaskPage from "./pages/TaskPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
    {
    path: "/task",
    element: <TaskPage />,
  }

]);
const root = document.getElementById("root");

ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
