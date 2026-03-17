import { useState } from "react";

function UserForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>User Form</h2>

      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        placeholder="Enter name"
        value={formData.name}
        onChange={handleChange}
      />

      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        placeholder="Enter email"
        value={formData.email}
        onChange={handleChange}
      />

      <label htmlFor="age">Age</label>
      <input
        id="age"
        name="age"
        placeholder="Enter age"
        value={formData.age}
        onChange={handleChange}
      />

      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        placeholder="Enter password"
        value={formData.password}
        onChange={handleChange}
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default UserForm;
