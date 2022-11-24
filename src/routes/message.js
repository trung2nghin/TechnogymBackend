const express = require('express');
const router = express.Router();

const messageController = require('../app/controllers/messageController');
const middlewareController = require('../app/controllers/middlewareController');

// ADD NEW MESSAGE
router.post('/', messageController.createMessage);

// GET MESSAGE BY CONVERSATION
router.get('/:conversationId', messageController.getMessage)

module.exports = router;
