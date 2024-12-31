import {fireEvent, render, screen} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import useLogin from "@/screens/auth/login/useLogin";
import {Login} from "@/screens/auth/login/Login.tsx";
import React from "react";

jest.mock("@/screens/auth/login/useLogin");
jest.mock("@/components/customComponents/FormField", () => ({
    CustomFormField: ({name}: { name: string }) => <input data-testid={name}/>,
}));
jest.mock("@/components/customComponents/ErrorMessage", () => ({
    ErrorMessage: ({error}: { error: string }) => (error ? <div>{error}</div> : null),
}));

describe("Login Component", () => {
    const mockOnSubmit = jest.fn();
    const mockHandleSubmit = jest.fn((cb) => (e: React.FormEvent) => cb(e));

    beforeEach(() => {
        jest.resetAllMocks();
        (useLogin as jest.Mock).mockReturnValue({
            form: {
                handleSubmit: mockHandleSubmit,
            },
            onSubmit: mockOnSubmit,
            isLoading: false,
            error: undefined,
        });
    });

    it("renders the Login form with all fields and buttons", () => {
        render(
            <MemoryRouter>
                <Login/>
            </MemoryRouter>
        );


        expect(screen.getByText(/Login/i)).toBeInTheDocument();
        expect(screen.getByTestId("email")).toBeInTheDocument();
        expect(screen.getByTestId("password")).toBeInTheDocument();
        expect(screen.getByText(/Forgot Password\?/i)).toBeInTheDocument();
        expect(screen.getByText(/Log in/i)).toBeInTheDocument();
        expect(screen.getByText(/Don’t have an account\?/i)).toBeInTheDocument();
        expect(screen.getByText(/Sign Up/i)).toBeInTheDocument();
    });

    it("shows the error message when there is an error", () => {
        (useLogin as jest.Mock).mockReturnValueOnce({
            form: {
                handleSubmit: mockHandleSubmit,
            },
            onSubmit: mockOnSubmit,
            isLoading: false,
            error: "Invalid login credentials",
        });

        render(
            <MemoryRouter>
                <Login/>
            </MemoryRouter>
        );

        expect(screen.getByText(/Invalid login credentials/i)).toBeInTheDocument();
    });

    it("disables the login button when loading", () => {
        (useLogin as jest.Mock).mockReturnValueOnce({
            form: {
                handleSubmit: mockHandleSubmit,
            },
            onSubmit: mockOnSubmit,
            isLoading: true,
            error: undefined,
        });

        render(
            <MemoryRouter>
                <Login/>
            </MemoryRouter>
        );

        const button = screen.getByText(/Loading.../i);
        expect(button).toBeDisabled();
    });

    it("calls onSubmit when the form is submitted", () => {
        render(
            <MemoryRouter>
                <Login/>
            </MemoryRouter>
        );

        const elEmail = screen.getByTestId("email");
        const elPassword = screen.getByTestId('password');
        elEmail.textContent = 'abcd@abcd.com';
        elPassword.textContent = 'abcdefg';
        fireEvent.submit(screen.getByRole("form"));
        expect(mockHandleSubmit).toHaveBeenCalled();
    });
});
