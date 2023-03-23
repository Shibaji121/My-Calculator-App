import React, { useRef, useState } from "react";

function App() {
  const [expression, setExpression] = useState("0");
  const [evaluated, setEvaluated] = useState(false);
  const ref = useRef(null);

  function handleKeydown(e) {
    if (e.code === "Backspace" && expression.length === 1) {
      setExpression("0");
      return;
    }
    if (e.code === "Backspace" && expression !== 0) {
      setExpression(expression.substring(0, expression.length - 1));
    }
  }

  function returnEvaluatedValue(exp) {
    try {
      // eslint-disable-next-line
      let evalutedValue = eval(exp);
      setEvaluated(true);
      return evalutedValue;
    } catch (error) {
      alert("Oops!! Can't Perform the operation. Please Enter data Correctly");
      setEvaluated(false);
      return expression;
    }
  }

  function handleClickingButton(value) {
    if (value === "=") {
      let evaluatedValue = returnEvaluatedValue(expression);
      setExpression(evaluatedValue.toString());
      ref.current.scrollLeft = 0;
      return;
    }
    if (value.match(/[0-9]/) && evaluated) {
      setExpression(value);
    } else {
      if (expression !== "0") {
        let val = expression;
        val += value;
        setExpression(val);
      } else {
        setExpression(value);
      }
    }
    setEvaluated(false);
    scrollToRight();
  }

  function scrollToRight() {
    setTimeout(function () {
      ref.current.scrollLeft = ref.current.scrollWidth;
    }, 100);
  }

  return (
    <div className="App">
      <div className="calc-container">
        <div id="screen">
          <div id="nav-btn">
            <span style={{ background: "red" }}></span>
            <span style={{ background: "#ffc107" }}></span>
            <span style={{ background: "green" }}></span>
          </div>
          <div id="equal-sign">{evaluated ? "=" : ""}</div>
          <span id="exp-val" ref={ref}>
            {expression}
          </span>
        </div>
        <div className="buttons-container" onKeyDown={(e) => handleKeydown(e)}>
          <button
            className="func-btn"
            onClick={() => {
              setExpression("0");
              setEvaluated(false);
            }}
          >
            C
          </button>
          <button className="func-btn">+/-</button>
          <button
            className="func-btn"
            onClick={() => handleClickingButton("%")}
          >
            %
          </button>
          <button
            className="func-btn back-ora"
            onClick={() => handleClickingButton("/")}
          >
            /
          </button>
          <button
            className="func-btn"
            onClick={() => handleClickingButton("7")}
          >
            7
          </button>
          <button
            className="func-btn"
            onClick={() => handleClickingButton("8")}
          >
            8
          </button>
          <button
            className="func-btn"
            onClick={() => handleClickingButton("9")}
          >
            9
          </button>
          <button
            className="func-btn back-ora"
            onClick={() => handleClickingButton("*")}
          >
            *
          </button>
          <button
            className="func-btn"
            onClick={() => handleClickingButton("4")}
          >
            4
          </button>
          <button
            className="func-btn"
            onClick={() => handleClickingButton("5")}
          >
            5
          </button>
          <button
            className="func-btn"
            onClick={() => handleClickingButton("6")}
          >
            6
          </button>
          <button
            className="func-btn back-ora"
            onClick={() => handleClickingButton("-")}
          >
            -
          </button>
          <button
            className="func-btn"
            onClick={() => handleClickingButton("1")}
          >
            1
          </button>
          <button
            className="func-btn"
            onClick={() => handleClickingButton("2")}
          >
            2
          </button>
          <button
            className="func-btn"
            onClick={() => handleClickingButton("3")}
          >
            3
          </button>
          <button
            className="func-btn back-ora"
            onClick={() => handleClickingButton("+")}
          >
            +
          </button>
          <button
            className="func-btn zero-btn"
            onClick={() => handleClickingButton("0")}
          >
            0
          </button>
          <button
            className="func-btn"
            onClick={() => handleClickingButton(".")}
          >
            .
          </button>
          <button
            className="func-btn back-ora"
            onClick={() => handleClickingButton("=")}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
