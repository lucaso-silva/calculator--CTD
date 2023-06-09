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
    if (this.currentOperationText.innerText === "" && operation !== "C") {
      if (this.previousOperationText.innerText !== "") {
        this.changeOperation(operation);
      }

      return;
    }

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
      case "=":
        this.equalOperation();
        break;
      case "CE":
        this.clearCurrentOperation();
        break;
      case "C":
        this.clearScreenOperations();
        break;
      case "DEL":
        this.delOperation();
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
    if (operationValue === null) {
      this.currentOperationText.innerText += this.currentOperation;
    } else {
      if (previous === 0) {
        operationValue = current;
      }

      this.previousOperationText.innerText = `${operationValue} ${operation}`;
      this.currentOperationText.innerText = "";
    }
  }

  changeOperation(operation) {
    const mathOperations = ["+", "-", "*", "/"];

    if (!mathOperations.includes(operation)) {
      return;
    }

    this.previousOperationText.innerText =
      this.previousOperationText.innerText.slice(0, -1) + operation;
  }

  delOperation() {
    this.currentOperationText.innerText = this.currentOperationText.innerText.slice(0, -1);
  }

  clearCurrentOperation() {
    this.currentOperationText.innerText = ""
  }

  clearScreenOperations() {
    this.currentOperationText.innerText = ""
    this.previousOperationText.innerText = ""
  }

  equalOperation() {
    const operation = this.previousOperationText.innerText.split(" ")[1];
    this.processOperation(operation);
  }
}

const calc = new Calculator(previousOperationContent, currentOperationContent);
