//connect to express
const express = require('express')
//activate express router
const router = express.Router()
//specify location of necessary controller
const privacyController = require('../controllers/privacy')
//specify which method of controller to run when accessing /fourth
router.get('/', privacyController.getPrivacyIndex)
//export router for use elsewhere
module.exports = router