const express = require('express');

const app = express();
const PORT = 1245;

/**
 * Route handler for the root URL.
 * Sends a greeting message when accessed.
 */
app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

/**
 * Starts the server and listens on the specified port.
 * Logs a message indicating the server is running.
 */
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

module.exports = app;
