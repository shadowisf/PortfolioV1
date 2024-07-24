import React from "react";
import ReactDOM from "react-dom/client";
import "./main.scss";
import "./typed.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoadingScreen from "./components/LoadingScreen.tsx";
import Test from "./pages/Test.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoadingScreen />,
  },

  {
    path: "/test",
    element: <Test />,
  },
]);

window.name = "colorTheme";

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
