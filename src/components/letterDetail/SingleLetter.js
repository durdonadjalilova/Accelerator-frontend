import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingleLetter() {
  let params = useParams;
  let letterId = params.id;

  const [letterDetails, setLetterDetails] = useState({});

  useEffect(() => {
    // let url = `https://learn-arabic-alphabet-backend.herokuapp.com/arab/${letterId}`;
    fetch(
      `https://learn-arabic-alphabet-backend.herokuapp.com/arab/${letterId}`
    )
      .then((response) => response.json())
      .then((data) => {
        debugger;
        console.log(data);
        setLetterDetails(data);

        // var stringified = JSON.stringify(data);
        // var parsedObj = JSON.parse(stringified);
        // console.log(parsedObj);
      });
  }, []);

  //   const {
  //     letter,
  //     transliteration,
  //     asInEnglishWord,
  //     writtenAsFinalForm,
  //     writtenAsMedialForm,
  //     writtenAsInitialForm,
  //   } = letterDetails;
  return (
    <div>
      <h1>Arabic Letter Details</h1>
      Letter: {letterDetails?.letter}
      {/* Transliteration: {transliteration}
      As in English word: {asInEnglishWord}
      Written form in the end of the word: {writtenAsFinalForm}
      Written form in the middle of the word: {writtenAsMedialForm}
      Written form in the beginning of the word: {writtenAsInitialForm} */}
    </div>
  );
}

export default SingleLetter;
