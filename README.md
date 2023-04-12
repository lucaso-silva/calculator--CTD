# Calculator--CTD

![calculator](https://user-images.githubusercontent.com/97140968/230968809-b488fd83-add9-4a9d-82fc-930dcb16cb7b.png)

### Access the [calculator](https://lucaso-silva.github.io/calculator--CTD/) 

## Overview
This Calculator was developed using HTML, CSS and JavaScript. 

> Status: Concluded 

---

### Objectives
- Build the optimal layout for the app depending on the device's screen size ✅
- Develop the four basic operations: addition, subtraction, multiplication, and division ✅
- Develop the functionalities of:
  - Clear the numbers inputted in the previous operation field (CE) ✅ 
  - Clear all the information shown in the calculator's screen (C) ✅ 
  - Delete the last digit inputted (DEL) ✅ 
  - Show the operation result by clicking on the Equals button  ✅

## Built with
- Semantic HTML5 markup
- CSS custom properties
- Object-Oriented Programming in JavaScript
- Flexbox
- CSS-grid


## What I learned 💡
Through this project, I could develop using an important programming paradigm: Object-oriented programming. Inside the field of OOP I could improve my knowledge about the use of Classes and Constructor in JavaScript. 

First, was necessary to create a class which I named Calculator, and its constructor, which receives the parameters necessary to initialize the application.

```JavaScript
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
```


---
### 🛠️ Continued development

The next steps can be focused on implementing more calculator functionalities. 
