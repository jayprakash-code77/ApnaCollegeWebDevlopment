const express = require('express');
const winston = require('winston');
const app = express();

// Set up the winston logger
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console({ format: winston.format.simple() }),
    new winston.transports.File({ filename: 'requests.log' })  // Log to a file
  ],
});

// Middleware to log request properties to file
app.use((req, res, next) => {
  logger.info({
    message: 'Request Details',
    method: req.method,
    ip: req.ip,
    hostname: req.hostname,
    url: req.originalUrl,
    path: req.path,
    protocol: req.protocol,
    query: req.query,
    params: req.params,
    body: req.body,  // Only if you have body parsers like express.json() or express.urlencoded()
    headers: req.headers,
    cookies: req.cookies, // Requires cookie-parser middleware
    signedCookies: req.signedCookies, // Requires cookie-parser with signed options
    userAgent: req.get('User-Agent'),
    acceptLanguage: req.get('Accept-Language'),
    acceptEncoding: req.get('Accept-Encoding'),
    forwardedFor: req.get('X-Forwarded-For'),
    xhr: req.xhr,
    fresh: req.fresh,
    subdomains: req.subdomains,
    protocol: req.protocol
  });
  
  next();
});

// Example route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
