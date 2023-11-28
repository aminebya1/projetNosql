// routes/albumRoutes.js
const express = require('express');
const AlbumController = require('../controllers/album.controller');
const router = express.Router();

router.post('/albums', AlbumController.createAlbum);
router.get('/albums', AlbumController.getAllAlbums);
router.get('/albums/:id', AlbumController.getAlbumById);
router.patch('/albums/:id', AlbumController.updateAlbum);
router.delete('/albums/:id', AlbumController.deleteAlbum);

module.exports = router;
