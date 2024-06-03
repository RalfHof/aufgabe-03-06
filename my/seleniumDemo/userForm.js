import { render, screen, UserForm } from "@testing-library/react";
import UserForm from "./userfrom";

test("ob 2 inputfelder und ein button vorhanden ist", () => {
  render(<UserForm></UserForm>);
  const buttonElement = screen.getByRole("button");

  const inputElements = screen.getAllByRole("textbox");



  expect(buttonElement).toBeInTheDocument();


  expect(inputElements).toHaveLength(2);
});