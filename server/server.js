const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');

// Middleware - Get access to req.body object for client side data
app.use(cors());
app.use(express.json());

// SET ROUTES - Testing in Postman

// Create a to-do
app.post('/todos', async (req, res) => {
  try {
    const { description } = req.body;

    // Use placeholder value to insert description given
    const newToDo = await pool.query(
      'INSERT INTO todo (description) VALUES($1)',
      [description]
    );

    res.json(newToDo);
  } catch (err) {
    console.error(err.message);
  }
});

// Get all to-dos

// Get a to-do

// Update a to-do

// Delete a to-do

// Set Port
app.listen(5000, () => {
  console.log('Server is listening on port 5000');
});
