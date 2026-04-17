const fs = require('fs');
const path = require('path');

const logFile = path.join(__dirname, 'requests.log');

const logger = (req, res, next) => {
  const start = Date.now();

  res.on('finish', () => {
    const timeTaken = Date.now() - start;

    const log = `${new Date().toISOString()} | ${req.method} ${req.originalUrl} | ${res.statusCode} | ${timeTaken}ms\n`;

    fs.appendFile(logFile, log, (err) => {
      if (err) console.error("Logging error:", err);
    });
  });

  next();
};

module.exports = logger;