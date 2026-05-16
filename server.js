const express = require('express');
const cors = require('cors');

const { initDb } = require('./db/connect');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
// built-in middleware to parse JSON bodies from post and put requests
app.use(express.json());

// node will automatically look for an index.js file in the routes folder
app.use('/', require('./routes'));

initDb()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Connected to MongoDB and running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB:', error);
  });