import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { DataProvider } from "./context/data-context";
import { TodoProvider } from "./context/todo-context";

ReactDOM.render(
  <React.StrictMode>
    <DataProvider>
      <TodoProvider>
        <App />
      </TodoProvider>
    </DataProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
