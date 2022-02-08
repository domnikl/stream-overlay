import React from "react";
import "./App.css";
import { BorderedBox } from "./BorderedBox";

function App() {
  return (
    <div className="App">
      <div className="BoxGrid">
        <BorderedBox gridArea="screen" />
        <BorderedBox gridArea="cam" />
        <BorderedBox gridArea="sidebar" />
      </div>
    </div>
  );
}

export default App;
