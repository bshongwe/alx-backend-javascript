const http = require('http');

/**
 * Handles incoming HTTP requests and sends a response with a welcome message.
 */
const PORT = 1245;
const HOST = 'localhost';
const app = http.createServer();

app.on('request', (_, res) => {
  const responseText = 'Hello Holberton School!';

  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', responseText.length);
  res.statusCode = 200;
  res.write(Buffer.from(responseText));
});

/**
 * Starts the HTTP server and listens on the specified host and port.
 */
app.listen(PORT, HOST, () => {
  process.stdout.write(`Server listening at -> http://${HOST}:${PORT}\n`);
});

module.exports = app;
