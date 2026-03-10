import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { UserProvider } from "./4-mar/context/context.jsx";
import { router } from "./10-mar/LazyLoading/Router.jsx";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <UserProvider>
    {/* <RouterProvider router={router}>
      <App />
    </RouterProvider> */}
    <App/>
  </UserProvider>,
  // </StrictMode>,
);
