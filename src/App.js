import React from "react";

function App() {
  return (
    <div className="App">
      <div className="calc-container">
        <div id="screen">
          <div id="nav-btn">
            <span style={{ background: "red" }}></span>
            <span style={{ background: "#ffc107" }}></span>
            <span style={{ background: "green" }}></span>
          </div>
          <span>432</span>
        </div>
        <div className="buttons-container">
          <button className="func-btn">C</button>
          <button className="func-btn">+/-</button>
          <button className="func-btn">%</button>
          <button className="func-btn back-ora">/</button>
          <button className="func-btn">7</button>
          <button className="func-btn">8</button>
          <button className="func-btn">9</button>
          <button className="func-btn back-ora">*</button>
          <button className="func-btn">4</button>
          <button className="func-btn">5</button>
          <button className="func-btn">6</button>
          <button className="func-btn back-ora">-</button>
          <button className="func-btn">1</button>
          <button className="func-btn">2</button>
          <button className="func-btn">3</button>
          <button className="func-btn back-ora">+</button>
          <button className="func-btn zero-btn">0</button>
          <button className="func-btn">.</button>
          <button className="func-btn back-ora">=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
