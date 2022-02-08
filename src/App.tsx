import React from "react";
import "./App.css";
import { BorderedBox } from "./BorderedBox";

function App() {
  return (
    <div className="App">
      <div className="BoxGrid">
        <BorderedBox gridArea="screen" title="screen" />
        <BorderedBox gridArea="cam" title="cam" />
        <BorderedBox gridArea="sidebar" title="sidebar" />
      </div>
    </div>
  );
}

export default App;
