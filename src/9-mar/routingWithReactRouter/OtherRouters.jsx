import {
  MemoryRouter,
  HashRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

export default function OtherRouters() {
  return (
    // <HashRouter>
    //   <nav>
    //     <Link to="/">Home</Link>
    //     <Link to="/about">About</Link>
    //   </nav>

    //   <Routes>
    //     <Route path="/" element={<h2>Home</h2>} />
    //     <Route path="/about" element={<h2>About</h2>} />
    //   </Routes>
    // </HashRouter>
    <MemoryRouter initialEntries={["/"]}>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<h2>Home</h2>} />
        <Route path="/about" element={<h2>About</h2>} />
      </Routes>
    </MemoryRouter>
  );
}
