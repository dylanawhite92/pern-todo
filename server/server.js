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
      'INSERT INTO todo (description) VALUES($1) RETURNING *',
      [description]
    );

    res.json(newToDo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// Get all to-dos
app.get('/todos', async (req, res) => {
  try {
    const allToDos = await pool.query('SELECT * FROM todo');

    res.json(allToDos.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// Get a specific to-do
app.get('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const toDo = await pool.query('SELECT * FROM todo WHERE todo_id = $1', [
      id,
    ]);

    res.json(toDo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// Update a to-do

// Delete a to-do

// Set Port
app.listen(5000, () => {
  console.log('Server is listening on port 5000');
});
