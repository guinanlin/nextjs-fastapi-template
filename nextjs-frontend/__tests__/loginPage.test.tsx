import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

import Page from "@/app/login/page";
import { login } from "@/components/actions/login-action";

jest.mock("../components/actions/login-action", () => ({
  login: jest.fn(),
}));

describe("Login Page", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders the form with username and password input and submit button", () => {
    render(<Page />);

    expect(screen.getByLabelText(/用户名/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/密码/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /登录/i })).toBeInTheDocument();
  });

  it("calls login in successful form submission", async () => {
    (login as jest.Mock).mockResolvedValue({});

    render(<Page />);

    const usernameInput = screen.getByLabelText(/用户名/i);
    const passwordInput = screen.getByLabelText(/密码/i);
    const submitButton = screen.getByRole("button", { name: /登录/i });

    fireEvent.change(usernameInput, {
      target: { value: "testuser@example.com" },
    });
    fireEvent.change(passwordInput, { target: { value: "#123176a@" } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      const formData = new FormData();
      formData.set("username", "testuser@example.com");
      formData.set("password", "#123176a@");
      expect(login).toHaveBeenCalledWith(undefined, formData);
    });
  });

  it("displays error message if login fails", async () => {
    // Mock a failed login
    (login as jest.Mock).mockResolvedValue({
      server_validation_error: "LOGIN_BAD_CREDENTIALS",
    });

    render(<Page />);

    const usernameInput = screen.getByLabelText(/用户名/i);
    const passwordInput = screen.getByLabelText(/密码/i);
    const submitButton = screen.getByRole("button", { name: /登录/i });

    fireEvent.change(usernameInput, { target: { value: "wrong@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "wrongpass" } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText("LOGIN_BAD_CREDENTIALS")).toBeInTheDocument();
    });
  });

  it("displays server error for unexpected errors", async () => {
    (login as jest.Mock).mockResolvedValue({
      server_error: "发生了一个意外错误。请稍后再试。",
    });

    render(<Page />);

    const usernameInput = screen.getByLabelText(/用户名/i);
    const passwordInput = screen.getByLabelText(/密码/i);
    const submitButton = screen.getByRole("button", { name: /登录/i });

    fireEvent.change(usernameInput, { target: { value: "test@test.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(
        screen.getByText("发生了一个意外错误。请稍后再试。"),
      ).toBeInTheDocument();
    });
  });
});
