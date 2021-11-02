import React, { useState } from "react";

import "./App.css";
import Button from "./components/UI/Button/Button";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const onClickHandler = () => {
    setShowParagraph(!showParagraph);
  };
  return (
    <div className="app">
      <Button onClick={onClickHandler}>Click here!</Button>
      <h1>Hi there!</h1>
      {showParagraph && <p>This is new!</p>}
      <Button onClick={onClickHandler}>Click here!</Button>
    </div>
  );
}

export default App;
