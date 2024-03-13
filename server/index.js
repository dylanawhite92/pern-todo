const express = require('express');
const app = express();
const cors = require('cors');

// Middleware - Get access to request.body object for client side data
app.use(cors());
app.use(express.json());

app.listen(5000, () => {
  console.log('Server is listening on port 5000');
});
