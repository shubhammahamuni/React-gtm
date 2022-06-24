import React from "react";
import "./App.css";

import About from "./Component/About";
import Feature from "./Component/Feature";
import { Link, Route, Routes } from "react-router-dom";

function App() {
  const d = new Date();
  // async function postData(url = "", data = {}) {
  //   const response = await fetch(url, {
  //     method: "POST",
  //     mode: "cors",
  //     credentials: "same-origin",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   });
  //   return response.json();
  // }

  return (
    <div className="App" style={{ color: "black" }}>
      <h1>The Home Page</h1>
      <ul>
        <li>
          <Link to={"/About"}>About</Link>
        </li>

        <li>
          <Link to={"/Feature"}>Feature</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/About" element={<About />} />
        <Route path="/Feature" element={<Feature />} />
      </Routes>
    </div>
  );
}

export default App;
