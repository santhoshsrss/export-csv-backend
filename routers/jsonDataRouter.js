// routers/jsonDataRouter.js

const express = require('express');
const jsonDataController = require('../controllers/jsonDataController');

const router = express.Router();

// Define routes
router.post('/upload', jsonDataController.uploadJsonData);

module.exports = router;
