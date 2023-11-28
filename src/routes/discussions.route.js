// routes/discussionsRoutes.js
const express = require('express');
const DiscussionController = require('../controllers/discussion.controller');
const MessageController = require('../controllers/message.controller');
const router = express.Router();

router.post('/discussions', DiscussionController.createDiscussion);
router.get('/discussions', DiscussionController.getAllDiscussions);
router.get('/discussions/:id', DiscussionController.getDiscussionById);
router.patch('/discussions/:id', DiscussionController.updateDiscussion);
router.delete('/discussions/:id', DiscussionController.deleteDiscussion);

router.post('/messages', MessageController.createMessage);

module.exports = router;
