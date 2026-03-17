


import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import UserForm from "./UserForm";

describe("UserForm Component", () => {

  test("renders all form fields", () => {
    render(<UserForm onSubmit={jest.fn()} />);

    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/age/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();

    expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
  });

  test("allows user to type in form fields", async () => {
    render(<UserForm onSubmit={jest.fn()} />);

    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const ageInput = screen.getByLabelText(/age/i);
    const passwordInput = screen.getByLabelText(/password/i);

    await userEvent.type(nameInput, "John");
    await userEvent.type(emailInput, "john@test.com");
    await userEvent.type(ageInput, "25");
    await userEvent.type(passwordInput, "secret123");

    expect(nameInput).toHaveValue("John");
    expect(emailInput).toHaveValue("john@test.com");
    expect(ageInput).toHaveValue("25");
    expect(passwordInput).toHaveValue("secret123");
  });

  test("calls onSubmit with form data", async () => {
    const mockSubmit = jest.fn();

    render(<UserForm onSubmit={mockSubmit} />);

    await userEvent.type(screen.getByLabelText(/name/i), "John");
    await userEvent.type(screen.getByLabelText(/email/i), "john@test.com");
    await userEvent.type(screen.getByLabelText(/age/i), "25");
    await userEvent.type(screen.getByLabelText(/password/i), "secret123");

    await userEvent.click(
      screen.getByRole("button", { name: /submit/i })
    );

    expect(mockSubmit).toHaveBeenCalledWith({
      name: "John",
      email: "john@test.com",
      age: "25",
      password: "secret123"
    });
  });

});