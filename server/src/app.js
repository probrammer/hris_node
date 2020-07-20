const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const config = require('./config/config')

const app = express()
app.use(bodyParser.json())
app.use(cors())
app.use(morgan('combined'))

require('./routes')(app)

app.listen(config.port || 8081)
console.log(`Server started on port ${config.port || 8081}`)