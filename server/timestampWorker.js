const CronJob = require('cron').CronJob;

let timestamp;
let timestampEncoded;

const job = new CronJob(
  '0 * * * * *', // Update every minut
  () => {
    timestamp = new Date().toUTCString();
    timestampEncoded = Buffer.from(timestamp).toString('base64');
    console.log(`CronJob: Update timestamp ${timestamp} - ${timestampEncoded}`);
  },
  null, // onComplete
  true, // start
  null, // timeZone
  null, // context
  true // runOnInit
);

function getTimestamp() {
  return timestamp;
}

function getTimestampEncoded() {
  return timestampEncoded;
}

module.exports = {
  getTimestamp: getTimestamp,
  getTimestampEncoded: getTimestampEncoded
};
