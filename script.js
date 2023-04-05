const screen = document.querySelector(".screen");

const updateScreen = (angka) => {
  screen.value = angka;
};
 
let prevNumber = "";
let calculationOperator = "";
let currentNumber = "0";

const inputNumber = (angka) => {
  if (currentNumber === "0") {
    currentNumber = angka;
  } else {
    currentNumber += angka;
  }
};

const numbers = document.querySelectorAll(".number");

numbers.forEach((angka) => {
  angka.addEventListener("click", (event) => {
    inputNumber(event.target.value);
    updateScreen(currentNumber);
  });
});

const operand = document.querySelectorAll(".operand");

operand.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    inputOperator(event.target.value);
  });
});

const inputOperator = (operator) => {
  if (calculationOperator === "") {
    prevNumber = currentNumber;
  }
  calculationOperator = operator;
  currentNumber = "0";
};

const equalSign = document.querySelector(".sama-dengan");

equalSign.addEventListener("click", () => {
  calculate();
  updateScreen(currentNumber);
});

const calculate = () => {
  let result = "";
  switch (calculationOperator) {
    case "+":
      result = parseFloat(prevNumber) + parseFloat(currentNumber);
      break;
    case "-":
      result = parseFloat(prevNumber) - parseFloat(currentNumber);
      break;
    case "*":
      result = parseFloat(prevNumber) * parseFloat(currentNumber);
      break;
    case "/":
      result = parseFloat(prevNumber) / parseFloat(currentNumber);
      break;
    case "%":
      result = parseFloat(prevNumber) % parseFloat(currentNumber);
      break;
    default:
      return;
  }
  currentNumber = result;
  calculationOperator = "";
};

const ac = document.querySelector(".ac");
ac.addEventListener("click", () => {
  prevNumber = "";
  calculationOperator = "";
  currentNumber = "";
  updateScreen(currentNumber);
});

const decimal = document.querySelector(".titik");

inputDecimal = (dot) => {
  if (currentNumber.includes(".")) {
    return;
  }
  currentNumber += dot;
};

decimal.addEventListener("click", (event) => {
  inputDecimal(event.target.value);
  updateScreen(currentNumber);
});
