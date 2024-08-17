const pool = require('./pool')

async function getAllMessages() {
    // given as an array of objects
    const { rows } = await pool.query("SELECT * FROM messages")
    return rows
}

async function getSingleMessage(id) {
    const { rows } = await pool.query("SELECT * FROM messages WHERE id=($1)", [id])
    return rows
}

async function addMessage(username, text) {
    await pool.query("INSERT INTO messages (username, text) VALUES ($1, $2)", [username, text])
}

module.exports = {
    getAllMessages,
    getSingleMessage,
    addMessage
}