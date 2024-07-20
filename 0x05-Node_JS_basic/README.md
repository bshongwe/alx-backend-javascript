# ⚙️💻 0x05. NodeJS Basics 🚀💡
`Back-end` `JavaScript` `ES6` `NodeJS` `ExpressJS`

# 0x05. NodeJS Basics

## Project Overview

📚 **Back-end** | 🖥 **JavaScript** | 🚀 **ES6** | 🌐 **NodeJS** | 🏃‍♂️ **ExpressJS**

## Resources

📖 Read or watch:

- [Node JS getting started](https://nodejs.dev/learn)
- [Process API doc](https://nodejs.org/api/process.html)
- [Child process](https://nodejs.org/api/child_process.html)
- [Express getting started](https://expressjs.com/en/starter/installing.html)
- [Mocha documentation](https://mochajs.org/)
- [Nodemon documentation](https://nodemon.io/)

## Learning Objectives

By the end of this project, you should be able to explain the following concepts to anyone, without using Google:

- 🏃‍♂️ Run JavaScript using NodeJS
- 📦 Use NodeJS modules
- 📄 Use specific NodeJS modules to read files
- 🖥 Use process to access command line arguments and the environment
- 🌐 Create a small HTTP server using NodeJS
- 🏃‍♂️ Create a small HTTP server using ExpressJS
- 🛤 Create advanced routes with ExpressJS
- 🚀 Use ES6 with NodeJS with Babel-node
- 🏎 Use Nodemon to develop faster

## Requirements

- 📝 Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
- 💻 All your files will be interpreted/compiled on Ubuntu 18.04 LTS using Node (version 12.x.x)
- 🆕 All your files should end with a new line
- 📄 A `README.md` file, at the root of the folder of the project, is mandatory
- 📂 Your code should use the `.js` extension
- 🧪 Your code will be tested using Jest and the command `npm run test`
- 🧹 Your code will be verified against lint using ESLint
- ✅ Your code needs to pass all the tests and lint. You can verify the entire project running `npm run full-test`
- 📤 All of your functions/classes must be exported using `module.exports = myFunction;`
<br></br>

| Task # | Task Description | Code Snippet |
|--------|-------------------|--------------|
| 📜 0 | **Executing basic JavaScript with Node.js**<br>In the file `0-console.js`, create a function named `displayMessage` that prints in STDOUT the string argument. | ```js // 0-console.js function displayMessage(message) { console.log(message); } module.exports = displayMessage; ``` |
| ⌨️ 1 | **Using Process stdin**<br>Create a program named `1-stdin.js` that will be executed through the command line: | ```js // 1-stdin.js process.stdout.write('Welcome to Holberton School, what is your name?\n'); process.stdin.on('data', (data) => { process.stdout.write(`Your name is: ${data.toString()}`); process.exit(); }); process.on('exit', () => { process.stdout.write('This important software is now closing\n'); }); ``` |
| 📂 2 | **Reading a file synchronously with Node.js**<br>Using the `database.csv` (provided in project description), create a function `countStudents` in the file `2-read_file.js`: | ```js // 2-read_file.js const fs = require('fs'); function countStudents(path) { try { const data = fs.readFileSync(path, 'utf8'); const lines = data.split('\n').filter((line) => line); const fields = {}; lines.slice(1).forEach((line) => { const [firstname, , , field] = line.split(','); if (!fields[field]) { fields[field] = []; } fields[field].push(firstname); }); console.log(`Number of students: ${lines.length - 1}`); for (const field in fields) { if (fields.hasOwnProperty(field)) { console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`); } } } catch (error) { throw new Error('Cannot load the database'); } } module.exports = countStudents; ``` |
| 📂 3 | **Reading a file asynchronously with Node.js**<br>Using the `database.csv` (provided in project description), create a function `countStudents` in the file `3-read_file_async.js`: | ```js // 3-read_file_async.js const fs = require('fs'); function countStudents(path) { return new Promise((resolve, reject) => { fs.readFile(path, 'utf8', (err, data) => { if (err) { reject(new Error('Cannot load the database')); return; } const lines = data.split('\n').filter((line) => line); const fields = {}; lines.slice(1).forEach((line) => { const [firstname, , , field] = line.split(','); if (!fields[field]) { fields[field] = []; } fields[field].push(firstname); }); console.log(`Number of students: ${lines.length - 1}`); for (const field in fields) { if (fields.hasOwnProperty(field)) { console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`); } } resolve(); }); }); } module.exports = countStudents; ``` |
| 🌐 4 | **Create a small HTTP server using Node's HTTP module**<br>In a file named `4-http.js`, create a small HTTP server using the `http` module: | ```js // 4-http.js const http = require('http'); const app = http.createServer((req, res) => { res.writeHead(200, { 'Content-Type': 'text/plain' }); res.end('Hello Holberton School!'); }); app.listen(1245); module.exports = app; ``` |
| 🌐 5 | **Create a more complex HTTP server using Node's HTTP module**<br>In a file named `5-http.js`, create a small HTTP server using the `http` module: | ```js // 5-http.js const http = require('http'); const countStudents = require('./3-read_file_async'); const app = http.createServer((req, res) => { if (req.url === '/') { res.writeHead(200, { 'Content-Type': 'text/plain' }); res.end('Hello Holberton School!'); } else if (req.url === '/students') { res.writeHead(200, { 'Content-Type': 'text/plain' }); res.write('This is the list of our students\n'); countStudents(process.argv[2]) .then(() => { res.end(); }) .catch((err) => { res.end(err.message); }); } }); app.listen(1245); module.exports = app; ``` |
| 🚀 6 | **Create a small HTTP server using Express**<br>Install Express and in a file named `6-http_express.js`, create a small HTTP server using Express: | ```js // 6-http_express.js const express = require('express'); const app = express(); app.get('/', (req, res) => { res.send('Hello Holberton School!'); }); app.listen(1245); module.exports = app; ``` |
| 🚀 7 | **Create a more complex HTTP server using Express**<br>In a file named `7-http_express.js`, create a small HTTP server using Express: | ```js // 7-http_express.js const express = require('express'); const countStudents = require('./3-read_file_async'); const app = express(); app.get('/', (req, res) => { res.send('Hello Holberton School!'); }); app.get('/students', (req, res) => { res.write('This is the list of our students\n'); countStudents(process.argv[2]) .then(() => { res.end(); }) .catch((err) => { res.end(err.message); }); }); app.listen(1245); module.exports = app; ``` |
| 🚀 8 | **Organize a complex HTTP server using Express**<br>In a file named `8-http_express.js`, create a small HTTP server using Express: | ```js // 8-http_express.js const express = require('express'); const countStudents = require('./3-read_file_async'); const app = express(); app.get('/', (req, res) => { res.send('Hello Holberton School!'); }); app.get('/students', (req, res) => { res.write('This is the list of our students\n'); countStudents(process.argv[2]) .then(() => { res.end(); }) .catch((err) => { res.end(err.message); }); }); app.listen(1245); module.exports = app; ``` |
