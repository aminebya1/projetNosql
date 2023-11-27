// routes/groupRoutes.js
const express = require('express');
const GroupController = require('../controllers/groups.controller');
const router = express.Router();

router.post('/groups', GroupController.createGroup);
router.get('/groups', GroupController.getAllGroups);
router.get('/groups/:id', GroupController.getGroupById);
router.patch('/groups/:id', GroupController.updateGroup);
router.delete('/groups/:id', GroupController.deleteGroup);

module.exports = router;
