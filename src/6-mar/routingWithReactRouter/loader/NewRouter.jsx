//loader and new way of creating routes in react router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Products, { productsLoader } from "./Products";

const router = createBrowserRouter([
  {
    path: "/products",
    element: <Products />,
    loader: productsLoader,
  },
]);

function NewRouter() {
  return <RouterProvider router={router} />;
}

export default NewRouter;
