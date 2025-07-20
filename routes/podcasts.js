//connect to express
const express = require('express')
//activate express router
const router = express.Router()
//specify location of necessary controller
const podcastsController = require('../controllers/podcasts')
//specify which method of controller to run when accessing /fourth
router.get('/', podcastsController.getPodcastsIndex)
//export router for use elsewhere
module.exports = router