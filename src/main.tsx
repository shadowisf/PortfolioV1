import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import "./typed.scss";
import Index from "./pages/Index.tsx";
import About from "./pages/About.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./pages/Contact.tsx";
import Project from "./pages/Project.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },

  {
    path: "/about",
    element: <About />,
  },

  {
    path: "/projects",
    element: <Project />,
  },

  {
    path: "/contact",
    element: <Contact />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
