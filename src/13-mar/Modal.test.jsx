import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Modal from "./Modal";

describe("Modal Component", () => {

  test("renders modal when isOpen is true", () => {
    render(
      <Modal isOpen={true} onClose={jest.fn()}>
        Modal Content
      </Modal>
    );

    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByText("Modal Content")).toBeInTheDocument();
  });

  test("does not render modal when isOpen is false", () => {
    render(
      <Modal isOpen={false} onClose={jest.fn()}>
        Modal Content
      </Modal>
    );

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  test("calls onClose when close button is clicked", async () => {
    const mockClose = jest.fn();

    render(
      <Modal isOpen={true} onClose={mockClose}>
        Modal Content
      </Modal>
    );

    const closeButton = screen.getByRole("button", { name: /close/i });

    await userEvent.click(closeButton);

    expect(mockClose).toHaveBeenCalledTimes(1);
  });

});