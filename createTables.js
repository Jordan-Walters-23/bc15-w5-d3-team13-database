// Import the pg-promise library
import pg from "pg";

// Define the connection string for your ElephantSQL database
const connectionString = process.env.DB_CONNECTION_STRING;

// Function to connect to the database
const pool = new pg.Pool({
    connectionString
});


// Send a query - SELECT * FROM books;
const data = await pool.query("SELECT * FROM authors;");
const rows = data.rows;
console.log(rows);


//close the connection
await pool.end();