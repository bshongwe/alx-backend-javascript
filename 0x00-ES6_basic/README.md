# 0x00-ES6_basic 📚
<code>JavaScript</code> <code>ES6</code>

## Resources
Read or watch:
- [ECMAScript 6 - ECMAScript 2015](https://www.w3schools.com/js/js_es6.asp)
- [Statements and declarations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements)
- [Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [Default parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)
- [Rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
- [Javascript ES6 — Iterables and Iterators](https://towardsdatascience.com/javascript-es6-iterables-and-iterators-de18b54f4d4?gi=9e4cefa3a5db)

## Learning Objectives
At the end of this project, you are expected to be able to explain to anyone, without the help of Google:
- What ES6 is
- New features introduced in ES6
- The difference between a constant and a variable
- Block-scoped variables
- Arrow functions and function parameters default to them
- Rest and spread function parameters
- String templating in ES6
- Object creation and their properties in ES6
- Iterators and for-of loops

# Requirements
## General
- All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All your files should end with a new line
- A README.md file, at the root of the folder of the project, is mandatory
- Your code should use the js extension
- Your code will be tested using the Jest Testing Framework
- Your code will be analyzed using the linter ESLint along with specific rules that we’ll provide
- All of your functions must be exported

# Setup
### Install NodeJS 12.11.x
- (in your home directory):

```

curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y

$ nodejs -v
v12.11.1
$ npm -v
6.11.3
```
### Install Jest, Babel, and ESLint

In your project directory, install Jest, Babel and ESList by using the supplied package.json and run npm install.

### Configuration files
Add the files below to your project directory
- package.json
- babel.config.js
- .eslintrc.js

### Finally
Don’t forget to run npm install from the terminal of your project folder to install all necessary project dependencies.

# Tasks
- **Task 0. Const or let?**
    - Modify `taskFirst` to instantiate variables using `const`.
    - Modify `taskNext` to instantiate variables using `let`.
    - **Edge Test:** Ensure the functions return the expected strings when called.
<br></br>
- **Task 1. Block Scope**
    - Modify variables inside the function `taskBlock` so that they aren't overwritten inside the conditional block.
    - **Edge Test:** Check if the function returns the expected arrays when called with different arguments.
<br></br>
- **Task 2. Arrow functions**
    - Rewrite the function `getNeighborhoodsList` to use ES6 arrow syntax for the `add` method.
    - **Edge Test:** Confirm that the `add` method adds the new neighborhood to the list correctly.
<br></br>
- **Task 3. Parameter defaults**
    - Condense the internals of the function `getSumOfHoods` to 1 line using default parameter values.
    - **Edge Test:** Test the function with different numbers of arguments to ensure it computes the sum correctly.
<br></br>
- **Task 4. Rest parameter syntax for functions**
    - Modify the function `returnHowManyArguments` to return the number of arguments passed to it using the rest parameter syntax.
    - **Edge Test:** Test the function with varying numbers of arguments to verify the count is correct.
<br></br>
- **Task 5. The wonders of spread syntax**
    - Concatenate 2 arrays and each character of a string using spread syntax in the function `concatArrays`.
    - **Edge Test:** Check if the function returns the expected concatenated array when called.
<br></br>
- **Task 6. Take advantage of template literals**
    - Rewrite the return statement of the function `getSanFranciscoDescription` to use template literals for string interpolation.
    - **Edge Test:** Verify that the function returns the expected description string.
<br></br>
- **Task 7. Object property value shorthand syntax**
    - Modify the function `getBudgetObject` to use object property value shorthand syntax.
    - **Edge Test:** Ensure that the function returns the expected budget object.
<br></br>
- **Task 8. No need to create empty objects before adding in properties**
    - Rewrite the function `getBudgetForCurrentYear` to use ES6 computed property names on the budget object.
    - **Edge Test:** Confirm that the function returns a budget object with the expected properties.
<br></br>
- **Task 9. ES6 method properties**
    - Rewrite the function `getFullBudgetObject` to use ES6 method properties in the `fullBudget` object.
    - **Edge Test:** Check if the methods in the `fullBudget` object return the expected values.
<br></br>
- **Task 10. For...of Loops**
    - Rewrite the function `appendToEachArrayValue` to use ES6’s for...of loop.
    - **Edge Test:** Ensure the function modifies the array elements as expected.
<br></br>
- **Task 11. Iterator**
    - Write a function named `createEmployeesObject` that returns an object with department names as keys and lists of employees as values.
    - **Edge Test:** Confirm that the function returns the expected object structure.
<br></br>
- **Task 12. Let's create a report object**
    - Write a function named `createReportObject` that returns an object containing department names and a method to get the number of departments.
    - **Edge Test:** Check if the method returns the correct number of departments.
<br></br>
- **Task 13 - Advanced. Iterating through report objects**
    - Write a function named `createIteratorObject` that returns an iterator to go through every employee in every department.
    - **Edge Test:** Iterate through the report object and confirm that all employees are returned correctly.
<br></br>
- **Task 14 - Advanced. Iterate through object**
    - Write a function named `iterateThroughObject` that returns every employee name in a string, separated by `|`.
    - **Edge Test:** Ensure the function returns the expected string of employee names.


