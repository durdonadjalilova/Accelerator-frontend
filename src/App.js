import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArabLetters from "./components/arabLetters/ArabLetters";
import SingleLetter from "./components/letterDetail/SingleLetter";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ArabLetters />} />
          <Route path="/letter/:id" element={<SingleLetter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
