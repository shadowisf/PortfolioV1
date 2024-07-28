import React from "react";
import ReactDOM from "react-dom/client";
import "./main.scss";
import "./typed.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Test from "./pages/Test.tsx";
import Index from "./pages/Index.tsx";
import Project from "./pages/Project.tsx";
import Contact from "./pages/Contact.tsx";
import About from "./pages/About.tsx";

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
    path: "/project",
    element: <Project />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/test",
    element: <Test />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

/*
BLACK AND WHITE PNG CONVERTER
https://onlinetools.com/image/create-two-color-image

PNG TO SVG CONVERTER
https://www.pngtosvg.com

SVG OPTIMIZATION AND COMPRESSION
https://jakearchibald.github.io/svgomg/

SVG ICONS
https://remixicon.com/
https://www.flaticon.com/

BORDER GENERATOR
https://webspe.net/tools/en/border/
*/

/*
https://github.com/brandonmcconnell/typed.css

https://awik.io/determine-color-bright-dark-using-javascript/

https://github.com/fisshy/react-scroll
*/
