import React from "react";
import { Link } from "react-router-dom";
import "./letterCard.scss";

const LetterCard = ({ singleLetter }) => {
  const { letter, transliteration } = singleLetter;
  return (
    <div className="letterCard" data-testid="letterCard">
      <Link to={`/letter/${singleLetter?.id}`}>
        <div className="letterCard__letter"> {letter}</div>
        <div className="letterCard__transliteration"> {transliteration}</div>
      </Link>
    </div>
  );
};

export default LetterCard;
