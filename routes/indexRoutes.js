const express = require('express')
const indexController = require('../controllers/indexController')
const router = express.Router()

router.get('/', indexController.getMessages)

router.get('/new', indexController.getForm)

router.get('/messages/:messageID', indexController.getSingleMessage)

router.post('/new', indexController.postNewMessage)


module.exports = router 