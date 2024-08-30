import "./App.scss";
import Header from "./components/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

import React from "react";
// import axios from "axios";
function App() {
  // const delay = (ms) => new Promise((r) => setTimeout(() => r(), ms));
  // await delay(400);

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <button
          className="button"
          onClick={() => {
            alert("bwerergwr");
          }}
        >
          postPizza
        </button>
        <div className="content">
          <Home></Home>
        </div>
      </div>
    </div>
  );
}

export default App;
