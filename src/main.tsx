import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import Index from "./pages/Index.tsx";
import About from "./pages/About.tsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Work from "./pages/Work.tsx";
import Contact from "./pages/Contact.tsx";

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
    path: "/work",
    element: <Work />,
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
