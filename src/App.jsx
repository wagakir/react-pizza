import "./App.scss";
import Header from "./components/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import { Route, Routes } from "react-router";

import React from "react";
// import axios from "axios";
function App() {
  // const delay = (ms) => new Promise((r) => setTimeout(() => r(), ms));
  // await delay(400);

  return (
    <div className="wrapper">
      <Header />
      {/* <button
          className="button"
          onClick={() => {
            alert("bwerergwr");
          }}
        >
          postPizza
        </button> */}

      <Routes>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
