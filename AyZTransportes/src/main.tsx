import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home/Home.tsx";
import Tarifa from "./pages/Tarifa/Tarifa.tsx";

import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FAQs from "./pages/FAQs/FAQs.tsx";
import Layout from "./components/Layout/Layout.tsx";
import UpdateTarifa from "./pages/UpdateTarifa/UpdateTarifa.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "tarifa",
        element: <Tarifa />,
      },
      {
        path: "faqs",
        element: <FAQs />,
      },
      {
        path: "updateTarifa",
        element: <UpdateTarifa />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
