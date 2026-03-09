import { useState, useEffect } from "react";

const Home = () => {
  return (
    <div>Home</div>
  )
}
const About = () => {
  return (
    <div>About</div>
  )
}
const Contact = () => {
  return (
    <div>Contact</div>
  )
}

function Routing() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setPath(window.location.pathname);
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  function navigate(url) {
    window.history.pushState({}, "", url);
    setPath(url);
  }

  return (
    <div>
      <nav>
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/about")}>About</button>
        <button onClick={() => navigate("/contact")}>Contact</button>
      </nav>

      {path === "/" && <Home />}
      {path === "/about" && <About />}
      {path === "/contact" && <Contact />}
    </div>
  );
}

export default Routing;