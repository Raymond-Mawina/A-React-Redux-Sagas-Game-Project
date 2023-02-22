import { fireEvent, render, screen } from "@testing-library/react";
import { CanvasContainer } from "./Canvas.js";
import { store } from "../../redux/store.js";
import { Provider } from "react-redux";

describe("Canvas", () => {
  it("should be rendered without errors", () => {
    render(
      <Provider store={store}>
        <CanvasContainer />
      </Provider>
    );
    const canvasComponent = screen.getByTestId("Canvas");
    expect(canvasComponent).toBeInTheDocument();
  });

  it("should render the Instructions component", () => {
    render(
      <Provider store={store}>
        <CanvasContainer />
      </Provider>
    );
    const instructionsComponent = screen.getByTestId("Instructions");
    expect(instructionsComponent).toBeInTheDocument();
  });

  it("should increment number of collected gold bards when the character is moved to the position of a gold bar", () => {
    render(
      <Provider store={store}>
        <CanvasContainer />
      </Provider>
    );
    const canvasComponent = screen.getByTestId("Canvas");
    const goldBarsBefore = screen.getByText("0/5 Gold Bars Collected");

    expect(goldBarsBefore).toBeInTheDocument();
    fireEvent.keyPress(canvasComponent, { key: "a" });
    setTimeout(() => {
      const goldBarsAfter = screen.getByText("1/5 Gold Bars Collected");
      expect(goldBarsAfter).toBeInTheDocument();
    }, 5000);
  });
});
