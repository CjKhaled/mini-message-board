// environment var and server setup
require('dotenv').config()
const postgres = require('postgres')
const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env

const sql = postgres({
    host: PGHOST,
    database: PGDATABASE,
    username: PGUSER,
    password: PGPASSWORD,
    port: 5432,
    ssl: 'require',
  });

// app setup
const express = require('express')
const path = require('node:path')
const app = express()
const indexRouter = require('./routes/indexRoutes')


// templating
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// parse form data correctly
app.use(express.urlencoded({ extended: true }))

// index routes
app.use('/', indexRouter)

const PORT = 3000
app.listen(PORT, () => console.log(`server listening on port ${PORT}!`))