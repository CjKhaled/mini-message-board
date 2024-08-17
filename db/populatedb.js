const { Client } = require('pg')
const { argv } = require('process')
require('dotenv').config()


const SQL = `
CREATE TABLE IF NOT EXISTS messages (
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
username VARCHAR ( 15 ),
text VARCHAR( 255),
added TIMESTAMP DEFAULT NOW() 
);

INSERT INTO messages (username, text)
VALUES ('Armando', 'Hi there!'),
('Charles', 'Hello World!');
`;

async function main() {
    console.log('loading...')
    const client = new Client({
        connectionString: "postgresql://odinproject:odin123@localhost:5432/messages"
    })
    await client.connect()
    await client.query(SQL)
    await client.end()
    console.log('done')
}

main()