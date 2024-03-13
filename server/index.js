const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;

// Middleware - Get access to request.body object for client side data
app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
