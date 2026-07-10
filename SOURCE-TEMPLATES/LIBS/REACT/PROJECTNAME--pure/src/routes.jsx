/* eslint-disable custom/sort-object-props */

import { lazy, Suspense } from "react";
import { createBrowserRouter, Navigate } from "react-router";

import RoutePreloader from "./layouts/components/RoutePreloader/RoutePreloader";
import MainLayout from "./layouts/MainLayout/MainLayout";
import NotFound from "./pages/NotFound/page";
// TODO Lazy Component
// const Name = lazy(() => import("./pages/public/Name/page"));
import Home from "./pages/public/Home/page";

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
      //   element: (
      //     <Suspense fallback={<RoutePreloader />}>
      //       <Name />
      //     </Suspense>
      //   ),
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
