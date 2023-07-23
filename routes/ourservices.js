//connect to express
const express = require('express')
//activate express router
const router = express.Router()
//specify location of necessary controller
const ourServicesController = require('../controllers/ourservices')
//specify which method of controller to run when accessing /fourth
router.get('/', ourServicesController.getOurServicesIndex)
//export router for use elsewhere
module.exports = router