import { render, screen } from "@testing-library/react";
import App from "./App.js";
import { store } from "../../redux/store.js";
import { Provider } from "react-redux";

describe("App", () => {
  it("should be rendered without errors", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const appComponent = screen.getByTestId("App");
    expect(appComponent).toBeInTheDocument();
  });

  it("should render the Board component", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const boardComponent = screen.getByTestId("Canvas");
    expect(boardComponent).toBeInTheDocument();
  });

  it("should be rendered the Header component", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const headerComponent = screen.getByTestId("Header");
    expect(headerComponent).toBeInTheDocument();
  });
});
