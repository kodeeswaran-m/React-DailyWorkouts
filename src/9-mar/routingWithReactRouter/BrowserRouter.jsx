import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppRoutes from "./Modal/AppRoutes";
const Home = () => {
  return <div>Home</div>;
};
const About = () => {
  return <div>About</div>;
};
const Contact = () => {
  return <div>Contact</div>;
};
const PageNotFound = () => {
  return <div>PageNotFound</div>;
};
const fakeLocation = {
  pathname: "/about",
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <PageNotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

const BrowserRouterComp = () => {
  return (
    // <BrowserRouter>
    //   <Routes location={fakeLocation}>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/about" element={<About />} />
    //     <Route path="/contact" element={<Home />} />
    //     <Route path="/*" element={<PageNotFound />} />
    //   </Routes>
    // </BrowserRouter>
    // new way of creating browser router
    <RouterProvider router={router} />
    //Modal Routing
    // <BrowserRouter>
    //   <AppRoutes />
    // </BrowserRouter>
  );
};

export default BrowserRouterComp;

import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <div>
      <h1>My App</h1>

      <nav>
        <Link to="/">Home</Link> | <Link to="about">About</Link> |{" "}
        <Link to="contact">Contact</Link>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}
