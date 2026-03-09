import withLoading from "./HOC";

function UserList({ users }) {
  return (
    <div>
      {users.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

const UserListWithLoading = withLoading(UserList);


export default function HOCExample() {
  const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Alice" }
  ];

  return (
    <UserListWithLoading
      isLoading={false}
      users={users}
    />
  );
}