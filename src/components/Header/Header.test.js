import { render, screen } from "@testing-library/react";
import Header from "./Header.js";
import { store } from "../../redux/store.js";
import { Provider } from "react-redux";

describe("Header", () => {
  it("should be rendered without errors", () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );
    const headerComponent = screen.getByTestId("Header");
    expect(headerComponent).toBeInTheDocument();
  });

  it("should render Header with text 'EscapeWithGold'", () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );
    const headerWithText = screen.getByText(/EscapeWithGold/);
    expect(headerWithText).toBeInTheDocument();
  });
});
