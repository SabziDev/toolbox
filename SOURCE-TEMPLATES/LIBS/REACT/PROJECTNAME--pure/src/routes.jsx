/* eslint-disable custom/sort-object-props */

// TODO Import lazy Component
// import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router";

import MainLayout from "./layouts/MainLayout/MainLayout";
import NotFound from "./pages/NotFound/page";
// TODO Lazy Component
// const Name = lazy(() => import("./pages/public/Name/page"));
import Home from "./pages/public/Home/page";

// const preventReloadPageOnSamePath = () => {
//   return {
//     shouldRevalidate: ({ currentUrl, nextUrl }) =>
//       currentUrl.pathname !== nextUrl.pathname,
//   };
// };

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,

    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "home",
        element: <Navigate to="/" replace />,
      },

      // TODO Routes
      // {
      //   path: "NAME",
      //   element: <Name />,
      // },

      {
        path: "*",
        element: <NotFound />,
        handle: {
          isPage404: true,
          isHideLayout: true,
        },
      },
    ],
  },
]);

export default router;
