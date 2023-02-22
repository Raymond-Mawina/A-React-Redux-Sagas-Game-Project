import { render, screen } from "@testing-library/react";
import Instructions from "./Instructions.js";
import { store } from "../../redux/store.js";
import { Provider } from "react-redux";
import { instructions } from "./utilities.js";

describe("Instructions", () => {
  it("should be rendered without errors", () => {
    render(
      <Provider store={store}>
        <Instructions />
      </Provider>
    );
    const instructionsComponent = screen.getByTestId("Instructions");
    expect(instructionsComponent).toBeInTheDocument();
  });

  it("should render Header with different Instructions as text", () => {
    render(
      <Provider store={store}>
        <Instructions />
      </Provider>
    );

    instructions.forEach((instruction) => {
      const instructionsWithText = screen.getByText(instruction);
      expect(instructionsWithText).toBeInTheDocument();
    });
  });
});
