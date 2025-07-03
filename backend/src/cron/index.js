const cron = require('node-cron');

// Example job: every minute
cron.schedule('* * * * *', () => {
  console.log('Running a scheduled task every minute');
});
