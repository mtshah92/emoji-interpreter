import React, { useState } from "react";
import "./styles.css";

var emojiList = {
  "ð": "Grinning Face",
  "ð": "Winking Face",
  "ð": "Smiling Face with Heart-Eyes",
  "ð": "Face Savoring Food",
  "ðĪ­":"Face with Hand Over Mouth",
  "ðī":"Sleeping Face",
  "ðĨģ":"Partying Face",
  "ðĪ":"Smiling Face with Open Hands",
  "ðĪŠ":"Zany Face",
  "ðĪĐ":"Star-Struck"

};

var newEmojiList = Object.keys(emojiList);

export default function App() {
  var [inputEmoji, setInputEmoji] = useState("");
  var [meaning, setMeaning] = useState("");

  function emojiHandler(event) {
    inputEmoji = event.target.value;
    setInputEmoji(inputEmoji);

    
    meaning = emojiList[inputEmoji];
    if(meaning===undefined) {
      meaning="We don't have it in under data base.";

    }

    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiList[emoji];
    setMeaning(meaning);
    console.log(emoji);
  }

  return (
    <div className="App">
      <h1>Emoji Interpreter </h1>
      <input onChange={emojiHandler} />
      <h2> {meaning}</h2>

      <hr />

      <h3>emojis we know</h3>
      {newEmojiList.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{
              fontSize: "x-large",
              padding: "0.5rem",
              cursor: "pointer"
            }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
