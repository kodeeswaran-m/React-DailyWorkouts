import React, { useState, Suspense } from "react";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
// import Home from "./Home";
// import Dashboard from "./Dashboard";
const Home = React.lazy(() => import("./Home"));
const Dashboard = React.lazy(() => import("./Dashboard"));
const Settings = React.lazy(() => import("./Settings"));
const Profile = React.lazy(() =>
  import("./Dashboard").then(module => ({
    default: module.Profile
  }))
);
function LazyLoading() {
  // without lazy loading
  //   const [page, setPage] = useState("home");
  //   return (
  //     <>
  //       <button onClick={() => setPage("home")}>Home</button>
  //       <button onClick={() => setPage("dashboard")}>Dashboard</button>
  //       {page === "home" && <Home />}
  //       {page === "dashboard" && <Dashboard />}
  //     </>
  //   );
  //with lazy loading
  //   const [page, setPage] = useState("home");
  //   return (
  //     <>
  //       <button onClick={() => setPage("home")}>Home</button>
  //       <button onClick={() => setPage("dashboard")}>Dashboard</button>
  //       <Suspense fallback={<p>loading..</p>}>
  //         {page === "home" && <Home />}
  //         {page === "dashboard" && <Dashboard />}
  //       </Suspense>
  //     </>
  //   );
  //lazy loading multiple components
  // return (
  //   <Suspense fallback={<h2>Loading...</h2>}>
  //     <Home />
  //     <Dashboard />
  //   </Suspense>
  // );
  // lazy loading with react router(old way)
  // return (
  //   <>
  //     <BrowserRouter>
  //       <nav>
  //         <Link to="/">Home</Link>
  //         <Link to="/dashboard">Dashboard</Link>
  //         <Link to="/settings">Settings</Link>
  //       </nav>
  //       <Suspense fallback={<h1>Loading...</h1>}>
  //         <Routes>
  //           <Route path="/" element={<Home />} />
  //           <Route path="/dashboard" element={<Dashboard />} />
  //           <Route path="/settings" element={<Settings />} />
  //         </Routes>
  //       </Suspense>
  //     </BrowserRouter>
  //   </>
  // );
  // lazy loading with react router(new way)
  // return (
  //   <>
  //     <nav>
  //       <Link to="/">Home</Link>
  //       <Link to="/dashboard">Dashboard</Link>
  //       <Link to="/settings">Settings</Link>
  //     </nav>
  //     <Outlet />
  //   </>
  // );
//lazy loading the named exports
   return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <Profile />
    </Suspense>
  );
  
}

export default LazyLoading;
