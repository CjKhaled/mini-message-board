// environment var
require('dotenv').config()
const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env
console.log('this from da app')
console.log(PGHOST, PGDATABASE, PGUSER, PGPASSWORD)

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