import React from "react";
import Header from "./components/header/Header";
import "./app.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div id="login-form"></div>
      <div id="my-account"></div>
    </div>
  );
}

export default App;
