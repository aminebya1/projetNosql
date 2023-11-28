// routes/discussionsRoutes.js
const express = require('express');
const DiscussionController = require('../controllers/discussion.controller');
const router = express.Router();

router.post('/', DiscussionController.createDiscussion);
router.get('/', DiscussionController.getAllDiscussions);
router.get('/:id', DiscussionController.getDiscussionById);
router.put('/:id', DiscussionController.updateDiscussion);
router.delete('/:id', DiscussionController.deleteDiscussion);

module.exports = router;
