//connect to express
const express = require('express')
//activate express router
const router = express.Router()
//specify location of necessary controller
const realOurServicesController = require('../controllers/realourservices')
//specify which method of controller to run when accessing /fourth
router.get('/', realOurServicesController.getRealOurServicesIndex)
//export router for use elsewhere
module.exports = router