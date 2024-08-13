const express = require('express')
const indexRouter = require('./routes/indexRoutes')
const path = require('node:path')
const app = express()

// templating
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// parse form data correctly
app.use(express.urlencoded({ extended: true }))

// index routes
app.use('/', indexRouter)

const PORT = 3000
app.listen(PORT, () => console.log(`server listening on port ${PORT}!`))