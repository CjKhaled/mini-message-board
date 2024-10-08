// environment var
require('dotenv').config()

// app setup
const express = require('express')
const path = require('node:path')
const app = express()

// statics
const assetsPath = path.join(__dirname, "public")
app.use(express.static(assetsPath))

// routers
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