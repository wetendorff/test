import log from './logger';
import fetchTimestamp from './fetchTimestamp';

export default function autoFetchWorker() {
  const timeout = Math.floor(Math.random() * 60000) + 30000; // Create a random timeout between 30 and 90 seconds.
  log(`Automatic update timestamp in ${Math.floor(timeout / 1000)} seconds`);
  setTimeout(async () => {
    await fetchTimestamp();
    autoFetchWorker();
  }, timeout);
}
