//connect to express
const express = require('express')
//activate express router
const router = express.Router()
//specify location of necessary controller
const ourBandController = require('../controllers/ourband')
//specify which method of controller to run when accessing /fourth
router.get('/', ourBandController.getOurBandIndex)
//export router for use elsewhere
module.exports = router