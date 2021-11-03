import React, { useState } from "react";

import "./App.css";
import DemoOutput from "./components/demo/DemoOutput";
import Button from "./components/UI/Button/Button";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const onClickHandler = () => {
    setShowParagraph(!showParagraph);
  };
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={onClickHandler}>Click here!</Button>
    </div>
  );
}

export default App;
