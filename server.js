const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jsonDataRouter = require('./routers/jsonDataRouter');
const cors = require('cors'); 
const app = express();
const PORT = process.env.PORT || 8080;

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/import', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware
app.use(bodyParser.json());
app.use(cors());
// Use the JSON data router
app.use('/api/json-data', jsonDataRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
