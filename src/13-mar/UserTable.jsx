import React from "react";

const users = [
  { id: 1, name: "John", email: "john@test.com", age: 25 },
  { id: 2, name: "Alice", email: "alice@test.com", age: 30 },
  { id: 3, name: "Bob", email: "bob@test.com", age: 28 }
];

function UserTable() {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Age</th>
        </tr>
      </thead>

      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UserTable;       