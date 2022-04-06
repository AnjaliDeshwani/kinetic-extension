import { useEffect, useState } from "react";
import "./App.css";
import { useData } from "./context/data-context";
import { Landing, Home } from "./pages";

function App() {
  const { dataState } = useData();
  const { userName } = dataState;
  const [userPresent, setUserPresent] = useState(false);

  useEffect(() => {
    localStorage.getItem("name") ? setUserPresent(true) : setUserPresent(false);
  }, [userName]);

  return <div className="App">{userPresent ? <Home /> : <Landing />}</div>;
}

export default App;
