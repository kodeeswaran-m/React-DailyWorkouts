import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, fetchUsers, toggleTodo } from "./redux/actions";
const ReduxPractice = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.users);
  console.log(users)

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error: {error}</h2>;

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.firstName}</li>
      ))}
    </ul>
  );

  // return (
  //   <div>
  //     <TodoInput />
  //     <TodoList />
  //   </div>
  // );
};

export default ReduxPractice;

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  return (
    <ul>
      {todos?.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};
const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <span
        onClick={() => dispatch(toggleTodo(todo.id))}
        style={{
          cursor: "pointer",
          textDecoration: todo.completed ? "line-through" : "none",
        }}
      >
        {todo.text}
      </span>
      <button onClick={() => dispatch(deleteTodo(todo.id))}>delete</button>
    </li>
  );
};

const TodoInput = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(text));
    setText("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button type="submit">add</button>
    </form>
  );
};
