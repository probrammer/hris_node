const express = require('express')
const bodyParser = require('body-parser')
// const cookieParser = require('cookie-parser')
const cors = require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv')
const config = require('./config/config')
const { sequelize } = require('./models')

// middlewares
dotenv.config()
const app = express()
app.use(bodyParser.json())
// app.use(cookieParser)
app.use(cors())
app.use(morgan('combined'))

// routes
require('./routes')(app)

sequelize.sync({force: false})
    .then(() => {
        app.listen(config.port)
        console.log(`Server started on port ${config.port}`)
    })