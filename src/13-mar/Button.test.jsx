import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

test("renders button text", () => {
  render(<Button label="Click Me" />);

  const button = screen.getByText("Click Me");

  expect(button).toBeInTheDocument();
});

test("calls click handler", async () => {
  const handleClick = jest.fn();

  render(<Button label="Click Me" onClick={handleClick} />);

  const button = screen.getByRole("button");

  await userEvent.click(button);

  expect(handleClick).toHaveBeenCalled();
});

