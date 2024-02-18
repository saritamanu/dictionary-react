import React, { useState } from "react";

export default function DictionarySearch() {
  let [keyword, setKeyword] = useState("");

  function searchTheWord(event) {
    event.preventDefault();
    alert(`You are searching for ${keyword}`);
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
