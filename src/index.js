import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import "macro-css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/root";

const router = createBrowserRouter([
  {
    path:"/",
    element: <Root/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
     <App />
     <RouterProvider router={router} />
  </React.StrictMode>
);
