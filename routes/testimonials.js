//connect to express
const express = require('express')
//activate express router
const router = express.Router()
//specify location of necessary controller
const testimonialsController = require('../controllers/testimonials')
//specify which method of controller to run when accessing /fourth
router.get('/', testimonialsController.getTestimonialsIndex)
//export router for use elsewhere
module.exports = router