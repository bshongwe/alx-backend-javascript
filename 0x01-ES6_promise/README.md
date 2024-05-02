# 0x01. ES6 Promises 📚
`JavaScript` `ES6`

## Resources
Read or watch:

- [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [JavaScript Promise: An introduction](https://web.dev/articles/promises)
- [Await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
- [Async](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [Throw / Try](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)


### Learning Objectives
At the end of this project, you are expected to be able to explain to anyone, without the help of Google:
-  Promises (how, why, and what)
-  How to use the then, resolve, catch methods
-  How to use every method of the Promise object
-  Throw / Try
-  The await operator
-  How to use an async function


### Requirements
-  All your files will be executed on `Ubuntu 18.04 LTS` using `NodeJS 12.11.x`
-  Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
-  All your files should end with a new line
-  A `README.md file`, at the root of the folder of the project, is mandatory
-  Your code should use the js extension
-  Your code will be tested using Jest and the command npm run test
-  Your code will be verified against lint using `ESLint`
-  All of your functions must be exported


# Setup
### Install NodeJS 12.11.x
In your home directory:

```
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y

$ nodejs -v
v12.11.1
$ npm -v
6.11.3
```
<br></br>
### Install `Jest`, `Babel`, and `ESLint`
In your project directory, install Jest, Babel, and ESLint by using the supplied package.json and run npm install.
<br></br>

### Configuration Files
Add the following files to your project directory:
-  `package.json`
-  `babel.config.js`
-  `utils.js` (Use when you get to tasks requiring `uploadPhoto` and `createUser`)
-  `.eslintrc.js`

Don’t forget to run `$ npm install` when you have the `package.json`.
<br></br>

### Response Data Format
-  `uploadPhoto` returns a response with the format

```
{
  "status": 200,
  "body": "photo-profile-1"
}
```
<br></br>

-  `createUser` returns a response with the format

```
{
  "firstName": "Guillaume",
  "lastName": "Salva"
}
```
<br></br>

# Tasks
## Task 0. Keep every promise you make and only make promises you can keep
Return a `Promise` using this prototype function `getResponseFromAPI()`.

```
bob@dylan:~$ cat 0-main.js
import getResponseFromAPI from "./0-promise.js";

const response = getResponseFromAPI();
console.log(response instanceof Promise);

bob@dylan:~$ 
bob@dylan:~$ npm run dev 0-main.js 
true
bob@dylan:~$
```

GitHub repository: `alx-backend-javascript` </br>
Directory: `0x01-ES6_promise` </br>
File: `0-promise.js`

<br></br>
<br></br>

## Task 1. Don't make a promise...if you know you can't keep it
Using the prototype below, return a promise. The parameter is a `boolean`.

`getFullResponseFromAPI(success)`

```
bob@dylan:~$ cat 1-main.js
import getFullResponseFromAPI from './1-promise';

console.log(getFullResponseFromAPI(true));
console.log(getFullResponseFromAPI(false));

bob@dylan:~$ 
bob@dylan:~$ npm run dev 1-main.js 
Promise { { status: 200, body: 'Success' } }
Promise {
  <rejected> Error: The fake API is not working currently
    ...
    ...
bob@dylan:~$ 
```

GitHub repository: `alx-backend-javascript` </br>
Directory: `0x01-ES6_promise` </br>
File: `1-promise.js`
<br></br>
<br></br>

## 2. Catch me if you can!
Using the function prototype below

`function handleResponseFromAPI(promise)`

Append three handlers to the function:
- When the `Promise` resolves, return an object with the following attributes
    - `status: 200`
    - `body: success`
- When the `Promise` rejects, return an empty `Error object`
- For every resolution, log `Got a response from the API` to the console

```
bob@dylan:~$ cat 2-main.js 
import handleResponseFromAPI from "./2-then";

const promise = Promise.resolve();
handleResponseFromAPI(promise);

bob@dylan:~$ 
bob@dylan:~$ npm run dev 2-main.js 
Got a response from the API
bob@dylan:~$ 
```

GitHub repository: `alx-backend-javascript` </br>
Directory: `0x01-ES6_promise` </br>
File: `2-then.js`

<br></br>
<br></br>

## Task 3. Handle multiple successful promises
In this file, import `uploadPhoto` and `createUser` from `utils.js`.</br>
Knowing that the functions in `utils.js` return promises, use the prototype below to collectively resolve all promises and log `body firstName lastName` to the console.

```
function handleProfileSignup()
```

In the event of an error, log `Signup system offline` to the console

```
bob@dylan:~$ cat 3-main.js
import handleProfileSignup from "./3-all";

handleProfileSignup();

bob@dylan:~$ 
bob@dylan:~$ npm run dev 3-main.js 
photo-profile-1 Guillaume Salva
bob@dylan:~$ 
```

GitHub repository: `alx-backend-javascript` </br>
Directory: `0x01-ES6_promise` </br>
File: `3-all.js`

<br></br>
<br></br>

## Task 4. Simple promise
Using the following prototype

```
function signUpUser(firstName, lastName) {
}
```

That returns a resolved promise with this object:

```
{
  "firstName": value,
  "lastName": value,
}
```
<br></br>

```
bob@dylan:~$ cat 4-main.js
import signUpUser from "./4-user-promise";

console.log(signUpUser("Bob", "Dylan"));

bob@dylan:~$ 
bob@dylan:~$ npm run dev 4-main.js 
Promise { { firstName: 'Bob', lastName: 'Dylan' } }
bob@dylan:~$ 
```

GitHub repository: `alx-backend-javascript` </br>
Directory: `0x01-ES6_promise` </br>
File: `4-user-promise.js`

<br></br>
<br></br>

## Task 5. Reject the promises
Write and export a function named `uploadPhoto`. It should accept one argument `fileName` (string).</br>
The function should return a `Promise` rejecting with an `Error` and the string `$fileName cannot be processed`

```
export default function uploadPhoto(filename) {

}
```
<br></br>
```
bob@dylan:~$ cat 5-main.js
import uploadPhoto from './5-photo-reject';

console.log(uploadPhoto('guillaume.jpg'));

bob@dylan:~$ 
bob@dylan:~$ npm run dev 5-main.js 
Promise {
  <rejected> Error: guillaume.jpg cannot be processed
  ..
    ..
bob@dylan:~$ 
```

GitHub repository: `alx-backend-javascript` </br>
Directory: `0x01-ES6_promise` </br>
File: `5-photo-reject.js`

<br></br>
<br></br>

## Task 6. Handle multiple promises
Import `signUpUser` from `4-user-promise.js` and `uploadPhoto` from `5-photo-reject.js`.</br>
Write and export a function named `handleProfileSignup`. It should accept three arguments `firstName` (string), `lastName` (string), and `fileName` (string). The function should call the two other functions. When the promises are all settled, it should return an array with the following structure:

```
[
    {
      "status": "status_of_the_promise",
      "value": "value or error returned by the Promise"
    },
    ...
  ]
```
<br></br>
```
bob@dylan:~$ cat 6-main.js
import handleProfileSignup from './6-final-user';

console.log(handleProfileSignup("Bob", "Dylan", "bob_dylan.jpg"));

bob@dylan:~$ 
bob@dylan:~$ npm run dev 6-main.js 
Promise { <pending> }
bob@dylan:~$ 
```

GitHub repository: `alx-backend-javascript` </br>
Directory: `0x01-ES6_promise` </br>
File: `6-final-user.js`

<br></br>
<br></br>

## Task 7. Load balancer
Write and export a function named `loadBalancer`. It should accept two arguments `chinaDownload` (Promise) and `USDownload` (Promise).</br>
The function should return the value returned by the promise that resolved first.

```
export default function loadBalancer(chinaDownload, USDownload) {

}
```
<br></br>

```
bob@dylan:~$ cat 7-main.js
import loadBalancer from "./7-load_balancer";

const ukSuccess = 'Downloading from UK is faster';
const frSuccess = 'Downloading from FR is faster';

const promiseUK = new Promise(function(resolve, reject) {
    setTimeout(resolve, 100, ukSuccess);
});

const promiseUKSlow = new Promise(function(resolve, reject) {
    setTimeout(resolve, 400, ukSuccess);
});

const promiseFR = new Promise(function(resolve, reject) {
    setTimeout(resolve, 200, frSuccess);
});

const test = async () => {
    console.log(await loadBalancer(promiseUK, promiseFR));
    console.log(await loadBalancer(promiseUKSlow, promiseFR));
}

test();

bob@dylan:~$ 
bob@dylan:~$ npm run dev 7-main.js 
Downloading from UK is faster
Downloading from FR is faster
bob@dylan:~$ 
```

GitHub repository: `alx-backend-javascript` </br>
Directory: `0x01-ES6_promise` </br>
File: `7-load_balancer.js`

<br></br>
<br></br>

## Task 8. Throw error / try catch
Write a function named `divideFunction` that will accept two arguments: `numerator` (Number) and `denominator` (Number).</br>
When the `denominator` argument is equal to 0, the function should throw a new error with the message `cannot divide by 0`. Otherwise, it should return the `numerator` divided by the `denominator`.

```
export default function divideFunction(numerator, denominator) {

}
```
<br></br>

```
bob@dylan:~$ cat 8-main.js
import divideFunction from './8-try';

console.log(divideFunction(10, 2));
console.log(divideFunction(10, 0));

bob@dylan:~$ 
bob@dylan:~$ npm run dev 8-main.js 
5
..../8-try.js:15
  throw Error('cannot divide by 0');
  ^
.....

bob@dylan:~$ 
```

GitHub repository: `alx-backend-javascript` </br>
Directory: `0x01-ES6_promise` </br>
File: `8-try.js`

## Task 9. Throw an error
Write a function named `guardrail` that will accept one argument `mathFunction` (Function).</br>
This function should create and return an array named `queue`.</br>
When the `mathFunction` function is executed, the value returned by the function should be appended to the `queue`. If this function throws an error, the error message should be appended to the `queue`. In every case, the message `Guardrail was processed` should be added to the `queue`.

Example:

```
[
  1000,
  'Guardrail was processed',
]
```
<br></br>
```
bob@dylan:~$ cat 9-main.js
import guardrail from './9-try';
import divideFunction from './8-try';

console.log(guardrail(() => { return divideFunction(10, 2)}));
console.log(guard

rail(() => { return divideFunction(10, 0)}));

bob@dylan:~$ 
bob@dylan:~$ npm run dev 9-main.js 
[ 5, 'Guardrail was processed' ]
[ 'Error: cannot divide by 0', 'Guardrail was processed' ]
bob@dylan:~$ 
```

GitHub repository: `alx-backend-javascript` </br>
Directory: `0x01-ES6_promise` </br>
File: `9-try.js`

## Task 10. Await / Async
Import `uploadPhoto` and `createUser` from `utils.js`.</br>
Write an `async` function named `asyncUploadUser` that will call these two functions and return an object with the following format:

```
{
  "photo": "response_from_uploadPhoto_function",
  "user": "response_from_createUser_function",
}
```
<br></br>
If one of the `async` function fails, return an empty object.

```
bob@dylan:~$ cat 100-main.js
import asyncUploadUser from "./100-await";

const test = async () => {
    const value = await asyncUploadUser();
    console.log(value);
};

test();

bob@dylan:~$ 
bob@dylan:~$ npm run dev 100-main.js 
{
  "photo": { "status": 200, "body": "photo-profile-1" },
  "user": { "firstName": "Guillaume", "lastName": "Salva" }
}
bob@dylan:~$ 
```

GitHub repository: `alx-backend-javascript` </br>
Directory: `0x01-ES6_promise` </br>
File: `100-await.js`


