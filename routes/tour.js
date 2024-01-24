//connect to express
const express = require('express')
//activate express router
const router = express.Router()
//specify location of necessary controller
const tourController = require('../controllers/tour')
//specify which method of controller to run when accessing /fourth
router.get('/', tourController.getTourIndex)
//export router for use elsewhere
module.exports = router