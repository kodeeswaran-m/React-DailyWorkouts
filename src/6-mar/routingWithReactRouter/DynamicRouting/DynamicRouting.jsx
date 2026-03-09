import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./Users";
import { useParams } from "react-router-dom";

function UserDetails() {
  const { id } = useParams();
  return (
    <div>
      <h2>User Details</h2>
      <p>User ID: {id}</p>
    </div>
  );
}

function UsersHome() {
  return <h2>Select a user from the list</h2>;
}

function Settings() {
  return <h2>User Settings Page</h2>;
}

function DynamicRouting() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/users" element={<Users />}>
          <Route index element={<UsersHome />} />
          <Route path=":id" element={<UserDetails />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default DynamicRouting;
