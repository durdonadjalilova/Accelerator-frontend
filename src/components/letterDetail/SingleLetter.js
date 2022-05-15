import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiURL } from "../../utils/apiURL";
import "./singleLetter.scss";

const API = apiURL();

function SingleLetter() {
  let params = useParams();
  let letterId = params.id;

  const [letterDetails, setLetterDetails] = useState({});

  useEffect(() => {
    // let url = `https://learn-arabic-alphabet-backend.herokuapp.com/arab/${letterId}`;
    fetch(`http://localhost:9000/arab/${letterId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setLetterDetails(data);

        // var stringified = JSON.stringify(data);
        // var parsedObj = JSON.parse(stringified);
        // console.log(parsedObj);
      });
  }, []);

  const {
    letter,
    transliteration,
    asinenglishword,
    writtenasfinalform,
    writtenasmedialform,
    writtenasinitialform,
  } = letterDetails;

  return (
    <div className="singleLetter">
      <h1>Arabic Letter Details</h1>
      <div className="singleLetter__letter">{letter}</div>
      <div className="singleLetter__transliteration">
        Transliteration: {transliteration}
      </div>
      <div className="singleLetter__asInEnglishWord">
        As in English word: {asinenglishword}
      </div>
      <div className="singleLetter__writtenForms">
        <div className="singleLetter__writtenAsInitialForm">
          Written form in the beginning of the word:
          <span>{writtenasinitialform}</span>
        </div>

        <div
          // className="writtenAsMedialForm"
          className={
            writtenasmedialform === "cannot  attach a letter after it."
              ? "singleLetter__writtenAsMedialFormNA"
              : "singleLetter__writtenAsMedialForm"
          }
        >
          Written form in the middle of the word:
          <span>{writtenasmedialform}</span>
        </div>
        <div
          className={
            writtenasfinalform === "cannot  attach a letter after it."
              ? "singleLetter__writtenAsFinalFormNA"
              : "singleLetter__writtenAsFinalForm"
          }
        >
          Written form at the end of the word:
          <span>{writtenasfinalform}</span>
        </div>
      </div>
    </div>
  );
}

export default SingleLetter;
