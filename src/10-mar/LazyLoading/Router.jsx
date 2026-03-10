import { createBrowserRouter } from "react-router-dom";
import LazyLoading from "./LazyLoading";

export const router = createBrowserRouter([
  {
    element: <LazyLoading />,
    children: [
      {
        path: "/",
        lazy: () => import("./Home")
      },
      {
        path: "/dashboard",
        lazy: () => import("./Dashboard")
      }
      ,
      {
        path: "/settings",
        lazy: () => import("./Settings")
      }
    ]
  }
]);