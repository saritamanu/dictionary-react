import React, { useState } from "react";
import axios from "axios";

export default function DictionarySearch() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data.meanings);
  }
  function searchTheWord(event) {
    event.preventDefault();
    const apiKey = "7a1ob024b4t960f923f458712f6094e1";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    alert(`You are searching for ${keyword}`);
    axios.get(apiUrl).then(handleResponse);
    console.log(apiUrl);
  }

  function theWord(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="DictionarySearch">
      <form onSubmit={searchTheWord}>
        <input onChange={theWord} type="search" placeholder="Type your word" />
      </form>
    </div>
  );
}
