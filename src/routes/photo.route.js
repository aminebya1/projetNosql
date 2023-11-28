// routes/photoRoutes.js
const express = require('express');
const PhotoController = require('../controllers/photo.controller');
const router = express.Router();

router.post('', PhotoController.createPhoto);
router.get('', PhotoController.getAllPhotos);
router.get('/:id', PhotoController.getPhotoById);
router.put('/:id', PhotoController.updatePhoto);
router.delete('/:id', PhotoController.deletePhoto);

module.exports = router;
