import { useState } from "react";
import "./App.css";

function App() {
  const [buttonColor, setButtonColor] = useState("rot");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const nextColor = buttonColor === "rot" ? "blau" : "rot";
  const nextDisabledState = isButtonDisabled === false ? true : false;
  const classeFarbenName = isButtonDisabled ? "grau" : buttonColor;
  
  function farbeWechseln() {
    setButtonColor(nextColor);
  }
  
  function handleCheckboxChange() {
  
    setIsButtonDisabled(nextDisabledState);
  }

  return (
    <div className="App">
      <button
        disabled={isButtonDisabled}
        className={classeFarbenName}
        onClick={farbeWechseln}
      >
        Farbe zu {nextColor} wechseln
      </button>
      <br></br>
      <input
        id="checkbox"
        onChange={handleCheckboxChange}
        type="checkbox"
      ></input>
      <label htmlFor="checkbox">Disable Button</label>
      {/* <h1>Learn react</h1> */}
    </div>
  );
}

export default App;