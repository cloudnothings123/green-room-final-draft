//connect to express
const express = require('express')
//activate express router
const router = express.Router()
//specify location of necessary controller
const getInTouchController = require('../controllers/getintouch')
//specify which method of controller to run when accessing /fourth
router.get('/', getInTouchController.getGetInTouchIndex)
//export router for use elsewhere
module.exports = router