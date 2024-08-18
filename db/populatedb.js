const { Client } = require('pg')
const { argv } = require('process')
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname + "../.env") })
const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env


const SQL = `
CREATE TABLE IF NOT EXISTS messages (
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
username VARCHAR ( 15 ),
text VARCHAR( 255),
added TIMESTAMP DEFAULT NOW(),
CONSTRAINT unique_message UNIQUE (username, text) 
);

INSERT INTO messages (username, text)
VALUES ('Armando', 'Hi there!'),
('Charles', 'Hello World!')
ON CONFLICT (username, text) DO NOTHING;
`;

async function main() {
    console.log('loading...')
    const client = new Client({
        connectionString: `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?sslmode=require`
    })
    await client.connect()
    await client.query(SQL)
    await client.end()
    console.log('done')
}

main()