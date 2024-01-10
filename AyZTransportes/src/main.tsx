import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";

import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",

    async lazy() {
      let { Layout: importedLayout } = await import(
        "./components/Layout/Layout.tsx"
      );
      return { Component: importedLayout };
    },

    children: [
      {
        index: true,

        async lazy() {
          let { Home: importedLayout } = await import("./pages/Home/Home.tsx");
          return { Component: importedLayout };
        },
      },
      {
        path: "tarifa",
        async lazy() {
          let { Tarifa: importedLayout } = await import(
            "./pages/Tarifa/Tarifa.tsx"
          );
          return { Component: importedLayout };
        },
      },
      {
        path: "faqs",

        async lazy() {
          let { FAQs: importedLayout } = await import("./pages/FAQs/FAQs.tsx");
          return { Component: importedLayout };
        },
      },
      {
        path: "updateTarifa",

        async lazy() {
          let { UpdateTarifa: importedLayout } = await import(
            "./pages/UpdateTarifa/UpdateTarifa.tsx"
          );
          return { Component: importedLayout };
        },
      },
    ],
  },
]);
const root = createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
