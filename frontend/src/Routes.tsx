import React from "react";
import Layout from "./layouts/Layout";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const TescRoutes: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "", element: <HomePage /> },
        { path: "*", element: <NotFoundPage /> },
      ],
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
};

export default TescRoutes;
