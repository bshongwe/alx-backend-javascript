# 0x06. Unittests in JS 🚀

## Project Overview 🛠️
This project focuses on mastering unit testing in JavaScript using various
tools and libraries like Mocha, Chai, and Sinon. By the end of this project,
you should be able to confidently write and run unit tests, handle asynchronous
testing, and implement integration tests with a NodeJS server.

## Resources 📚

Read or watch:
- [Mocha documentation](https://mochajs.org/)
- [Chai](https://www.chaijs.com/)
- [Sinon](https://sinonjs.org/)
- [Express](https://expressjs.com/)
- [Request](https://www.npmjs.com/package/request)
- [How to Test NodeJS Apps using Mocha, Chai and SinonJS](https://scotch.io/tutorials/test-a-node-restful-api-with-mocha-and-chai)

## Learning Objectives 🎯

By the end of this project, you will be able to explain:
- How to use Mocha to write a test suite
- How to use different assertion libraries (Node or Chai)
- How to present long test suites
- When and how to use spies
- When and how to use stubs
- What are hooks and when to use them
- Unit testing with Async functions
- How to write integration tests with a small Node server

## Requirements 📝

- All code will be executed on Ubuntu 18.04 using Node 12.x.x
- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
- All files should end with a new line
- A `README.md` file, at the root of the project, is mandatory
- Code should use the `.js` extension
- Running tests with `npm run test *.test.js` should pass without any warning or error

## Tasks 📋

### 0. Basic test with Mocha and Node assertion library ✔️

- **Install Mocha using npm**
  - Set up a script in `package.json` to quickly run Mocha using `npm test`
  - Use `assert`
- **Create `0-calcul.js`**
  - Function `calculateNumber` that rounds and sums two numbers
- **Create `0-calcul.test.js`**
  - Test cases for `calculateNumber`
  - Use `assert`
  - Run the test suite with `npm test 0-calcul.test.js`
  
```js
// Example usage:
const calculateNumber = require("./0-calcul.js");
console.log(calculateNumber(1.5, 3.7)); // Output: 6
```

### 1. Combining descriptions 🔢

- **Create `1-calcul.js`**
  - Add a new argument `type` to the function: `SUM`, `SUBTRACT`, or `DIVIDE`
- **Create `1-calcul.test.js`**
  - Test cases for the updated function
  - Use `describe` to organize test cases
  
```js
// Example usage:
const calculateNumber = require("./1-calcul.js");
console.log(calculateNumber('DIVIDE', 1.4, 0)); // Output: 'Error'
```

### 2. Basic test using Chai assertion library ☕

- **Copy and modify files**
  - `1-calcul.js` to `2-calcul_chai.js`
  - `1-calcul.test.js` to `2-calcul_chai.test.js`
- **Rewrite test suite**
  - Use `expect` from Chai

### 3. Spies 🕵️

- **Create `utils.js`**
  - Module `Utils` with function `calculateNumber`
- **Create `3-payment.js`**
  - Function `sendPaymentRequestToApi`
- **Create `3-payment.test.js`**
  - Use `sinon.spy` to validate `Utils.calculateNumber`

### 4. Stubs 🔄

- **Create `4-payment.js` and `4-payment.test.js`**
  - Stub `Utils.calculateNumber` to return `10`
  - Verify function calls with stubs and spies

### 5. Hooks 🔧

- **Create `5-payment.js` and `5-payment.test.js`**
  - Use `beforeEach` and `afterEach` hooks
  - Verify console logs and calls

### 6. Async tests with done ⏳

- **Create `6-payment_token.js`**
  - Function `getPaymentTokenFromAPI` that returns a promise
- **Create `6-payment_token.test.js`**
  - Test async function with `done`

### 7. Skip ⏭️

- **Modify `7-skip.test.js`**
  - Skip failing test without removing it

### 8. Basic Integration testing 🌐

- **Create `8-api` folder**
  - Implement `api.js` with Express server
  - Implement `api.test.js` for integration tests

### 9. Regex integration testing 🔍

- **Modify `9-api` folder**
  - Add `GET /cart/:id` endpoint
  - Update tests in `api.test.js`

### 10. Deep equality & Post integration testing 📬

- **Modify `10-api` folder**
  - Add `GET /available_payments` and `POST /login` endpoints
  - Update tests in `api.test.js`

## Repository 📁

- **GitHub repository:** `alx-backend-javascript`
- **Directory:** `0x06-unittests_in_js`
- **Files:** 
  - `0-calcul.js`, `0-calcul.test.js`
  - `1-calcul.js`, `1-calcul.test.js`
  - `2-calcul_chai.js`, `2-calcul_chai.test.js`
  - `utils.js`, `3-payment.js`, `3-payment.test.js`
  - `4-payment.js`, `4-payment.test.js`
  - `5-payment.js`, `5-payment.test.js`
  - `6-payment_token.js`, `6-payment_token.test.js`
  - `7-skip.test.js`
  - `8-api/api.js`, `8-api/api.test.js`, `8-api/package.json`
  - `9-api/api.js`, `9-api/api.test.js`, `9-api/package.json`
  - `10-api/api.js`, `10-api/api.test.js`, `10-api/package.json`

Happy Testing! 🧪
