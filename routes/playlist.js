//connect to express
const express = require('express')
//activate express router
const router = express.Router()
//specify location of necessary controller
const playlistController = require('../controllers/playlist')
//specify which method of controller to run when accessing /fourth
router.get('/', playlistController.getPlaylistIndex)
//export router for use elsewhere
module.exports = router