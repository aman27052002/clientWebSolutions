const express = require('express')
const router = express.Router()
const contactForm = require('../controllers/contact-controller')
const {contactSchema} = require('../validator/auth-validator')
const validate = require('../middlewares/validate-middleware')
// router.get('/contact')
router.route('/contact')
.post(contactForm)

module.exports = router