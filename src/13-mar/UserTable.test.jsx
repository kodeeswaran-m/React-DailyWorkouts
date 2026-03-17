import { render, screen } from "@testing-library/react";
import UserTable from "./UserTable";

describe("UserTable Component", () => {

  test("renders table headers", () => {
    render(<UserTable />);

    // expect(screen.getByText("ID")).toBeInTheDocument();
    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Email")).toBeInTheDocument();
    expect(screen.getByText("Age")).toBeInTheDocument();
  });

  test("renders user data rows", () => {
    render(<UserTable />);

    expect(screen.getByText("John")).toBeInTheDocument();
    expect(screen.getByText("Alice")).toBeInTheDocument();
    expect(screen.getByText("Bob")).toBeInTheDocument();
  });

  test("renders correct number of rows", () => {
    render(<UserTable />);

    const rows = screen.getAllByRole("row");

    // 1 header row + 3 data rows
    expect(rows).toHaveLength(4);
  });

});