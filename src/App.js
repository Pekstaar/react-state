import "./App.css";
import React, { useState } from "react";
// import count from "./hooks/stateHooks";

function App() {
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [answer, setAnswer] = useState();

  return (
    <div className="App">
      <header className="App-header">
        <h2>Data Form</h2>

        <div className="form">
          <input
            type="number"
            name="first-Number"
            value={n1}
            onChange={(e) => setN1(e.target.value)}
            onFocus={() => setN1("")}
            placeholder="First-number"
          />
          <input
            type="number"
            name="Second-number"
            value={n2}
            onChange={(e) => setN2(e.target.value)}
            onFocus={() => setN2("")}
            placeholder="Second-number"
          />

          <h2 className="output">{answer}</h2>

          <div className="submit">
            <button onClick={() => setAnswer(parseInt(n1) + parseInt(n2))}>
              Add
            </button>
            {/* <button onClick={() => setCount(count - 1)}>Subtract</button> */}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
