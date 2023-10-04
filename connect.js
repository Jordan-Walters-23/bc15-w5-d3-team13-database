// Import the pg-promise library
import pg from "pg";

// Define the connection string for your ElephantSQL database
const connectionString = process.env.DB_CONNECTION_STRING;

// Function to connect to the database
const pool = new pg.Pool({
    connectionString
});

// and log a success message
console.log("Hello");

//close the connection
await pool.end();
