import React, { useState, useEffect } from "react";
import LetterCard from "../letterCard/LetterCard";

const ArabLetters = () => {
  const [letters, setLetters] = useState([]);

  useEffect(() => {
    // let url = "https://acceleratorprojectdd.herokuapp.com/students";
    let url = "http://localhost:9000/arab";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.letter);
        setLetters(data);
      });
  }, []);

  return (
    <div className="studentList">
      {letters.map((letter, index) => {
        return <LetterCard letter={letter} key={index} />;
      })}
    </div>
  );
};

export default ArabLetters;
