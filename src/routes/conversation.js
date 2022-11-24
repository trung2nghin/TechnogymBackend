const express = require('express');
const router = express.Router();

const conversationController = require('../app/controllers/conversationController');
const middlewareController = require('../app/controllers/middlewareController');

// POST NEW CONVERSATION
router.post('/', conversationController.createConversation);

// GET CONVERSATION OF USER
router.get('/:userId', conversationController.getUserConversation)

module.exports = router;
