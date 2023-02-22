import { fireEvent, render, screen } from "@testing-library/react";
import ButtonComponent from "./Button.js";
import { store } from "../../redux/store.js";
import { Provider } from "react-redux";

describe("Button", () => {
  it("should be rendered without errors", () => {
    render(
      <Provider store={store}>
        <ButtonComponent />
      </Provider>
    );
    const buttonComponent = screen.getByTestId("Button");
    expect(buttonComponent).toBeInTheDocument();
  });

  it("should call the reload function, when the clicked", () => {
    delete window.location;
    window.location = {
      ...window.location,
      reload: jest.fn(),
    };

    jest.spyOn(window.location, "reload");

    render(
      <Provider store={store}>
        <ButtonComponent />
      </Provider>
    );

    const buttonComponent = screen.getByTestId("Button");
    fireEvent.click(buttonComponent);
    expect(window.location.reload).toHaveBeenCalledTimes(1);
  });
});
