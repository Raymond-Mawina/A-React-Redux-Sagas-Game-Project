import { CanvasContainer } from "../Canvas/Canvas.js";
import Header from "../Header/Header.js";
import "./App.css";

function App() {
  return (
    <div id="App" data-testid="App">
      <Header />
      <CanvasContainer />
    </div>
  );
}

export default App;
