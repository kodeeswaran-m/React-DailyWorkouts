import { Link, Outlet } from "react-router-dom";

export default function Users() {
  return (
    <div>
      <h1>Users Page</h1>

      <nav>
        <Link to="/users">Home</Link>
        <br />
        <Link to="/users/1">User 1</Link>
        <br />
        <Link to="/users/2">User 2</Link>
        <br />
        <Link to="/users/settings">Settings</Link>
      </nav>

      <hr />
      <Outlet />
    </div>
  );
}