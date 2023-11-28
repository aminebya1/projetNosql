// routes/photoRoutes.js
const express = require('express');
const PhotoController = require('../controllers/photo.controller');
const router = express.Router();

router.post('/photos', PhotoController.createPhoto);
router.get('/photos', PhotoController.getAllPhotos);
router.get('/photos/:id', PhotoController.getPhotoById);
router.patch('/photos/:id', PhotoController.updatePhoto);
router.delete('/photos/:id', PhotoController.deletePhoto);

module.exports = router;
