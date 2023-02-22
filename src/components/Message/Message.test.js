import { render, screen } from "@testing-library/react";
import Message from "./Message.js";
import { store } from "../../redux/store.js";
import { Provider } from "react-redux";

describe("Message", () => {
  it("should be rendered without errors", () => {
    render(
      <Provider store={store}>
        <Message />
      </Provider>
    );
    const messageComponent = screen.getByTestId("Message");
    expect(messageComponent).toBeInTheDocument();
  });

  it("should render Message component with text 'GAME WON'", () => {
    render(
      <Provider store={store}>
        <Message result="won" />
      </Provider>
    );

    const instructionsWithText = screen.getByText(/GAME WON/);
    expect(instructionsWithText).toBeInTheDocument();
  });

  it("should render Message component with text 'GAME LOST'", () => {
    render(
      <Provider store={store}>
        <Message result="lost" />
      </Provider>
    );

    const instructionsWithText = screen.getByText(/GAME LOST/);
    expect(instructionsWithText).toBeInTheDocument();
  });
});
