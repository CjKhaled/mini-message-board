
module.exports = {
    getMessages: (req, res) => res.render('index', {messages: messages})
}