const previousOperationContent = document.querySelector(".previous-operation")
const currentOperationContent = document.querySelector(".current-operation");
const allButtons = document.querySelectorAll(".buttons-container button");

allButtons.forEach(button => {
    button.addEventListener("click", (e)=> {
        const value = e.target.innerText;

        if (+value >= 0 || value === ".") {
            calc.addDigit(value);
        } else {
            console.log("op: " + value);
        }
    })
})

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

    updateScreen() {
        this.currentOperationText.innerText += this.currentOperation;
    }
}

const calc = new Calculator(previousOperationContent, currentOperationContent);