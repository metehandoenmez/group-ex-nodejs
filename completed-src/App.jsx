import React, { useState, useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";

import "./App.css";

import NumberDisplay from "./NumberDisplay";
import WelcomeComponent from "./WelcomeComponent";
import CardComponent from "./CardComponent";
import NotFound from "./NotFound";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<WelcomeComponent></WelcomeComponent>}></Route>
        <Route path="/number" element={<NumberDisplay></NumberDisplay>}></Route>
        <Route
          path="/card"
          element={<CardComponent content={"Card"} index={0}></CardComponent>}
        ></Route>
        <Route
          path="/product/:id"
          element={<CardComponent content={"Card"} index={0}></CardComponent>}
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <br />
      <Link to={"/"}>Home</Link>
      <br />
      <Link to={"https://google.com"}>Number</Link>
      <button
        onClick={() => {
          window.location.href = "/number";
        }}
      >
        Hello
      </button>
      <br />
      <Link to={"/card"}>Card</Link>
    </div>
  );
}

export default App;
