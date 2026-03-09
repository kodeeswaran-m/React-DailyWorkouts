import { Link, useLocation } from "react-router-dom";

export default function Gallery() {
  const location = useLocation();

  return (
    <div>
      <h2>Gallery</h2>

      <Link
        to="/photo/1"
        state={{ backgroundLocation: location }}
      >
        Open Photo 1
      </Link>

      <br />

      <Link
        to="/photo/2"
        state={{ backgroundLocation: location }}
      >
        Open Photo 2
      </Link>
    </div>
  );
}