// routes/sondageRoutes.js
const express = require('express');
const SondageController = require('../controllers/sondage.controller');
const router = express.Router();

router.post('', SondageController.createSondage);
router.get('', SondageController.getAllSondages);
router.get('/:id', SondageController.getSondageById);
router.put('/:id', SondageController.updateSondage);
router.delete('/:id', SondageController.deleteSondage);

module.exports = router;
