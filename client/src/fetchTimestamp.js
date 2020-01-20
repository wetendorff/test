import axios from 'axios';
import log from './logger';

const endpoint = 'http://localhost:3001/api/v1/timestamp';
const timestampOutput = document.getElementById('timestamp');
const timestampEncodedOutput = document.getElementById('timestampEncoded');

export default async function fetchTimestamp() {
  try {
    const response = await axios.get(endpoint);

    // Get encoded timestamp from response
    const timestampEncoded = response.data.timestamp;

    // Decode Base64 encoded timestamp to string
    const timestamp = window.atob(timestampEncoded);

    // Update display
    timestampEncodedOutput.value = timestampEncoded;
    timestampOutput.value = timestamp.toLocaleString();

    log(`Update timestamp to: ${timestamp}`);
  } catch (error) {
    log(`Error fetching data from timestamp server`);
    console.error(error);
  }
}
