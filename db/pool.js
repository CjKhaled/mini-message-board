const { Pool } = require('pg')

module.exports = new Pool({
    connectionString: `postgresql://${process.env.DB_USER}:${process.env.PASSWORD}@${process.env.DB_HOST}:${process.env.PORT}/${process.env.DATABASE}`
})