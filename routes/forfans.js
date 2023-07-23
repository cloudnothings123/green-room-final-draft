//connect to express
const express = require('express')
//activate express router
const router = express.Router()
//specify location of necessary controller
const forFansController = require('../controllers/forfans')
//specify which method of controller to run when accessing /fourth
router.get('/', forFansController.getForFansIndex)
//export router for use elsewhere
module.exports = router