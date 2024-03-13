const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');

// Middleware - Get access to request.body object for client side data
app.use(cors());
app.use(express.json());

// SET ROUTES

// Create a to-do

// Get all to-dos

// Get a to-do

// Update a to-do

// Delete a to-do

// Set Port
app.listen(5000, () => {
  console.log('Server is listening on port 5000');
});
