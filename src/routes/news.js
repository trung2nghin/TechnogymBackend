const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/newsController');

// ADD NEW MESSAGE
router.post('/', newsController.createNews);

// GET MESSAGE BY CONVERSATION
router.get('/', newsController.getAllNews);

module.exports = router;
