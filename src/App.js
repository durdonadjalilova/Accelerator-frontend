import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArabicLetters from "./components/arabicLetters/ArabicLetters";
import SingleLetter from "./components/letterDetail/SingleLetter";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ArabicLetters />} />
          <Route path="/letter/:id" element={<SingleLetter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
