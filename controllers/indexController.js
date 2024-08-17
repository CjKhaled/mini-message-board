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

module.exports = {
    getMessages
}


// module.exports = {
//     getMessages: (req, res) => res.render('index', {messages: messages, hideOpen: false}),
//     getForm: (req, res) => res.render('form'),
//     getSingleMessage: (req, res) => {
//         const messageID = req.params.messageID
//         const message = messages[messageID]
//         res.render('message', {message: message, hideOpen: true})
//     },
//     postNewMessage: (req, res) => {
//         messages.push({ id: messages.length, text: req.body.userMessage, user: req.body.userName, added: new Date() })
    
//         // send users back to homepage
//         res.redirect('/')
//     }
// }