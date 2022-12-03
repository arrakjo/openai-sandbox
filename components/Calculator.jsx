import React from "react";

const Calculator = () => {
  const [displayValue, setDisplayValue] = React.useState("0");
  const [operator, setOperator] = React.useState(null);
  const [firstOperand, setFirstOperand] = React.useState(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] =
    React.useState(false);

  const inputDigit = (digit) => {
    if (waitingForSecondOperand) {
      setDisplayValue(String(digit));
      setWaitingForSecondOperand(false);
    } else {
      setDisplayValue(
        displayValue === "0" ? String(digit) : displayValue + digit
      );
    }
  };

  const inputDecimal = (dot) => {
    if (waitingForSecondOperand) return;

    // If the `displayValue` does not contain a decimal point
    if (!/\./.test(displayValue)) {
      // Append the decimal point
      setDisplayValue(displayValue + dot);
      setWaitingForSecondOperand(false);
    }
  };

  const clearDisplay = () => {
    setDisplayValue("0");
  };

  const toggleSign = () => {
    setDisplayValue(
      displayValue.charAt(0) === "-"
        ? displayValue.substr(1)
        : "-" + displayValue
    );
  };

  const inputPercent = () => {
    const value = parseFloat(displayValue);
    setDisplayValue(String(value / 100));
  };

  const performOperation = (nextOperator) => {
    const inputValue = parseFloat(displayValue);

    if (operator && waitingForSecondOperand) {
      setOperator(nextOperator);
      setWaitingForSecondOperand(false);
      return;
    }

    if (firstOperand == null) {
      setFirstOperand(inputValue);
    } else if (operator) {
      const currentValue = firstOperand || 0;
      const result = calculate(currentValue, inputValue, operator);

      setDisplayValue(String(result));
      setFirstOperand(result);
    }

    setWaitingForSecondOperand(true);
    setOperator(nextOperator);
  };

  const calculate = (firstOperand, secondOperand, operator) => {
    if (operator === "+") {
      return firstOperand + secondOperand;
    } else if (operator === "-") {
      return firstOperand - secondOperand;
    } else if (operator === "*") {
      return firstOperand * secondOperand;
    } else if (operator === "/") {
      return firstOperand / secondOperand;
    }

    return secondOperand;
  };

  return (
    <main className="content">
      <div className="calculator">
        <div className="display">{displayValue}</div>
        <button className="digit" onClick={() => inputDigit(0)}>
          0
        </button>
        <button className="digit" onClick={() => inputDigit(1)}>
          1
        </button>
        <button className="digit" onClick={() => inputDigit(2)}>
          2
        </button>
        <button className="digit" onClick={() => inputDigit(3)}>
          3
        </button>
        <button className="digit" onClick={() => inputDigit(4)}>
          4
        </button>
        <button className="digit" onClick={() => inputDigit(5)}>
          5
        </button>
        <button className="digit" onClick={() => inputDigit(6)}>
          6
        </button>
        <button className="digit" onClick={() => inputDigit(7)}>
          7
        </button>
        <button className="digit" onClick={() => inputDigit(8)}>
          8
        </button>
        <button className="digit" onClick={() => inputDigit(9)}>
          9
        </button>
        <button className="decimal" onClick={() => inputDecimal(".")}>
          .
        </button>
        <button className="operator" onClick={() => performOperation("+")}>
          +
        </button>
        <button className="operator" onClick={() => performOperation("-")}>
          -
        </button>
        <button className="operator" onClick={() => performOperation("*")}>
          *
        </button>
        <button className="operator" onClick={() => performOperation("/")}>
          /
        </button>
        <button className="equals" onClick={() => performOperation("=")}>
          =
        </button>
      </div>
    </main>
  );
};

export default Calculator;
