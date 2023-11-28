// routes/groupRoutes.js
const express = require('express');
const GroupController = require('../controllers/groups.controller');
const router = express.Router();

router.post('', GroupController.createGroup);
router.get('', GroupController.getAllGroups);
router.get('/:id', GroupController.getGroupById);
router.put('/:id', GroupController.updateGroup);
router.delete('/:id', GroupController.deleteGroup);

module.exports = router;
