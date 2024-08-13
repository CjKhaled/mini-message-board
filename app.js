const express = require('express')
const indexRouter = require('./routes/indexRoutes')
const app = express()


app.use('/', indexRouter)

const PORT = 3000
app.listen(PORT, () => console.log(`server listening on port ${PORT}!`))