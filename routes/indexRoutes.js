const express = require('express')
const indexController = require('../controllers/indexController')
const router = express.Router()

const messages = [
    {
        id: 0,
        text: 'Hi there!',
        user: 'Armando',
        added: new Date()
    },
    {
        id: 1,
        text: 'Hello World!',
        user: 'Charles',
        added: new Date()
    }
]

router.get('/', (req, res) => {
    res.render('index', {messages: messages, hideOpen: false})
})

router.get('/new', (req, res) => {
    res.render('form')
})

router.get('/messages/:messageID', (req, res) => {
    const messageID = req.params.messageID
    const message = messages[messageID]
    res.render('message', {message: message, hideOpen: true})
})

router.post('/new', (req, res) => {
    messages.push({ id: messages.length, text: req.body.userMessage, user: req.body.userName, added: new Date() })
    
    // send users back to homepage
    res.redirect('/')
})


module.exports = router 