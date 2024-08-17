const { body, validationResult } = require('express-validator')
const db = require('../db/queries')
const userError = 'username must only contain letters.'
const userLengthError = 'username must be between 1 and 15 characters.'
const messageLengthError = 'message must be between 1 and 255 characters.'

const validateUser = [
    body('userName').trim()
    .isAlpha().withMessage(userError)
    .isLength({ min: 1, max: 15 }).withMessage(userLengthError),
    
    body('userMessage').trim()
    .isLength({ min: 1, max: 255 }).withMessage(messageLengthError)
]

async function getMessages(req, res) {
    const messages = await db.getAllMessages()
    res.render('index', { messages: messages, hideOpen: false })
}

function getForm(req, res) {
    res.render('form')
}

async function getSingleMessage(req, res) {
    const messageID = parseInt(req.params.messageID)
    const message = await db.getSingleMessage(messageID)
    res.render('message', {message: message[0], hideOpen: true})
}

const postNewMessage = [validateUser, async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).render('form', { errors: errors.array() })
    }

    const text = req.body.userMessage
    const user = req.body.userName
    await db.addMessage(user, text)
    res.redirect('/')
}]


module.exports = {
    getMessages,
    getForm,
    getSingleMessage,
    postNewMessage
}