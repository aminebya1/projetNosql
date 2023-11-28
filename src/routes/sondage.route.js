// routes/sondageRoutes.js
const express = require('express');
const SondageController = require('../controllers/sondage.controller');
const router = express.Router();

router.post('/sondages', SondageController.createSondage);
router.get('/sondages', SondageController.getAllSondages);
router.get('/sondages/:id', SondageController.getSondageById);
router.patch('/sondages/:id', SondageController.updateSondage);
router.delete('/sondages/:id', SondageController.deleteSondage);

module.exports = router;
