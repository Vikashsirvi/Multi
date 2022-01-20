import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting Component", () => {
  test("renders Hello world as a text", () => {
    //Arrange
    render(<Greeting />);

    //Act
    // ... nothing

    //Assert
    const helloWolrdElement = screen.getByText("Hello World", { exact: false });
    expect(helloWolrdElement).toBeInTheDocument();
  });
  test("renders good to see you if the button was NOT clicked", () => {
    render(<Greeting />);
    const outputElement = screen.getByText("good to see you", { exact: false });
    expect(outputElement).toBeInTheDocument();
  });

  test("renders changed if the button was clicked", () => {
    //Arrange
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //assert
    const outbuttonElement = screen.getByText("Changed");
    expect(outbuttonElement).toBeInTheDocument();
  });
  test("does not render good to see you", () => {
    //Arrange
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //assert
    const outbuttonElement = screen.queryByText("good to see you", {
      exact: false,
    });
    expect(outbuttonElement).toBeNull();
  });
});
