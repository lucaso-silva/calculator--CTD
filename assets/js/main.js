const previousOperationContent = document.querySelector(".previous-operation");
const currentOperationContent = document.querySelector(".current-operation");
const allButtons = document.querySelectorAll(".buttons-container button");

allButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const value = e.target.innerText;

    if (+value >= 0 || value === ".") {
      calc.addDigit(value);
    } else {
      calc.processOperation(value);
    }
  });
});

class Calculator {
  constructor(previousOperationContent, currentOperationContent) {
    this.previousOperationText = previousOperationContent;
    this.currentOperationText = currentOperationContent;

    this.currentOperation = "";
  }

  addDigit(digit) {
    this.currentOperation = digit;
    this.updateScreen();
  }

  processOperation(operation) {
    let operationValue;
    const previous = +this.previousOperationText.innerText.split(" ")[0];
    const current = +this.currentOperationText.innerText;

    switch (operation) {
      case "+":
        operationValue = previous + current;
        this.updateScreen(operationValue, operation, current, previous);
        break;
      case "-":
        operationValue = previous - current;
        this.updateScreen(operationValue, operation, current, previous);
        break;
      case "*":
        operationValue = previous * current;
        this.updateScreen(operationValue, operation, current, previous);
        break;
      case "/":
        operationValue = previous / current;
        this.updateScreen(operationValue, operation, current, previous);
        break;
      default:
        return;
    }
  }

  updateScreen(
    operationValue = null,
    operation = null,
    current = null,
    previous = null
  ) {
    console.log(operationValue, operation, current, previous);
    if (operationValue === null) {
      this.currentOperationText.innerText += this.currentOperation;
    } else {
    if(previous === 0) {
        operationValue = current
    }
    
      this.previousOperationText.innerText = `${operationValue} ${operation}`;
      this.currentOperationText.innerText = "";
    }
  }
}

const calc = new Calculator(previousOperationContent, currentOperationContent);
