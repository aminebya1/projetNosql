// routes/albumRoutes.js
const express = require('express');
const AlbumController = require('../controllers/album.controller');
const router = express.Router();

router.post('/', AlbumController.createAlbum);
router.get('/', AlbumController.getAllAlbums);
router.get('/:id', AlbumController.getAlbumById);
router.put('/:id', AlbumController.updateAlbum);
router.delete('/:id', AlbumController.deleteAlbum);

module.exports = router;
