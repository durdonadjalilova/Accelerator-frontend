import React, { useState, useEffect } from "react";
import LetterCard from "../letterCard/LetterCard";
import "./ArabicLetters.scss";

const ArabLetters = () => {
  const [letters, setLetters] = useState([]);

  useEffect(() => {
    let url = "http://localhost:9000/arab";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setLetters(data);
      });
  }, []);

  return (
    <div className="arabicLetters">
      <h1>Arabic Alphabet</h1>
      <div className="letterList">
        {letters.map((letter, index) => {
          return <LetterCard singleLetter={letter} key={index} />;
        })}
      </div>
    </div>
  );
};

export default ArabLetters;
