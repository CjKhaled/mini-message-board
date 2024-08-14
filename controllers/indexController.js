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

module.exports = {
    getMessages: (req, res) => res.render('index', {messages: messages, hideOpen: false}),
    getForm: (req, res) => res.render('form'),
    getSingleMessage: (req, res) => {
        const messageID = req.params.messageID
        const message = messages[messageID]
        res.render('message', {message: message, hideOpen: true})
    },
    postNewMessage: (req, res) => {
        messages.push({ id: messages.length, text: req.body.userMessage, user: req.body.userName, added: new Date() })
    
        // send users back to homepage
        res.redirect('/')
    }
}