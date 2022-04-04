import "./App.css";
import { useData } from "./context/data-context";
import { Landing, Home } from "./pages";

function App() {
  const { dataState } = useData();
  return (
    <div className="App">
      {dataState.userName.length > 0 ? <Home /> : <Landing />}
    </div>
  );
}

export default App;
