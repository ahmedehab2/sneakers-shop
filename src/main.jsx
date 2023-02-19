import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import App from "./App";
import { ProductDetails, Products, Layout } from "./components";
import { detailsloader } from "./components/ProductDetails";
import { AppContext } from "./context/AppContext";
import "./index.css";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "product/:slug",
        element: <ProductDetails />,
        loader: detailsloader,
      },
      {
        path: "/products",
        element: <Products />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <AppContext>
    <RouterProvider router={router} />
  </AppContext>
);
