const { Client } = require('pg');

const client = new Client({
  host: 'db', // Container ip address
  port: 5432,
  user: 'root',
  password: 'root',
  database: 'mycontacts',
});

// client.connect();

const MAX_RETRY_ATTEMPTS =  3;
const RETRY_DELAY =  1000; //  1 second

async function connectWithRetry() {
  let retryCount =  0;

  while (retryCount < MAX_RETRY_ATTEMPTS) {
    try {
      // Attempt to connect to the database
      await client.connect();
      console.log();
      console.log();
      console.log();
      console.log("Connected successfully");
      console.log();
      console.log();
      console.log();
      break; // Connection successful, exit loop
    } catch (error) {
      console.log();
      console.error(`Connection attempt ${retryCount +  1} failed:`, error.message);
      console.log();
      retryCount++;
      if (retryCount === MAX_RETRY_ATTEMPTS) {
        console.log();
        console.log();
        console.log();
        throw new Error("Failed to connect after maximum attempts");
      }
      // Wait before trying again
      await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY));
    }
  }
}

// Usage
connectWithRetry().catch((error) => {
  console.error("Could not connect to the database after retries:", error.message);
});

exports.query = async (query, values) => {
  const { rows } = await client.query(query, values);
  return rows;
}
