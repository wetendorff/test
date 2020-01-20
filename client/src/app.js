import log from './logger';
import fetchTimestamp from './fetchTimestamp';
import autoFetchWorker from './autoFetchWorker';

log(`Initialize application`);

// Add click event to manual update button
const updateButton = document.getElementById('btnUpdate');
updateButton.addEventListener('click', fetchTimestamp);

// Start auto fetch worker
log(`Start auto fetch worker`);
autoFetchWorker();
