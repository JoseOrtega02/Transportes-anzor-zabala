import React, { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import Loader from "./components/Loader/Loader.tsx";

const Layout = lazy(() => import("./components/Layout/Layout.tsx"));
const Home = lazy(() => import("./pages/Home/Home.tsx"));
const Tarifa = lazy(() => import("./pages/Tarifa/Tarifa.tsx"));
const FAQs = lazy(() => import("./pages/FAQs/FAQs.tsx"));
const UpdateTarifa = lazy(
  () => import("./pages/UpdateTarifa/UpdateTarifa.tsx")
);
const Login = lazy(() => import("./pages/Login/Login.tsx"));

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "tarifa",
        Component: Tarifa,
      },
      {
        path: "faqs",
        Component: FAQs,
      },
      {
        path: "updateTarifa",
        Component: UpdateTarifa,
      },
      {
        path: "login",
        Component: Login,
      },
    ],
  },
]);

const root = createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
);
