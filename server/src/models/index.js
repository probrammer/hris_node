const fs = require('fs')
const path = require('path')
const { Sequelize, DataTypes } = require('sequelize')
const config = require('../config/config')
const db = {}

// db connection 
const sequelize = new Sequelize(
    config.db.database,
    config.db.user,
    config.db.password,
    config.db.options
)

// requiring models
fs
    .readdirSync(__dirname)
    .filter((file) => file !== 'index.js')
    .forEach((file) => {
        db[path.basename(file,'.js')] = require(`./${file}`)(sequelize, DataTypes)
    })

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db