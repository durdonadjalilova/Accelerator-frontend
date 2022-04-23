import React from "react";
import { Link } from "react-router-dom";

const LetterCard = ({ letter }) => {
  return (
    <div className="letterCard" data-testid="letterCard">
      <Link to={`/letter/${letter?.id}`}>
        {/* <div className="twoColumns"> */}
        Letter: {letter.letter}
        Transliteration: {letter.transliteration}
      </Link>
    </div>
  );
};

export default LetterCard;
