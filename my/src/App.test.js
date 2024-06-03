import { render, screen, fireEvent,  } from "@testing-library/react";
import user from "@testing-library/user-event";
import App from "./App";

test("button click flow", async () => {
  render(<App />);

  const nameInput = screen.getByRole("textbox", { name: /name/i });
  const emailInput = screen.getByRole("textbox", { name: /email/i });
  const buttonElement = screen.getByRole("button", { name: /senden/i });

  expect(nameInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();

  await user.click(nameInput);
  await user.keyboard("Ralf");
  await user.click(emailInput);
  await user.keyboard("http://localhost:3000");

  await user.click(buttonElement);

  const nameCell = screen.getByRole("cell", { name: "Ralf" });
  const emailCell = screen.getByRole("cell", { name: "www.googlemail.de" });

  expect(nameCell).toBeInTheDocument();
  expect(emailCell).toBeInTheDocument();
});

test("checkbox click flow", () => {
  render(<App />);

  const buttonElement = screen.getByRole("button", { name: /blau/i });
  const checkBoxElement = screen.getByRole("checkbox", { name: /disable button/i });

  expect(buttonElement).toBeEnabled();
  expect(checkBoxElement).not.toBeChecked();

  fireEvent.click(checkBoxElement);
  expect(checkBoxElement).toBeChecked();
  expect(buttonElement).toBeDisabled();
  expect(buttonElement).toHaveClass("grau");

  fireEvent.click(checkBoxElement);
  expect(checkBoxElement).not.toBeChecked();
  expect(buttonElement).toBeEnabled();
  expect(buttonElement).toHaveClass("rot");
});

