//connect to express
const express = require('express')
//activate express router
const router = express.Router()
//specify location of necessary controller
const impressumController = require('../controllers/impressum')
//specify which method of controller to run when accessing /fourth
router.get('/', impressumController.getImpressumIndex)
//export router for use elsewhere
module.exports = router