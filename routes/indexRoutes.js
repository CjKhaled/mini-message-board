const express = require('express')
const indexController = require('../controllers/indexController')
const router = express.Router()

const messages = [
    {
        text: 'Hi there!',
        user: 'Armando',
        added: new Date()
    },
    {
        text: 'Hello World!',
        user: 'Charles',
        added: new Date()
    }
]

router.get('/', (req, res) => {
    res.render('index', {messages: messages})
})

router.get('/new', (req, res) => {
    res.render('form')
})

router.post('/new', (req, res) => {
    messages.push({ text: req.body.userMessage, user: req.body.userName, added: new Date() })
    // send users back to homepage
    res.redirect('/')
})


module.exports = router 