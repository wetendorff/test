const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require('cors');
const timestampWorker = require('./timestampWorker');

const app = express();
const port = process.env.PORT || 3001;

// Setup middleware
app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Setup Route
app.get('/api/v1/timestamp', async (req, res) => {
  try {
    res.status(200).json({
      timestamp: timestampWorker.getTimestampEncoded()
    });
  } catch (err) {
    res.status(400).json({
      message: 'Error occured',
      err
    });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Running on port ${port}`);
});

module.exports = app;
