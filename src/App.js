import "./App.css";
import Appcover from "./components/covers/Appcover";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App bg-light">
      <Appcover>
        <Home />
      </Appcover>
    </div>
  );
}

export default App;
